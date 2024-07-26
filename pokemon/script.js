document.addEventListener('DOMContentLoaded', function() {
    const pokemonInput = document.getElementById('pokemonInput'); // Obtém o elemento de entrada para o nome ou ID do Pokémon
    const fetchPokemonButton = document.getElementById('fetchPokemonButton'); // Obtém o botão de busca
    const pokemonDetails = document.getElementById('pokemonDetails'); // Obtém o elemento onde serão exibidos os detalhes do Pokémon

    // Adiciona um evento de clique ao botão de busca
    fetchPokemonButton.addEventListener('click', function() {
        const pokemonNameOrId = pokemonInput.value.trim().toLowerCase(); // Obtém o valor do campo de entrada (nome ou ID do Pokémon) e converte para minúsculas
        
        // Verifica se o campo de nome ou ID do Pokémon não está vazio
        if (pokemonNameOrId === '') {
            alert('Por favor, digite o nome ou ID do Pokémon.');
            return;
        }

        // Limpa o conteúdo anterior dos detalhes do Pokémon
        pokemonDetails.innerHTML = '';

        // Faz a requisição à PokéAPI para obter os detalhes do Pokémon com o nome ou ID especidicado
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
            .then(response => {
                // Verifica se a resposta da API é bem-sucedida
                if (!response.ok) {
                    throw new Error('Pokémon não encontrado');   
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                const { name, id, types, abilities, sprites } = data; // Extrai os dados importantes do objeto de resposta JSON
                const pokemonName = name.charAt(0).toUpperCase() + name.slice(1); // Converte o nome do Pokémon para a primeira letra maiúscula
                const pokemonId = id; // Obtém o ID do Pokémon
                const pokemonType = types.map(type => type.type.name).join(', '); // Obtém os tipos do Pokémon e os converte em um string separada por vírgula
                const pokemonAbilities = abilities.map(ability => ability.ability.name).join(', '); // Obtém as habilidades do Pokémon e as converte em uma string separada por vírgula
                const pokemonImage = sprites.other['official-artwork'].front_default; // Obtém a URL da imagem oficial do Pokémon
                //const pokemonImage = sprites.front_default; // Obtém a URL da imagem padrão do Pokémon

                // Monta a estrutura HTML com os detalhes do Pokémon e a insere dentro do elemento pokemonDetails
                pokemonDetails.innerHTML = `
                    <h2>${pokemonName} (#${pokemonId})</h2>
                    <p><strong>Tipo:</strong> ${pokemonAbilities}</p>
                    <p><strong>Habilidades:</strong> ${pokemonAbilities}</p>
                    <img src="${pokemonImage}" alt="${pokemonName} Image" class="pokemon-img">
                `;
            })
            .catch(error => {
                console.error('Erro ao buscar informações do Pokémon:', error); //Exibe um erro no console se houver problemas na busca do Pokémon
                pokemonDetails.innerHTML = `<p>Pokémon não encontrado. Verifique o nome ou ID e tente novamente.</p>`; // Exibe uma mensagem de erro no elemento pokemonDetails
            });
    });
});