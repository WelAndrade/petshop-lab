function searchProduct() {
    // Captura o valor digitado na barra de pesquisa
    const query = document.getElementById('search-query').value;

    // Verifica se o campo de busca não está vazio
    if (query.trim() !== "") {
        // Redireciona para a página de busca com o parâmetro 'q' (query) na URL
        window.location.href = `busca.html?q=${encodeURIComponent(query)}`;
    }

    // Impede o comportamento padrão de recarregar a página ao submeter o formulário
    return false;
}
