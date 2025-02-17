const fs = require("fs");
const colors = require('colors');

const filePath = "data.json";

let jsonData = [];
if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function verificarSiExiste(nombreTarea) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tareaExiste = jsonData.find(tarea => tarea.nombre === nombreTarea);
            if (tareaExiste) {
                reject("Esta Tarea Ya Existe".bgRed);
            } else {
                resolve(true);
            }
        }, 1000);
    });
}

function verificarVacio(tareas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tareas.trim() !== "") {
                resolve(true);
            } else {
                reject("La Tarea No Puede Estar Vacia".bgRed);
            }
        }, 1000);
    });
}

function verificarLongitud(nombreTarea, descripcionTarea) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombreTarea.length > 2 && descripcionTarea.length > 5) {
                resolve(true);
            } else {
                reject("La Longitud De El Nombre De La Tarea O De La Descripcion Es Demasiado Corta".bgRed);
            }
        }, 1000);
    });
}

async function agregarTarea(nombreTarea, descripcionTarea) {
    try {
        console.log("🔍 Agregando Tarea...".bgYellow);

        await verificarSiExiste(nombreTarea);
        await verificarVacio(nombreTarea);
        await verificarVacio(descripcionTarea);
        await verificarLongitud(nombreTarea, descripcionTarea);

        let nuevaTarea = { nombre: nombreTarea, descripcion: descripcionTarea, finalizada : false };
        jsonData.push(nuevaTarea);

        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        console.log("✅ Tarea Agregada Correctamente".bgGreen);
    } catch (error) {
        console.error(error);
    }
}

agregarTarea("programar", "Seguir Aprendiendo Node Js");