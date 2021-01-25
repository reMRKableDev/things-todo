const todoList = document.getElementById("todo-list");

todoList.addEventListener("click", (event) => {
  const todoItemToDelete = event.target.parentElement.parentElement.dataset.key;

  deleteTodoItem(todoItemToDelete);
});
