document.addEventListener('DOMContentLoaded', (event) => {
    const ftList = document.getElementById('ft_list'); // Div que contém a lista de tarefas
    const addTaskBtn = document.getElementById('add_task_btn'); // Botão para adicionar tarefas

    // Função para salvar a lista de tarefas no cookie
    function saveTasks() {
        const tasks = [];
        // Adiciona cada tarefa ao array de tarefas
        ftList.childNodes.forEach(task => {
            tasks.push(task.innerText);
        });
        // Salva o array de tarefas no cookie
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/`;
    }

    // Função para carregar as tarefas do cookie
    function loadTasks() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            let [name, value] = cookie.split('=');
            name = name.trim();
            // Verifica se o cookie contém as tarefas
            if (name === 'tasks') {
                const tasks = JSON.parse(value);
                // Adiciona cada tarefa à lista
                tasks.forEach(task => addTask(task, false));
            }
        }
    }

    // Função para adicionar uma tarefa
    function addTask(taskText, save = true) {
        const taskDiv = document.createElement('div'); // Cria um novo elemento div para a tarefa
        taskDiv.className = 'task'; // Define a classe CSS da tarefa
        taskDiv.innerText = taskText; // Define o texto da tarefa
        // Adiciona um evento de clique para remover a tarefa
        taskDiv.addEventListener('click', () => {
            if (confirm('Deseja remover esta tarefa?')) {
                taskDiv.remove(); // Remove a tarefa do DOM
                saveTasks(); // Salva a lista de tarefas atualizada no cookie
            }
        });
        ftList.prepend(taskDiv); // Adiciona a tarefa no topo da lista
        if (save) saveTasks(); // Salva a lista de tarefas no cookie se necessário
    }

    // Evento de clique no botão de adicionar tarefa
    addTaskBtn.addEventListener('click', () => {
        const taskText = prompt('Digite a nova tarefa:'); // Exibe um prompt para o usuário digitar a nova tarefa
        if (taskText) {
            addTask(taskText); // Adiciona a nova tarefa à lista
        }
    });

    // Carregar as tarefas quando a página for carregada
    loadTasks();
});
