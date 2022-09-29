const db = require ('../modulosProjetoToDo/db')

//inserir dados recebidos na tabela pelo sequelize
const tarefas= db.sequelize.define('tarefas',{
    //atributos
    titulo: {
        type: db.Sequelize.STRING,
    },
    descricao:{
        type: db.Sequelize.STRING,
    },

    //options
});


//recria uma tabela nova quando é execultada essa linha
//tarefas.sync({force:true});
 
module.exports = tarefas;
 