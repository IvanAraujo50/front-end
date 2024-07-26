document.addEventListener('DOMContentLoaded', function() {
    const characterInput = document.getElementById('characterInput'); // Obtém o elemento de entrada para o nome ou ID do Personagem
    const fetchCharacterButton = document.getElementById('fetchCharacterButton'); // Obtém o botão de busca
    const characterDetails = document.getElementById('characterDetails'); // Obtém o elemento onde serão exibidos os detalhes do Personagem

    // Adiciona um evento de clique ao botão de busca
    fetchCharacterButton.addEventListener('click', function() {
        const characterId = characterInput.value.trim(); // Obtém o valor do campo de entrada (nome ou ID do Personagem)
        
        // Verifica se o campo de nome ou ID do Personagem não está vazio
        if (characterId === '') {
            alert('Por favor, digite o ID do Personagem.');
            return;
        }

        // Limpa o conteúdo anterior dos detalhes do Personagem
        characterDetails.innerHTML = '';

        // Faz a requisição à Rick and Morty API para obter os detalhes do Personagem com o nome ou ID especificado
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => {
                // Verifica se a resposta da API é bem-sucedida
                if (!response.ok) {
                    throw new Error('Personagem não encontrado');   
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                const { id, name, species, gender, status, image } = data; // Extrai os dados importantes do objeto de resposta JSON
                const characterName = name.charAt(0).toUpperCase() + name.slice(1); // Converte o nome do Personagem para a primeira letra maiúscula

                // Monta a estrutura HTML com os detalhes do Personagem e a insere dentro do elemento characterDetails
                characterDetails.innerHTML = `
                    <h2>${characterName} (#${id})</h2>
                    <p><strong>Espécie:</strong> ${species}</p>
                    <p><strong>Gênero:</strong> ${gender}</p>
                    <p><strong>Status:</strong> ${status}</p>
                    <img src="${image}" alt="${characterName} Image" class="character-img">
                `;
            })
            .catch(error => {
                console.error('Erro ao buscar informações do Personagem:', error); // Exibe um erro no console se houver problemas na busca do Personagem
                characterDetails.innerHTML = `<p>Personagem não encontrado. Verifique o nome ou ID e tente novamente.</p>`; // Exibe uma mensagem de erro no elemento characterDetails
            });
    });
});
