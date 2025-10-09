document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionForm');
    const successMessage = document.getElementById('successMessage');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', async (e) => {
        // Impede o envio tradicional do formulário
        e.preventDefault();

        // Desabilita o botão para evitar cliques duplicados
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        // Esconde a mensagem de sucesso (se visível)
        successMessage.classList.add('hidden');

        // Pega os dados do formulário
        const formData = new FormData(form);
        
        try {
            // Faz a requisição para o Formspree
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Se o envio for um sucesso
                form.reset(); // Limpa os campos do formulário
                form.classList.add('hidden'); // Esconde o formulário
                successMessage.classList.remove('hidden'); // Mostra a mensagem de sucesso

            } else {
                // Se houver erro, tenta parsear a resposta para ver a mensagem de erro
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    alert('Erro no envio: ' + data.errors.map(err => err.message).join(', '));
                } else {
                    alert('Houve um erro no envio da sua pergunta. Tente novamente mais tarde.');
                }
            }

        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro de conexão. Verifique sua rede e tente novamente.');
        } finally {
            // Reabilita o botão após o término
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Pergunta';
        }
    });
});
