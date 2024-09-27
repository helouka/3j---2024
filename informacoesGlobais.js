const url = 'https://classroom.google.com/c/NjYwMDAwMjkxNTk1/p/Njg1OTAyODUzMTA0/details?hl=pt-BR'

async function visualizarDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-texto')
    
}

visualizarDadosGlobais();