// Obtém o ID do produto a partir da URL
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Carrega os detalhes do produto com base no ID
$(document).ready(function () {
    var productId = getProductId();
    $.getJSON('assets/produtos.json', function (data) {
        var produto = data.produtos.find(p => p.id == productId);
        if (produto) {
            // Carrega a imagem principal
            $('#main-image').attr('src', produto.fotos[0]);

            // Carrega o nome e o preço do produto
            $('#product-name').text(produto.nome);
            $('#product-price').text(produto.valor);

            // Galeria de imagens
            produto.fotos.forEach(function (foto) {
                $('#gallery').append(`<div class="col-md-4"><img src="${foto}" class="img-thumbnail" onclick="changeMainImage('${foto}')"></div>`);
            });

            // Ficha técnica
            var fichaTecnica = produto.fichaTecnica;
            for (var key in fichaTecnica) {
                $('#product-details').append(`<li><strong>${key}:</strong> ${fichaTecnica[key]}</li>`);
            }

            // Breadcrumb dinâmico (Order1 > Order2 > Order3)
            if (produto.Order1 && produto.Order2 && produto.Order3) {
                var breadcrumbHTML = `
                    <li class="breadcrumb-item"><a href="busca.html?Order1=${produto.Order1}">${produto.Order1}</a></li>
                    <li class="breadcrumb-item"><a href="busca.html?Order1=${produto.Order1}&Order2=${produto.Order2}">${produto.Order2}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">${produto.Order3}</li>
                `;
                $('#breadcrumb').html(breadcrumbHTML);
            }
        }
    });
});

// Função para alterar a imagem principal
function changeMainImage(src) {
    $('#main-image').attr('src', src);
}
