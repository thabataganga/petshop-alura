const query = require('../infraestrutura/database/queries');

// O Repositorio trabalha APENAS com as operações do BD

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }

    lista() {
        const sql = 'SELECT * FROM Atendimentos'

        return query(sql)
    }
}

module.exports = new Atendimento()