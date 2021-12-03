const fs = require('fs');

/* fs.readFile('./assets/dudu.jpg', (erro, buffer) => {
    console.log('imagem foi bufferizada');
    console.log(buffer);

    fs.writeFile('./assets/dudu2.jpg', buffer, erro => {
        console.log('A imagem foi escrita');
    });
}); */

fs.createReadStream('./assets/dudu.jpg')
    .pipe(fs.createWriteStream('./assets/dudu-stream.jpg'))
    .on('finish', () => console.log('Imagem do Dudu gravada com sucesso'));