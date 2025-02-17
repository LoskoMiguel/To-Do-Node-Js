const fs = require("fs");

const colors = require('colors');

const filePath = "data.json";

let jsonData = [];
if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function marcarTarea(tareaNombre) {
    console.log("🔍 Marcando Tarea...".bgYellow);
    const tarea = jsonData.find(tarea => tarea.nombre === tareaNombre);

    if (tarea) {
        if (tarea.finalizada == true) {
            console.log("Esta Tarea Ya Esta Realizada".bgBlue)
        } else {
            tarea.finalizada = true

            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        
            console.log("Tarea Marcada Como Realizada.".bgGreen);
        }
    } else {
        console.log("Tarea No Encontrada".bgRed)
    }
}

marcarTarea("programar")