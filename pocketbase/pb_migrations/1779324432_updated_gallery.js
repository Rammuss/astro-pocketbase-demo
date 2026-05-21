/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3598190544")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3598190544")

  // update collection data
  unmarshal({
    "listRule": "id != \"\"",
    "updateRule": null,
    "viewRule": "id != \"\""
  }, collection)

  return app.save(collection)
})
