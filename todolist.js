let addToDoButton = document.getElementById('addbutton');
let listContainer = document.getElementById('orderedlist');
let inputArea = document.getElementById('inputarea');
    
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('li');;
    paragraph.classList.add('paragraph-list-styling');
    paragraph.innerText= inputArea.value;
    listContainer.appendChild(paragraph);
    inputArea.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        listContainer.removeChild(paragraph);
    })
})