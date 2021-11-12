const { describe } = require('yargs');

const argv = require('yargs')
            .option(
            'base', {
                alias: 'b',
                type: 'number',
                demandOption: true,
                describe: 'es la base de la tabla de multiplicar'      })
            .option(
            'listar',{
                alias: 'l',
                default: false,
                type: 'boolean',
                describe: 'muestra la tabla creada por pantalla'})
                .option(
            'hasta',{
                alias: 'h',
                default: 10,
                type: 'number',
                describe: 'determina el final de la tabla'})
            //verificar si base y hasta son un numero
            .check( (argv,options) => {
               if( isNaN(argv.base)|| isNaN(argv.hasta)){
                   throw new Error('La base y el limite de tabla deben ser numeros');
               }
               
               return true;
            })
            .argv;

module.exports = argv;