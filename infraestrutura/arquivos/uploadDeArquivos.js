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
    const tiposValidos = ['jpg', 'png', 'jpeg', 'webp'];
    const tipo = path.extname(caminho);

    //corta fora o . antes do tipo do arquivo
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

    if (tipoEhValido) {
        const novoCaminho = `./assets/imagens/pets/${nomeDoArquivo}${tipo}`;
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho));
    } else {
        const erro = "Tipo é inválido!"
        console.log('Erro! Tipo inválido');
        callbackImagemCriada(erro);
    }
}