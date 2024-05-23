document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('changeColorBtn');
    let isWhiteBackground = false;

    button.addEventListener('click', function() {
        if (isWhiteBackground) {
            document.body.style.backgroundColor = "white"; // Muda o background para branco
            button.style.backgroundColor = "#BA55D3"; // Muda a cor do botão para lilás
            button.style.color = "white"; // Muda a cor do texto do botão para branco
        } else {
            document.body.style.backgroundColor = "pink"; // Muda o background para rosa
            button.style.backgroundColor = "white"; // Muda a cor do botão para branco
            button.style.color = "black"; // Muda a cor do texto do botão para preto
        }
        
        isWhiteBackground = !isWhiteBackground; // Inverte o estado do background
    });
});
