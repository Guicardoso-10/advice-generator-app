const botao = document.getElementById("botao")
let idConselho = document.getElementById("numero")
let descricaoConselho = document.getElementById("descricao")

async function pegarDadosApi () {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    let json = await resposta.json()
    let slip = json.slip
    let id = slip.id
    let advice = slip.advice

    idConselho.innerHTML = `advice #${id}`
    descricaoConselho.innerHTML = advice
}


botao.addEventListener('click', () => {
    pegarDadosApi()
})



