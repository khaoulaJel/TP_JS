const form = document.querySelector('.add');
const lists = document.querySelector('ul');
const search = document.querySelector('.search input');

// Function to generate HTML template for a new to-do item
const generateTemplate = (todo) => {
    const html =  
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-check-circle complete"></i>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    return html;
}

// Function to add a new to-do item
form.addEventListener('submit', e => {
    e.preventDefault();
    const todoText = form.add.value.trim();
    if(todoText){
        lists.innerHTML += generateTemplate(todoText);
        form.reset();
    } else {
        form.reset();
        alert("To add a task, please enter some text.");
    }
});

// Function to delete a to-do item
lists.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('complete')) {
        const todoItem = e.target.parentElement;
        todoItem.classList.toggle('done');
    }
});

// Function to filter to-dos based on search term
const filterToDos = (term) => {
    Array.from(lists.children).forEach(todo => {
        const todoText = todo.querySelector('span').textContent.toLowerCase();
        if(todoText.includes(term.toLowerCase())){
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        }
    });
}

// Event listener for the search input
search.addEventListener('input', () => {
    const term = search.value.trim();
    filterToDos(term);
});
