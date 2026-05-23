const config = {
  pbUrl: process.env.PB_URL,
  adminEmail: process.env.PB_ADMIN_EMAIL,
  adminPass: process.env.PB_ADMIN_PASS,
  clientEmail: process.env.CLIENT_EMAIL || "cliente.demo@example.com",
  clientPass: process.env.CLIENT_PASS || "ClienteDemo123!",
  siteTitle: process.env.SITE_TITLE || "Expertos en Servicio Tecnico Profesional",
  siteSubtitle:
    process.env.SITE_SUBTITLE ||
    "Soluciones rapidas y garantizadas para tus equipos y dispositivos.",
  phone: process.env.SITE_PHONE || "0981236300",
  whatsappUrl: process.env.SITE_WHATSAPP_URL || "https://wa.me/595981236300",
  address: process.env.SITE_ADDRESS || "Asuncion, Paraguay",
  mapsUrl: process.env.SITE_MAPS_URL || "",
  metaPixelId: process.env.META_PIXEL_ID || "",
  metaPixelEnabled: process.env.META_PIXEL_ENABLED === "true"
};

for (const [key, value] of Object.entries({
  PB_URL: config.pbUrl,
  PB_ADMIN_EMAIL: config.adminEmail,
  PB_ADMIN_PASS: config.adminPass
})) {
  if (!value) {
    console.error(`Falta variable obligatoria: ${key}`);
    process.exit(1);
  }
}

const pbUrl = config.pbUrl.replace(/\/+$/, "");

async function pb(path, { method = "GET", token, body } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${pbUrl}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
  const raw = await res.text();
  let json = {};
  try {
    json = raw ? JSON.parse(raw) : {};
  } catch {
    json = { raw };
  }
  if (!res.ok) {
    throw new Error(`${method} ${path} -> ${res.status} ${JSON.stringify(json)}`);
  }
  return json;
}

async function authSuperuser() {
  const data = await pb("/api/collections/_superusers/auth-with-password", {
    method: "POST",
    body: {
      identity: config.adminEmail,
      password: config.adminPass
    }
  });
  return data.token;
}

async function upsertClientUser(token) {
  const listed = await pb(
    `/api/collections/users/records?filter=${encodeURIComponent(`email="${config.clientEmail}"`)}&perPage=1`,
    { token }
  );
  const payload = {
    email: config.clientEmail,
    password: config.clientPass,
    passwordConfirm: config.clientPass,
    verified: true,
    name: "Cliente Demo"
  };
  if (listed.items?.length) {
    const id = listed.items[0].id;
    await pb(`/api/collections/users/records/${id}`, {
      method: "PATCH",
      token,
      body: payload
    });
    console.log(`Usuario cliente actualizado: ${config.clientEmail}`);
  } else {
    await pb("/api/collections/users/records", {
      method: "POST",
      token,
      body: payload
    });
    console.log(`Usuario cliente creado: ${config.clientEmail}`);
  }
}

async function upsertSiteSettings(token) {
  const listed = await pb("/api/collections/site_settings/records?perPage=1", {
    token
  });
  const payloadBase = {
    hero_title: config.siteTitle,
    hero_subtitle: config.siteSubtitle,
    phone: config.phone,
    whatsapp_url: config.whatsappUrl,
    address: config.address
  };
  const payloadWithMaps = {
    ...payloadBase,
    maps_url: config.mapsUrl,
    meta_pixel_id: config.metaPixelId,
    meta_pixel_enabled: config.metaPixelEnabled
  };
  const save = async (body) => {
    if (listed.items?.length) {
      const id = listed.items[0].id;
      await pb(`/api/collections/site_settings/records/${id}`, {
        method: "PATCH",
        token,
        body
      });
      console.log("site_settings actualizado.");
    } else {
      await pb("/api/collections/site_settings/records", {
        method: "POST",
        token,
        body
      });
      console.log("site_settings creado.");
    }
  };
  if (listed.items?.length) {
    try {
      await save(payloadWithMaps);
    } catch (err) {
      const msg = String(err.message || "");
      if (!msg.includes("maps_url") && !msg.includes("meta_pixel_id") && !msg.includes("meta_pixel_enabled")) throw err;
      await save(payloadBase);
      console.log("Faltan campos opcionales (maps/meta pixel) en este esquema; se guardó base.");
    }
    return;
  }
  try {
    await save(payloadWithMaps);
  } catch (err) {
    const msg = String(err.message || "");
    if (!msg.includes("maps_url") && !msg.includes("meta_pixel_id") && !msg.includes("meta_pixel_enabled")) throw err;
    await save(payloadBase);
    console.log("Faltan campos opcionales (maps/meta pixel) en este esquema; se guardó base.");
  }
}

async function seedServices(token) {
  const defaults = [
    {
      title: "Mantenimiento Preventivo",
      description: "Limpieza y optimizacion termica.",
      order: 1,
      is_active: true
    },
    {
      title: "Reparacion de Hardware",
      description: "Diagnostico y cambio de componentes.",
      order: 2,
      is_active: true
    },
    {
      title: "Soporte Tecnico a Domicilio",
      description: "Asistencia rapida para empresas y hogares.",
      order: 3,
      is_active: true
    }
  ];

  for (const svc of defaults) {
    const listed = await pb(
      `/api/collections/services/records?filter=${encodeURIComponent(`title="${svc.title}"`)}&perPage=1`,
      { token }
    );
    if (listed.items?.length) {
      const id = listed.items[0].id;
      await pb(`/api/collections/services/records/${id}`, {
        method: "PATCH",
        token,
        body: svc
      });
    } else {
      await pb("/api/collections/services/records", {
        method: "POST",
        token,
        body: svc
      });
    }
  }
  console.log("services cargado.");
}

async function main() {
  console.log("Autenticando superuser...");
  const token = await authSuperuser();
  await upsertClientUser(token);
  await upsertSiteSettings(token);
  await seedServices(token);
  console.log("Seed completado.");
}

main().catch((err) => {
  console.error("Fallo seed:", err.message);
  process.exit(1);
});
