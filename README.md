# PetShop Online - Projeto Educacional

Este é um projeto educacional desenvolvido para a criação de uma plataforma online para uma **PetShop**, utilizando tecnologias modernas para exibir produtos, permitir o agendamento de serviços de banho e tosa, e oferecer funcionalidades de gerenciamento de perfil de usuário.

## Funcionalidades Principais

- **Visualização de Produtos**: Os usuários podem navegar pelos produtos disponíveis, filtrá-los por categoria e visualizar detalhes de cada item.
- **Agendamento de Serviços**: Interface completa para o agendamento de serviços de banho e tosa, com escolha de data, hora e tipo de serviço, além da opção de tele-busca.
- **Gerenciamento de Conta**: A plataforma inclui funcionalidades de gerenciamento de dados pessoais, favoritos e histórico de pedidos.
- **Envio de Formulários**: Integração com o serviço **FormSubmit** para o envio de informações de agendamento diretamente para o e-mail fornecido.

## Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas web.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Lógica de frontend, interação dinâmica com os usuários.
- **Bootstrap**: Framework de CSS para facilitar a responsividade e o layout.
- **FormSubmit**: Serviço externo para envio de formulários por e-mail.

## Estrutura do Projeto

    /assets        # Arquivos
    /images        # Imagens utilizadas no projeto
    /css           # Arquivos de estilos (CSS)
    /js            # Scripts JavaScript
    index.html     # Página inicial do projeto
    busca.html     # Página de busca de produtos
    pdp.html       # Página de detalhes de produto
    servico.html   # Página de agendamento de serviços

## Como Configurar o Envio de Formulários

Este projeto utiliza o serviço **FormSubmit** para enviar dados de agendamento via e-mail. Para alterar o e-mail de destino, siga os passos abaixo:

1. No arquivo `servico.html`, encontre o atributo `action` do formulário.
2. Substitua o e-mail pelo seu endereço de e-mail.

```html
<form action="https://formsubmit.co/seu-email-aqui" method="POST">
