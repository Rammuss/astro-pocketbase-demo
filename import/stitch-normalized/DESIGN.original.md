---
name: Technical Excellence System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#49607e'
  primary: '#000f22'
  on-primary: '#ffffff'
  primary-container: '#0a2540'
  on-primary-container: '#768dad'
  inverse-primary: '#b0c8eb'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e6'
  on-secondary-container: '#626567'
  tertiary: '#1f0700'
  on-tertiary: '#ffffff'
  tertiary-container: '#421600'
  on-tertiary-container: '#e86100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b0c8eb'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#314865'
  secondary-fixed: '#e0e3e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Marca y Estilo
Este sistema de diseño está proyectado para transmitir **confianza, precisión y eficiencia operativa**. Se dirige a un público que busca soluciones técnicas profesionales, donde la claridad de la información y la sensación de seguridad son primordiales.

El estilo visual se define como **Corporativo Moderno con matices industriales**. Se aleja de lo puramente decorativo para centrarse en la utilidad y el orden. La estética es limpia, utilizando el espacio en blanco de manera estratégica para reducir la carga cognitiva del usuario y destacar los puntos de acción técnica. La respuesta emocional buscada es la de "un problema resuelto por expertos".

## Colores
La paleta se fundamenta en la estabilidad y la urgencia controlada:

*   **Azul Técnico Profundo (#0A2540):** El pilar de la marca. Se utiliza para encabezados, navegación y elementos de autoridad. Transmite seriedad y conocimiento experto.
*   **Gris Metalizado (#F0F2F5 / #64748B):** Utilizado para fondos de sección y superficies secundarias. Aporta un aire tecnológico y moderno sin distraer.
*   **Naranja Vibrante (#FF6B00):** El color de acento reservado exclusivamente para llamadas a la acción (CTAs), alertas críticas e indicadores de estado activo. Su alta visibilidad guía al usuario hacia la resolución del problema.
*   **Modo de Color:** Predominantemente claro para maximizar la legibilidad de manuales, presupuestos y estados de servicio.

## Tipografía
La estrategia tipográfica prioriza la lectura técnica y la jerarquía clara:

*   **Hanken Grotesk:** Elegida para titulares por su geometría precisa y contemporánea. Refuerza la imagen de una empresa de ingeniería o servicios técnicos modernos.
*   **Inter:** Utilizada para el cuerpo de texto por su excepcional legibilidad en pantallas, fundamental para descripciones de averías y términos de servicio.
*   **JetBrains Mono:** Se emplea de forma auxiliar para números de serie, códigos de ticket, fechas y datos técnicos, aportando un carácter instrumental y exacto.

Los titulares deben mantener un contraste alto con el fondo, utilizando el Azul Técnico Profundo para asegurar la jerarquía visual.

## Layout y Espaciado
El sistema utiliza una **cuadrícula fluida basada en 8px** para mantener la consistencia matemática en toda la interfaz.

*   **Estructura:** Se recomienda una rejilla de 12 columnas para escritorio con canaletas (gutters) de 24px.
*   **Ritmo Vertical:** El espaciado entre secciones debe ser amplio (64px a 80px) para permitir que el contenido "respire", mientras que el espaciado entre elementos relacionados (como etiquetas de campo e inputs) debe ser estrecho (8px).
*   **Adaptabilidad:** En dispositivos móviles, los márgenes laterales se reducen a 16px y la rejilla se simplifica a una sola columna, apilando los componentes de forma lógica para facilitar la interacción con una sola mano.

## Elevación y Profundidad
Para este sistema de diseño, la profundidad se maneja mediante **capas tonales y sombras sutiles**, evitando el exceso de ornamentación.

*   **Superficies:** El fondo principal es blanco o gris muy claro. Los contenedores de información utilizan bordes finos (1px) en gris metalizado suave.
*   **Sombras:** Se aplican sombras de "baja elevación" (Low Elevation). Deben ser difusas, con un radio de desenfoque amplio pero una opacidad muy baja (5-10%), utilizando un tinte del azul primario para que la sombra se sienta integrada y no sucia.
*   **Interacción:** Los elementos interactivos pueden elevarse ligeramente (aumentando la sombra) al pasar el cursor (hover) para indicar "clickabilidad", reforzando la naturaleza eficiente de la herramienta.

## Formas
El lenguaje de formas es **sobrio y funcional**. Se utiliza un radio de curvatura suave (Soft - 0.25rem / 4px) para suavizar la rigidez industrial sin perder la profesionalidad.

*   **Componentes Pequeños:** Botones, inputs y checkboxes usan el radio base de 4px.
*   **Contenedores y Tarjetas:** Pueden escalar hasta 8px (0.5rem) para envolver grandes bloques de contenido de manera armoniosa.
*   **Iconografía:** Los iconos deben ser de trazo lineal uniforme, preferiblemente con terminaciones ligeramente redondeadas para coincidir con la UI.

## Componentes
Directrices para los elementos clave del sistema:

*   **Botones (CTAs):** El botón primario es Naranja Vibrante con texto en blanco o azul oscuro para máximo contraste. Los botones secundarios usan el Azul Técnico con bordes definidos. El estado "disabled" debe usar un gris neutro claro.
*   **Campos de Entrada (Inputs):** Bordes gris metalizado, fondo blanco. Al recibir el foco, el borde cambia al azul primario con un anillo de resplandor sutil. Las etiquetas (labels) siempre visibles sobre el campo.
*   **Tarjetas de Estado:** Utilizadas para mostrar el progreso de un servicio técnico. Deben incluir un icono de estado, un título en negrita y un código de ticket en tipografía monospaciada.
*   **Chips de Estado:** Pequeños indicadores con colores semánticos: Verde (Reparado), Naranja (En Proceso), Gris (Recibido), Rojo (Requiere Atención).
*   **Listas Técnicas:** Espaciado compacto, separadores de línea finos y uso de iconos para categorizar tipos de servicio o componentes.
*   **Tablas de Datos:** Cabeceras en Azul Técnico con texto blanco, filas alternas en gris muy claro para facilitar la lectura de presupuestos y desgloses de piezas.