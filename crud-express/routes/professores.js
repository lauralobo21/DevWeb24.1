var express = require('express');
var router = express.Router();

const ProfessorService = require("../services/ProfessorService")

router.get(
    "/listar",
    (request,response) => {
        //transformo em json
        response.json(ProfessorService.listar())
    }
)

module.exports = router;