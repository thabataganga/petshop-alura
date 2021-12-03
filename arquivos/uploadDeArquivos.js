const fs = require('fs');
const path = require('path');

/* fs.readFile('./assets/dudu.jpg', (erro, buffer) => {
    console.log('imagem foi bufferizada');
    console.log(buffer);

    fs.writeFile('./assets/dudu2.jpg', buffer, erro => {
        console.log('A imagem foi escrita');
    });
}); */

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const tipo = path.extname(caminho);
    const novoCaminho = `./assets/imagens/pets/${nomeDoArquivo}${tipo}`;
    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(novoCaminho));
}