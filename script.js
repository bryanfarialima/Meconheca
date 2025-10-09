document.getElementById('questionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const question = document.getElementById('question').value;

    // Simulando o envio para um servidor
    // Em um cenário real, você precisaria configurar um servidor para receber esses dados
    const formData = {
        question: question
    };

    // Aqui você pode usar o método fetch para enviar os dados para um servidor
    fetch('https://seuservidor.com/receber-pergunta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
   .then(response => response.json())
   .then(data => {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Pergunta enviada com sucesso!';
        document.getElementById('question').value = '';
    })
   .catch(error => {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Erro ao enviar a pergunta. Tente novamente.';
        console.error('Erro:', error);
    });
});
