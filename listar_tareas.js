const fs = require("fs");
const colors = require("colors");

const filePath = "data.json";

let jsonData = [];
if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function tareasRealizadas() {
    const tareas = jsonData.filter(tarea => tarea.finalizada === true);
    
    tareas.forEach(tarea => {
        console.log(`✅ ${tarea.nombre}: ${tarea.descripcion}`.green);
    });
}

function tareasNoRealizadas() {
    const tareas = jsonData.filter(tarea => tarea.finalizada === false);
    
    tareas.forEach(tarea => {
        console.log(`${tarea.nombre}: ${tarea.descripcion}`.red);
    });
}

function listarTareas(opcion) {
    if (opcion == 1) {
        console.log("📋 Tareas Realizadas:".bgGreen);
        tareasRealizadas();
    } else if (opcion == 2) {
        console.log("📋 Tareas Pendientes:".bgYellow);
        tareasNoRealizadas();
    } else {
        console.log("❌ Opción inválida".bgRed);
    }
}

listarTareas(1);
