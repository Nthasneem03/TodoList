const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.filter-todo')

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleTodoActions);
todoFilter.addEventListener('click',filterActions);

function addTodo(e) {
    e.preventDefault();

    if (todoInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // Create the main todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create the list item
    const todos = document.createElement('li');
    todos.classList.add('todo-item');
    todos.textContent = todoInput.value;
    todoDiv.appendChild(todos);

    // Create the complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    todoDiv.appendChild(completeBtn);

    // Create the trash button
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
    todoDiv.appendChild(trashBtn);

    // Append to the list
    todoList.appendChild(todoDiv);

    // Clear the input
    todoInput.value = "";
}

function handleTodoActions(e) {
    const item = e.target;

    // Delete the todo
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    // Check off the todo
    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}



function filterActions(e) {
    const filterValue = e.target.value;
    const todos = document.querySelectorAll('.todo');

    todos.forEach(todo => {
        const isCompleted = todo.classList.contains('completed');

        switch (filterValue) {
            case 'all':
                todo.style.display = 'flex'; // Show all todos
                break;
            case 'completed':
                todo.style.display = isCompleted ? 'flex' : 'none'; // Show only completed todos
                break;
            case 'uncompleted':
                todo.style.display = !isCompleted ? 'flex' : 'none'; // Show only uncompleted todos
                break;
            default:
                todo.style.display = 'flex'; // Default to showing all todos

        }
    });
}
    
