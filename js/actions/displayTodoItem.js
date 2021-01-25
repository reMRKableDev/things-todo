const displayTodoItem = (newTodoItem) => {
  const todoList = document.getElementById("todo-list");
  const currentItem = document.querySelector(`[data-key='${newTodoItem.id}']`);

  if (newTodoItem.deleted) {
    currentItem.remove();
    return;
  }

  const listItemElement = document.createElement("li");

  listItemElement.setAttribute("data-key", newTodoItem.id);

  listItemElement.innerHTML = `    
      <div class="todo_item">
        <span>${newTodoItem.value}</span>
        <button id="delete-todo">Delete</button>
      </div>
    `;

  todoList.append(listItemElement);
  todoList.style.display = "block";
};
