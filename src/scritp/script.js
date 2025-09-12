
// 1. Obter elementos HTML
const exerciseForm = document.getElementById('exercise_form');
const daysOfWeekSection = document.getElementById('days_of_week');
const exerciseTable = document.getElementById('exercise_table');

// Obter os campos de entrada (serão usados depois)
const exerciseInput = document.getElementById('exercise_name'); 
const loadInput = document.getElementById('load_weight'); 
const restInput = document.getElementById('rest_time');
const seriesInput = document.getElementById('series');

// 2. Estrutura de dados para armazenar os exercícios
// Começamos com dados estáticos, será substituido por um array vazio para o projeto final.
const allExercises = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
};

// Função para exibir os exercícios na tabela
function displayExercises(day) {
    // 1. Limpa o conteúdo atual da tabela
    // O 'tbody' é a parte do corpo da tabela
    const tableBody = exerciseTable.querySelector('tbody');
    tableBody.innerHTML = '';

    // 2. Decide quais exercícios serão exibidos
    let exercisesToDisplay;
    if (day === 'all_days') {
        // Se a opção for 'todos', cria um array com todos os exercícios juntos
        exercisesToDisplay = Object.values(allExercises).flat();
    } else {
        // Se for um dia específico, pega os exercícios daquele dia
        exercisesToDisplay = allExercises[day];
    }
    
    // 3. Itera sobre a lista de exercícios para criar as linhas
    exercisesToDisplay.forEach(exercise => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${exercise.name}</td>
            <td>${exercise.series}</td>
            <td>${exercise.load}Kg</td>
            <td>${exercise.rest}</td>
        `;
        // Adiciona a nova linha na tabela
        tableBody.appendChild(newRow);
    });
}

// Seleciona todos os botões de rádio
const daySelectors = document.querySelectorAll('input[name="day"]');

// Adiciona um "ouvinte" de eventos para cada botão de rádio
daySelectors.forEach(selector => {
    selector.addEventListener('change', function(event) {
        // Pega o valor (ex: 'Monday', 'Tuesday') do botão que foi clicado
        const selectedDay = event.target.value;
        // Chama a função para exibir os exercícios do dia selecionado
        displayExercises(selectedDay);
    });
});

displayExercises('all_days');

// Adiciona um "ouvinte" para a submissão do formulário
exerciseForm.addEventListener('submit', function(event) {
    // 1. Impede o recarregamento da página
    event.preventDefault();

    // 2. Obtém os valores dos campos
    const exerciseName = exerciseInput.value;
    const seriesValue = series.value;
    const loadValue = loadInput.value;
    const restValue = restInput.value;

    // 3. Cria um novo objeto para o exercício
    const newExercise = {
        name: exerciseName,
        series: seriesValue,
        load: loadValue,
        rest: restValue
    };

    // 4. Adiciona o novo objeto à estrutura de dados
    const selectedDay = document.querySelector('input[name="day"]:checked').value;
    
    // Verifica se o dia selecionado já tem exercícios
    if (selectedDay in allExercises) {
        allExercises[selectedDay].push(newExercise);
    } else {
        // Se for um novo dia ou a opção "Todos", adicione a um dia padrão, como Segunda-feira
        allExercises['Monday'].push(newExercise);
    }

    // 5. Atualiza a exibição na tela
    displayExercises(selectedDay);

    // 6. Limpa os campos do formulário
    exerciseInput.value = '';
    seriesInput.value = '';
    loadInput.value = '';
    restInput.value = '';
});