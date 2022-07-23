const input = document.querySelector('.input');
const submit = document.querySelector('.btn-add');
const todoList = document.querySelector('.todo-list');


submit.addEventListener('click', makeTodo);
todoList.addEventListener('click', addLine);
todoList.addEventListener('click', delateTodo);

function makeTodo(e) {
    e.preventDefault();
    const value = input.value;

    const divConteiner = document.createElement('div');
    divConteiner.classList.add('todo');

    const listItem = document.createElement('li');
    listItem.innerText = value;
    divConteiner.appendChild(listItem);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="bi bi-check-lg" btn-icon></i>';
    divConteiner.appendChild(completeBtn);

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash');
    trashBtn.innerHTML = '<i class="bi bi-trash3-fill" btn-icon></i>';
    divConteiner.appendChild(trashBtn);

    todoList.appendChild(divConteiner);
    input.value = '';
}

function addLine(e) {
    if (e.path[0].className === 'complete') {
        const parent = e.path[1];
        parent.style.opacity = '.5';
        parent.classList.add('completed');
    }

}

function delateTodo(e) {
    if (e.path[0].className === 'trash') {
        const parent = e.path[1];
        parent.classList.add('animation');
        setTimeout(() => { parent.remove(); }, 500)
    }
}