function calculate() {
    // Obtém os valores dos operandos e do operador a partir dos elementos HTML
    var leftOperand = parseInt(document.getElementById('leftOperand').value);
    var rightOperand = parseInt(document.getElementById('rightOperand').value);
    var operator = document.getElementById('operator').value;

    // Verifica se os operandos são números inteiros válidos
    if (isNaN(leftOperand) || isNaN(rightOperand)) {
        alert('Error :('); // Exibe um alerta em caso de erro
        return;
    }

    var result;
    // Executa a operação de acordo com o operador selecionado
    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            // Verifica se o divisor é zero e exibe uma mensagem de erro se for o caso
            if (rightOperand === 0) {
                alert("It's over 9000!"); // Exibe um alerta específico para divisão por zero
                console.log("It's over 9000!"); // Registra a mensagem no console
                return;
            }
            result = leftOperand / rightOperand;
            break;
        case '%':
            // Verifica se o divisor é zero e exibe uma mensagem de erro se for o caso
            if (rightOperand === 0) {
                alert("It's over 9000!"); // Exibe um alerta específico para módulo por zero
                console.log("It's over 9000!"); // Registra a mensagem no console
                return;
            }
            result = leftOperand % rightOperand;
            break;
        default:
            alert('Invalid operator'); // Exibe um alerta para operador inválido
            return;
    }

    // Exibe o resultado em um alerta
    alert('Resultado: ' + result);
    // Registra o resultado no console
    console.log('Resultado: ' + result);
}

// Exibe um alerta a cada 30 segundos
setInterval(function() {
    alert('Please, use me...');
}, 30000);
