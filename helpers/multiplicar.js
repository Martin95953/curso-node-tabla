
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (numero,imprimir,hasta) => {
    try {
     
    let salida='';
    for (let i = 1; i <= hasta; i++) {
        salida += `\n${numero} x ${i} = ${numero * i}`;
    }
   if (imprimir){
    console.log(`
    ==========================
        Tabla del ${numero}
    ==========================${salida}`);

   }             
        nombreArchivo = `tabla-${numero}.txt`;
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
        
        return nombreArchivo;

    } catch (error) {
        throw error;
    }
   

}

module.exports = {
    crearArchivo : crearArchivo
}