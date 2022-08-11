function consultarRacas(){
    let racas = document.getElementById('racas').value;
 
    if(racas === "" ){
         alert ('Digite um nome de Raça váliada!');
         return;
     }
 
     //fazer a concatenação se não func.
       let url ="https://dog.ceo/api/breed/"+ racas + "/images/random"
 
         fetch(url).then( function(response){
             response.json().then(function(data){
             console.log(data)
             mostraRacas(data)
         })
     })
 
 
 }
 
 
 
 function mostraRacas(data){
     let resultado = document.getElementById('resultado');
 
     resultado.innerHTML = `<img src="${data.file}"/>` 
                        
                          
 }

 //.then(data => [mostraResultado.innerHTML=`<img src="${data.file}"/>`])}