const fs = require("fs");

const colors = require('colors');

const filePath = "data.json";

let jsonData = [];
if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function actualizarTarea(tareaBuscar, opcion, nuevaInfo) {
    console.log("🔍 Actualizando Tarea...".bgYellow);
    const tarea = jsonData.find(tarea => tarea.nombre === tareaBuscar);

    if (tarea) {
        // opcion 1 para actualizar el nombre
        if (opcion == 1) {
            tarea.nombre = nuevaInfo;

            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    
            console.log("Nombre Actualizado Correctamente.".bgGreen);
        }
        // opcion 2 para actualizar descripcion
        else if (opcion == 2) {
            tarea.descripcion = nuevaInfo

            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    
            console.log("Descripcion Actualizada Correctamente.".bgGreen);
        }
    } else {
        console.log("Tarea No Encontrada".bgRed)
    }
}

actualizarTarea("Hacer Ejercicio", "2", "trotar 3 kilometros")