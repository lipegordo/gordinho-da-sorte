function sortear() {
    var nomesInput = document.getElementById('nomes').value;
    var nomesArray = nomesInput.split(',');

    // Remove espaços extras
    nomesArray = nomesArray.map(nome => nome.trim());

    // Verifica se há nomes suficientes
    if (nomesArray.length === 0 || nomesArray[0] === "") {
        alert("Por favor, insira ao menos um nome.");
        return;
    }

    // Sorteia um vencedor aleatoriamente
    var vencedor = nomesArray[Math.floor(Math.random() * nomesArray.length)];

    // Exibe o vencedor
    document.getElementById('vencedor').textContent = vencedor;
}
