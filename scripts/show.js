// Aguarda que o DOM seja completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os botões que têm o atributo 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Percorre todos os botões para adicionar um evento de clique
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            
            // Pega o valor do atributo 'data-tab-button' do botão clicado
            const abaAlvo = botao.target.dataset.tabButton;

            // Seleciona a aba correspondente ao valor do botão clicado
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            // Esconde todas as abas antes de exibir a nova aba selecionada
            escondeTodasAbas();

            // Adiciona a classe 'tab--is-active' à aba correspondente para exibi-la
            aba.classList.add('tab--is-active');

            // Remove a classe 'shows__tabs__button--is-active' de todos os botões
            removeBotaoAtivo();

            // Adiciona a classe 'shows__tabs__button--is-active' ao botão clicado
            botao.target.classList.add('shows__tabs__button--is-active');      
        });
    }
});

// Função para remover a classe de ativo de todos os botões
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Remove a classe 'shows__tabs__button--is-active' de todos os botões
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// Função para esconder todas as abas
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    // Remove a classe 'tab--is-active' de todas as abas, escondendo-as
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('tab--is-active');
    }
}
