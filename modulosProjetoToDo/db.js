const Sequelize = require ("sequelize");
//concexão com DB
const sequelize = new Sequelize ( 'projetoToDo','root','123456',{
    host:'localhost',// onde está(o endereco do banco de dados)
    dialect: 'mysql',//tipo de banco de dados
})

// mensagem de conexão
sequelize.authenticate().then( function(){
    console.log("conectado")
}).catch(function(err){
   console.log('erro ao conectar= '+err)
})

module.exports={
    Sequelize:  Sequelize,
    sequelize: sequelize
}
