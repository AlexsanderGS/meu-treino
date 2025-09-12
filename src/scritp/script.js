
// 1. Obter elementos HTML
const exerciseForm = document.getElementById('exercise_form');
const daysOfWeekSection = document.getElementById('days_of_week');
const exerciseTable = document.getElementById('exercise_table');

// Obter os campos de entrada (serão usados depois)
const exerciseInput = document.getElementById('exercise_name'); 
const loadInput = document.getElementById('load_weight'); 
const restInput = document.getElementById('rest_time');

// 2. Estrutura de dados para armazenar os exercícios
// Começamos com dados estáticos, será substituido por um array vazio para o projeto final.
const allExercises = {
    Monday: [
        { name: 'Supino com Halteres', series: '4x10', load: '20kg', rest: '2 min' },
        { name: 'Supino Inclinado Barra', series: '4x10', load: '15kg', rest: '2 min' }
    ],
    Tuesday: [
        { name: 'Supino com Halteres', series: '4x10', load: '20kg', rest: '2 min' },
        { name: 'Supino Inclinado Barra', series: '4x10', load: '15kg', rest: '2 min' }
    ],
    Wednesday: [
        { name: 'Supino com Halteres', series: '4x10', load: '20kg', rest: '2 min' },
        { name: 'Supino Inclinado Barra', series: '4x10', load: '15kg', rest: '2 min' }
    ], // Exemplo de um dia sem treinos
    // Adicionar outros dias aqui
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
            <td>${exercise.load}</td>
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