const form = document.querySelector('.add');
const lists = document.querySelector('ul');
const search = document.querySelector('.search input');

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


lists.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
  } else if (e.target.classList.contains('complete')) {
      const todoItem = e.target.parentElement;
      todoItem.classList.toggle('completed');
  }
});



const filterToDos = (term) => {
  Array.from(lists.children).forEach(todo => {
      const todoText = todo.querySelector('span').textContent.toLowerCase();
      console.log('Todo text:', todoText);
      if (todoText.includes(term.toLowerCase())) {
          todo.style.display = 'block';
      } else {
          todo.style.display = 'none';
      }
      console.log('Display style:', todo.style.display);
  });
}



search.addEventListener('input', () => {
  const term = search.value.trim();
  filterToDos(term);
});
