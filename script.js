// caixa de diálogo 
const escolha = prompt(
    "Digite o número correspondente ao seu estilo de filme favorito:\n\n" +
    "1 - Rock\n" +
    "2 - Pop\n" +
    "3 - Hip-hop\n" +
    "4 - Eletronica\n" +
    "5 - Jazz\n" +
    "6 - Clássica"
);

// Declarar uma variável
let estiloSelecionado;

// SWITCH 
switch (escolha) {
    case '1':
        estiloSelecionado = "Rock";
        break;
    case '2':
        estiloSelecionado = "Pop";
        break;
    case '3':
        estiloSelecionado = "Hip-Hop";
        break;
    case '4':
        estiloSelecionado = "Eletronica";
        break;
    case '5':
        estiloSelecionado = "Jazz";
        break;
    case '6':
        estiloSelecionado = "Clássica";
        break;
    default:
        // Caso o usuário digite algo diferente das opções
        estiloSelecionado = "Opção inválida";
        break;
}


const elementoResultado = document.getElementById('resultado');

// mensagem final
if (estiloSelecionado === "Opção inválida") {
    elementoResultado.textContent = "Você selecionou uma opção inválida. Tente novamente.";
    elementoResultado.style.color = "#dc3545"; // Muda a cor para vermelho em caso de erro
} else {
    elementoResultado.textContent = `Seu estilo de filme favorito é: ${estiloSelecionado}`;

}
