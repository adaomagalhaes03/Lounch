
var dataInicio = new Date();
dataInicio.setDate(dataInicio.getDate() + 30); // Adiciona 30 dias
      
function atualizarTemporizador() {
    var agora = new Date();
    var diferenca = Math.max(dataInicio - agora, 0); 

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza o conteúdo dos elementos
    document.getElementById("temporizador").innerHTML = `
        <p class="bg-pink-500 font-bold text-xl cursor-pointer hover:bg-pink-800 p-4 rounded">${dias} DIAS</p>
        <p class="bg-pink-500 font-bold text-xl cursor-pointer hover:bg-pink-800 p-4 rounded">${horas} HORAS</p>
        <p class="bg-pink-500 font-bold text-md cursor-pointer hover:bg-pink-800 p-4 rounded">${minutos} MINUTOS</p>
        <p class="bg-pink-500 font-bold text-md cursor-pointer hover:bg-pink-800 p-4 rounded">${segundos} SEGUNDOS</p> 
       
    `;
}

atualizarTemporizador();


setInterval(atualizarTemporizador, 1000);