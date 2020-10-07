const input = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');
const list = document.querySelector('.list');
const delBtn = document.querySelector('removeBtn');
const ul = document.querySelector('.list-section')

function addRemoveButton(li) {
    let removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    removeBtn.textContent = '-';
    li.appendChild(removeBtn);
}

addBtn.addEventListener('click', () => {
    // Create new li
    let li = document.createElement('li');
    // Adding input value to the new li
    li.innerHTML = input.value;
    // Adding li to the list
    list.appendChild(li);
    // Adding remove button to li
    addRemoveButton(li);
    // Remove text from input field.
    input.value = '';
})

ul.addEventListener('click', () => {
    if(event.target.tagName === 'BUTTON'){
        if (event.target.className === 'removeBtn'){
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
    }
})

















