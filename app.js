// Selectors
const todoInput = document.querySelector( '.todo-input' );
const todoButton = document.querySelector( '.todo-button' );
const todoList = document.querySelector( '.todo-list' );

// Functions
const addTodo = ( event ) => {
  // Prevent form from submitting
  event.preventDefault();

  // Create Todo div
  const todoDiv = document.createElement( "div" );
  todoDiv.classList.add( "todo" );

  // Create li
  const newTodo = document.createElement( 'li' );
  newTodo.classList.add( 'todo-item' );
  newTodo.innerText = todoInput.value;


  todoDiv.appendChild( newTodo );

  // Checkmark button
  const completedButton = document.createElement( 'button' );
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add( "complete-btn" );
  todoDiv.appendChild( completedButton );

  // Delete button
  const deleteButton = document.createElement( 'button' );
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add( "delete-btn" );
  deleteButton.addEventListener( 'click', deleteTodo )
  todoDiv.appendChild( deleteButton );

  // Append to list
  todoList.appendChild( todoDiv );

  // Clear Todo input value
  todoInput.value = "";
}


const deleteTodo = ( event ) => {

}

// Event Listeners
todoButton.addEventListener( 'click', addTodo )