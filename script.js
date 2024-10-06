document.getElementById('checkButton').addEventListener('click', function() {
    const input = document.getElementById('wordInput').value;
    const message = document.getElementById('message');

    if (input === 'cas') {
        window.location.href = './secret.html'; // Укажите здесь нужную страницу
    }
    if (input === 'лапочка') {
        window.location.href = './lapochka.html';
    }
    if (input === 'фенёк') {
        window.location.href = './phenek.html';
    }
    if (input === 'фенек') {
        window.location.href = './phenek.html';
    }
     else {
        message.textContent = 'не то слово,я в тебя верю';
    }
});