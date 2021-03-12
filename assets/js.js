const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');


todoButton.addEventListener("click", addTodoItem)

todoList.addEventListener("click", deleteItem)


function addTodoItem(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    // This property is useful to add, remove and toggle CSS classes on an element.
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    // console.log(todoInput.value)
    if(todoInput.value === ""){
        return null
    }
     //check mark BUTTON
     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-check"></i>';
     completedButton.classList.add('complete_btn')
     todoDiv.appendChild(completedButton);
    //  //delete BUTTON
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add('delete_btn')
     todoDiv.appendChild(deleteButton);
     //Append to Actual LIST
     todoList.appendChild(todoDiv);
    //  //Clear todo input VALUE
    //  todoInput.value = ""
 }

function deleteItem(event) {
     const item = event.target

     if(item.classList[0] === "delete_btn"){
         const todo = item.parentElement

         todo.classList.add("fall")

         todo.addEventListener('transitioned', function() {
             todo.remove()
         })
     }

     if (item.classList[0]==="complete_btn"){
         const todo = item.parentElement
         todo.classList.toggle('completedItem')
     }



}

 


