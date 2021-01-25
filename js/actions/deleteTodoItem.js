const deleteTodoItem = (itemId) => {
  const todoItemIndexValue = todoListItems.findIndex(
    (todoItem) => todoItem.id === Number(itemId)
  );

  const todoItemWithDeleteField = {
    deleted: true,
    ...todoListItems[todoItemIndexValue],
  };

  todoListItems = todoListItems.filter(
    (todoItem) => todoItem.id !== Number(itemId)
  );

  displayTodoItem(todoItemWithDeleteField);
};
