const express = require('express');
const { engine } = require ('express-handlebars');
const bodyParser = require ('body-parser')
const moment = require ('moment')
const app = express(); 
//Add ao banco de dados
const Tarefa = require('../tarefas/modulosProjetoToDo/tarefas');

 
//handlebarsConfig
app.engine('handlebars', engine({
    //defaultLayout:'main'}));
 defaultLayout: 'main',
 helpers:{
    formDate:(date) => {
        return moment(date).format('DD/MM/YYYY')
    }
 },
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
}))

app.set('view engine', 'handlebars');
app.set("views", "./views");

//Pega dados do formulário
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
//Rotas Express
app.get('/tar',function(req, res){
Tarefa.findAll({order:[['id','desc']]}).then(function(tarefas){
        res.render('tar', {
            tarefas: tarefas.map(tarefas => tarefas.toJSON())
            })
        })
});

app.get('/cad', function (req, res) {
    res.render('cad')
 }); 


app.post('/add', function (req, res){
    Tarefa.create({
        titulo: req.body.tituloTarefa,
        descricao: req.body.descricaoTarefa
    }).then(function(){
        res.redirect("/tar")
    }).catch(function(erro){
        res.send("!Cadastro não realizado! "+erro)
    })
});

app.get('/del/:id', function (req,res){
    Tarefa.destroy({
        where:{'id':req.params.id}
    }).then(function(){
        res.redirect("/tar")
    }).catch(function(erro){
        res.send("!Nâo foi deletado; "+erro)
    })
})

app.get('/update/:id', function (req,res){
    Tarefa.update({ 
        titulo:req.body.UpdatetituloTarefa,
        descricao:req.body.UpDatedescricaoTarefa,
        
    
}, {
        where:{
            'id':req.params.id,
          }
    }).then(function(){
       // res.redirect("/tar")
        res.redirect("/cad")
    }).catch(function(erro){
        res.send("!Nâo foi Atualizado; "+erro)
    });
})
  
// Server listens to port 3000 
app.listen(3000)