const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", (event) => {
  {
    event.preventDefault();

    const errorMessageElement = document.getElementById("error-msg");
    const inputElement = document.getElementById("todo-input");

    if (inputElement.value) {
      inputElement.value.trim();

      addTodoItem(inputElement.value);

      inputElement.value = "";
      errorMessageElement.style.display = "none";
    } else {
      errorMessageElement.innerHTML = "Submission can't be empty!";
      errorMessageElement.style.display = "block";
    }
  }
});
