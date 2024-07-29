document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById('cepInput'); // Obtém o número do CEP
    const fetchCepButton = document.getElementById('fetchCepButton'); // Obtém o botão de busca
    const cepDetails = document.getElementById('cepDetails'); // Obtém o elemento onde serão exibidos os detalhes do endereço

    // Adiciona um evento de clique ao botão de busca
    fetchCepButton.addEventListener('click', function() {
        const cep = cepInput.value.trim(); // Obtém o valor do campo de entrada
        
        // Verifica se o campo não está vazio
        if (cep === '') {
            alert('Por favor, digite um CEP.');
            return;
        }

        // Limpa o conteúdo anterior
        cepDetails.innerHTML = '';

        // Faz a requisição à API Consulta CEP para obter os detalhes do endereço de acordo com o cep informado
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                // Verifica se a resposta da API é bem-sucedida
                if (!response.ok) {
                    throw new Error('Endereço não encontrado');   
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                const { cep, logradouro, uf, bairro, localidade} = data; // Extrai os dados importantes do objeto de resposta JSON

                // Monta a estrutura HTML com os detalhes do Endereço e a insere dentro do elemento cepDetails
                cepDetails.innerHTML = `
                    <h2>CEP: ${cep}</h2>
                    <p><strong>Logradouro:</strong> ${logradouro}</p>
                    <p><strong>Bairro:</strong> ${bairro}</p>
                    <p><strong>Localidade:</strong> ${localidade}</p>
                    <p><strong>Uf:</strong> ${uf}</p>
                `;
            })
            .catch(error => {
                console.error('Erro ao buscar informações do endereço', error); // Exibe um erro no console se houver problemas na busca do endereço
                cepDetails.innerHTML = `<p>Endereço não encontrado. Verifique o cep e tente novamente.</p>`; // Exibe uma mensagem de erro no elemento cepDetails
            });
    });
});
