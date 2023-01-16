let addToDoButton = document.getElementById('addlist');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let count = 1;
document.getElementById("radio1").checked = true;

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dblclick', function(){
        if(window.confirm('Excluir ' + paragraph.innerText + '?')){
            toDoContainer.removeChild(paragraph);
        }
    })
})

setInterval( Function(){
    nextImagem();
}, 5000)

function nextImagem(){
    count++
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked=true;
}