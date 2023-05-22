const process = require('process');
const accion = process.argv[2];
const accion2 = process.argv[3];
const accion3 = process.argv[4];
const funcionalidades = require('./funcionesDeTareas');

switch (accion) {

    case "listar":

        funcionalidades.listarTareas()

        break;
    case undefined:

        console.log("-------------------\nAtención - Tienes que pasar una acción.\nLas acciones disponibles son: \nlistar\ncrear\nfiltrar\n-------------------");
       
        break; 

    case "crear": 
    
    accion3 == "pendiente" || accion3 == "en proceso" || accion3 == "terminada"? funcionalidades.crearTarea(accion2,accion3) : console.log("Atención - los estados disponibles son: \npendiente\nen proceso\nterminada");;

        break;

    case "filtrar": 
    accion2 == "pendiente" || accion2 == "en proceso" || accion2 == "terminada"? funcionalidades.filtrarPorEstado(accion2) : console.log("Atención - los estados disponibles son: \npendiente\nen proceso\nterminada");;


        break;

    default:
        console.log("-------------------\nNo entiendo qué quieres hacer\n-------------------");
        break;
};
