const express = require("express")

const Routes = express.Router()
const OngsController = require("./controllers/OngController")
const IncidentController = require("./controllers/IncidentController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")

Routes.post("/sessions", SessionController.create)

// Ongs Routes
Routes.get("/ongs", OngsController.index)
Routes.post("/ongs", OngsController.create)

Routes.get("/incidents", IncidentController.index)
Routes.post("/incidents", IncidentController.create)
Routes.delete("/incidents/:id", IncidentController.delete)

Routes.get("/profile", ProfileController.index)

module.exports = Routes