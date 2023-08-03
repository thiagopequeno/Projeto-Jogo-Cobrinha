
const ip="10.18.6.64"

const lista = () => {

    fetch(`http://${ip}:8080/pontos/listar`)
    .then((response) => {
    if (!response.ok) {
      throw new Error('Falha ao obter os dados.');
    }
    return response.json();
  })
  .then((res) => {
    console.log(res); // Verifique o console para ter certeza de que os dados foram retornados corretamente

    const rankContainer = document.querySelector('.rank-container');

    // Limpa o conteúdo anterior da div
    rankContainer.innerHTML = '';

    // Iterar sobre os resultados e criar os elementos HTML para cada item de rank
    res.forEach((item, index) => {
      const rankItem = document.createElement('div');
      rankItem.classList.add('rank-item');

      const rank = document.createElement('span');
      rank.classList.add('rank');
      rank.textContent = index + 1; // Número do rank, começando por 1

      const playerName = document.createElement('span');
      playerName.classList.add('player-name');
      playerName.textContent = item.nomeUsuario; // Nome do jogador

      const score = document.createElement('span');
      score.classList.add('score');
      score.textContent = item.pontosMaximo; // Pontos máximos (score)

      rankItem.appendChild(rank);
      rankItem.appendChild(playerName);
      rankItem.appendChild(score);

      rankContainer.appendChild(rankItem);
    });
  })
  .catch((error) => {
    console.error('Erro:', error);
  });   
}

document.addEventListener('DOMContentLoaded', function () {
    lista();
});