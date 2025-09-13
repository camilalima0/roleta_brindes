const roleta = document.querySelector('.roleta');
const girarBtn = document.getElementById('girar-btn');
const instrucoesText = document.getElementById('instrucoes');

// Função para gerar um ângulo aleatório para o giro
function gerarAnguloGiro() {
    const voltas = 5; 
    const anguloAleatorio = Math.floor(Math.random() * 360);
    return (voltas * 360) + anguloAleatorio;
}

girarBtn.addEventListener('click', () => {
    // Desabilita o botão e muda o texto
    girarBtn.disabled = true;
    girarBtn.textContent = 'Girando...';

    const anguloFinal = gerarAnguloGiro();

    roleta.style.transition = 'transform 3s ease-out';
    roleta.style.transform = `rotate(${anguloFinal}deg)`;

    // Quando a transição terminar (após 3 segundos)
    setTimeout(() => {
        // Muda o texto do botão
        girarBtn.textContent = 'Obrigado por participar!'; 
        
        // Mostra o texto de instrução
        instrucoesText.style.display = 'block';

        // Opcional: Aqui você pode adicionar a lógica para determinar o prêmio
        const anguloRealParada = anguloFinal % 360;
        console.log("Roleta parou em:", anguloRealParada, "graus.");

    }, 3000); // 3000 milissegundos = 3 segundos
});