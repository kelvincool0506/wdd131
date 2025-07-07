const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.ariaValueMax;
deleteButton.textContent = '❌';
li.appendChild(deleteButton);
list.appendChild(li);   
button.addEventListener('click', function () {
    if (input.value.trim() == '') {
        return;
    }
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
    })
    input.value = '';
    input.focus();
    