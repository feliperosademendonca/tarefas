function comandoMysql(value){

comando=value;

connection.query(comando, function(err,result){
    if(!err){
        console.log('deletado com sucesso');
    }else{
        console.log('erro ao deletar dados na tabela')
    }
    });
}
/*
editar
update tarefas set titulo = 'título auterada pelo node' where id = 1


deletar 
delete from tarefas where id =1

conluir*/