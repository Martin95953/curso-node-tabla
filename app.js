
const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar.js');
const  argv  = require('./config/yargs');
const colors = require('colors');
//limpiar consola
process.stdout.write('\033c');
//crea la tabla de multiplicar de la base ingresada por el usuario
crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(archivo=>console.log(`${'Archivo creado:'.green} ${archivo}`))
    .catch(e=>console.log(e));

