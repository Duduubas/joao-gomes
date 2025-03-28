document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarButtonsWrapper = document.querySelector('.navbar__buttons-wrapper');
    
    if (hamburgerMenu && navbarButtonsWrapper) {
        hamburgerMenu.addEventListener('click', function() {
            console.log('Menu hamburguer clicado');
            this.classList.toggle('active');
            navbarButtonsWrapper.classList.toggle('active');
        });
        
        // Fechar o menu ao clicar em um dos botões
        const navButtons = navbarButtonsWrapper.querySelectorAll('button');
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navbarButtonsWrapper.classList.remove('active');
            });
        });
        
        // Fechar o menu ao redimensionar a tela para largura maior que 768px
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburgerMenu.classList.remove('active');
                navbarButtonsWrapper.classList.remove('active');
            }
        });
    } else {
        console.error('Menu hamburger ou wrapper de botões não encontrado!');
    }
});