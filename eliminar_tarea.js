const fs = require("fs");

const colors = require('colors');

const filePath = "data.json";

let jsonData = [];
if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function eliminarTarea(tareaNombre) {
    console.log("🔍 Eliminando Tarea...".bgYellow);
    const tareaExiste = jsonData.find(tarea => tarea.nombre === tareaNombre);

    if (tareaExiste) {
        jsonData = jsonData.filter(tarea => tarea.nombre !== tareaNombre);

        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        console.log("Tarea Eliminada Correctamente".bgGreen);
    } else {
        console.log("Tarea No Encontrada".bgRed);
    }
}

eliminarTarea("barrer");