//função onclick
function consultarRacas(){
    let racas = document.getElementById('racas').value;

    //se não for digitado nada, irá disparar o Alert na tela
    if(racas === "" ){
         alert ('Digite um nome de Raça váliada!');
         return;
     }
     
        //consulta o url da api e exibe a img. do cachorro na tela
       let url ="https://dog.ceo/api/breed/"+ racas + "/images/random"
         fetch(url).then( function(response){
             response.json().then(function(data){
             console.log(data)
             mostraRacas(data)
             let frase = document.getElementById('frase');
             frase.innerHTML = "&#127881;&#128054;Aqui está a foto da raça do doguinho que você pesquisou.&#128512; Ligue agora para nossa instituição e agende sua visita!";
         })
     })
    
   
 }
 
 function mostraRacas(data){
     let resultado = document.getElementById('resultado');
     resultado.innerHTML = `<img src="${data.message}" style=" width: 500px; height:500px;" />` 
     
                           
 }

