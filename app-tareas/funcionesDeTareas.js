const path = require('path')
const fs = require('fs');
const leerArchivo = () => JSON.parse(fs.readFileSync(path.join(__dirname, 'tareas.json'), 'utf-8'));
const escribirJSON = (array) => fs.writeFileSync(path.join(__dirname, 'tareas.json'), JSON.stringify(array, null, 3), 'utf-8');


let funcionalidades = {
    listarTareas: function () {
        let tareas = leerArchivo();
        console.log("---------Listado de tareas---------");
        tareas.forEach((elemento, i) => {

            console.log('\n', `${i + 1}. ${elemento.titulo} - ${elemento.estado} `, '\n');
        });
        console.log("-----------------------------------");
    },

    crearTarea: function (titulo, estado) {
        let tareas = leerArchivo();
        let tarea = {
            titulo: titulo.toLowerCase(),
            estado: estado.toLowerCase()
        };
        tareas.push(tarea);
        escribirJSON(tareas);
        console.log('¡Tu tarea ha sido creada exitosamente!');
    },
    filtrarPorEstado: function (estado) {
        let tareas = leerArchivo();
        let estadoDeTareas = tareas.filter(elemento => elemento.estado == estado);
        estadoDeTareas.forEach((elemento, i) => {
            console.log('\n', `${i + 1}. ${elemento.titulo} - ${elemento.estado} `, '\n');
        });

    }

};

module.exports = funcionalidades;  