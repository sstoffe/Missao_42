$(document).ready(function() {
    const $button = $('#changeColorBtn');
    let isWhiteBackground = false;

    $button.click(function() {
        if (isWhiteBackground) {
            $('body').css('background-color', 'white'); // Muda o background para branco
            $button.css({
                'background-color': '#BA55D3', // Muda a cor do botão para lilás
                'color': 'white' // Muda a cor do texto do botão para branco
            });
        } else {
            $('body').css('background-color', 'pink'); // Muda o background para rosa
            $button.css({
                'background-color': 'white', // Muda a cor do botão para branco
                'color': 'black' // Muda a cor do texto do botão para preto
            });
        }

        isWhiteBackground = !isWhiteBackground; // Inverte o estado do background
    });
});
