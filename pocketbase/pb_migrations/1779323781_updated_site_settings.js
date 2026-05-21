/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940974")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3940974")

  // update collection data
  unmarshal({
    "listRule": "",
    "updateRule": null,
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
