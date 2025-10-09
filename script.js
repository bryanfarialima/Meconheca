function pegarPergunta() {
    const inputElement = document.getElementById('perguntaInput');
    const pergunta = inputElement.value;
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `A pergunta que você fez foi: ${pergunta}`;
}
