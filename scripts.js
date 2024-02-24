

const key = "e382f0f62c03e8518ddd7723bb8d5605";

//var imagens = [
    //'https://unsplash.com/pt-br/fotografias/uma-vista-de-uma-cordilheira-nevada-do-topo-de-uma-montanha-jt17jk1iACI',
    //'https://unsplash.com/pt-br/fotografias/arvores-marrons-durante-o-dia-54mo4HhH2Ks',
    //'https://unsplash.com/pt-br/fotografias/silhueta-da-montanha-perto-do-corpo-de-agua-durante-o-dia-XXV8Rc6sKm8',
    //'https://unsplash.com/pt-br/fotografias/uma-floresta-cheia-de-muitas-arvores-cobertas-de-neve-E4O3FTh9V04',
    //'https://unsplash.com/pt-br/fotografias/uma-cordilheira-e-refletida-na-agua-parada-de-um-lago-PiUqyp65EWg',
    //'https://unsplash.com/pt-br/fotografias/uma-arvore-solitaria-no-meio-de-um-deserto-7qBvYOrRk8s',
    //'https://unsplash.com/pt-br/fotografias/uma-arvore-em-um-campo-kpOvONKL0Cg',
    // adicione quantas imagens quiser aqui
//];
//var index = Math.floor(Math.random() * imagens.length);
//var imagem = imagens[index];
//document.body.style.backgroundImage = 'url(' + imagem + ')';

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name + ", " + dados.sys.country
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp_min").innerHTML = "Mínima: " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".temp_max").innerHTML = "Máxima: " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".ventos").innerHTML = "Ventos: " + dados.wind.speed + " m/s"
    
    var data = new Date();
    var opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var diaDaSemana = data.toLocaleDateString('pt-BR', opcoes);
    document.getElementById('dia_Semana').innerHTML = diaDaSemana;
    
      
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    colocarDadosNaTela(dados)

}


function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}