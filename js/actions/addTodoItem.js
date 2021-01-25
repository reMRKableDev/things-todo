const addTodoItem = (userInput) => {
  const todoItem = {
    id: Date.now(),
    value: userInput,
  };

  todoListItems.push(todoItem);
  displayTodoItem(todoItem);
};
