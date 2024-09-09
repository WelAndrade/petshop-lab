$(document).ready(function() {
    // Função para capturar os parâmetros da URL
    function getUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            order1: urlParams.get('Order1'),
            order2: urlParams.get('Order2'),
            order3: urlParams.get('Order3')
        };
    }

    // Função para carregar e filtrar produtos com base nos parâmetros
    function carregarProdutos() {
        const params = getUrlParams();

        $.getJSON('assets/produtos.json', function(data) {
            const produtos = data.produtos;
            const productList = $('#product-list');
            productList.empty(); // Limpa a lista de produtos

            // Filtra os produtos com base nos parâmetros da URL
            const produtosFiltrados = produtos.filter(function(produto) {
                return (!params.order1 || produto.Order1 === params.order1) &&
                       (!params.order2 || produto.Order2 === params.order2) &&
                       (!params.order3 || produto.Order3 === params.order3);
            });

            // Se não houver filtros, exibe todos os produtos
            if (produtosFiltrados.length === 0) {
                productList.append('<p>Nenhum produto encontrado.</p>');
            } else {
                // Itera sobre os produtos filtrados e cria os cards
                produtosFiltrados.forEach(function(produto) {
                    const productHTML = `
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <img src="${produto.fotos[0]}" class="card-img-top" alt="${produto.nome}">
                                <div class="card-body">
                                    <h5 class="card-title">${produto.nome}</h5>
                                    <p class="card-text">${produto.valor}</p>
                                    <a href="pdp.html?id=${produto.id}" class="btn btn-primary">Ver Produto</a>
                                </div>
                            </div>
                        </div>
                    `;
                    productList.append(productHTML); // Adiciona o produto à lista
                });
            }
        }).fail(function() {
            console.error("Não foi possível carregar os produtos.");
        });
    }

    carregarProdutos(); // Carrega os produtos ao carregar a página
});