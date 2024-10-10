async function quantidadeDeUsuarios(){
    const url = 'https://classroom.google.com/c/NjYwMDAwMjkxNTk1/p/Njg2MTM5MzcyOTEy/details?hl=pt-BR'
    const resultado = await FileSystemDirectoryHandle(url);
    const dados = await resultado.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);
    
    const infos = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]
}