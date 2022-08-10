function consultarRacas(){
   let racas = document.getElementById('racas').value;

   if(racas === "" ){
        alert ('Digite um nome de Raça váliada!');
        return;
    }

      let  url = "https://dog.ceo/api/breeds/list/all";
        url ="https://dog.ceo/api/breed/"+ racas + "/images/random"

        fetch(url).then(function(response){
            response.json().then(function(data){
            console.log(data)
            mostraRacas(dados)
        })
    })


}



function mostraRacas(dados){
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<img src=${url}/>`
    dados.message
                          dados.status
}