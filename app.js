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
  todoDiv.appendChild( deleteButton );

  // Append to list
  if ( newTodo.innerText === "" ) {
    alert( 'You did not add a todo' )
  } else {
    todoList.appendChild( todoDiv );
  }

  // Clear Todo input value
  todoInput.value = "";
}


const deleteCheck = ( event ) => {
  const item = event.target;
  console.log( item )

  // Delete todo
  if ( item.classList[ 0 ] === 'delete-btn' ) {
    const todo = item.parentElement;

    // Animation
    todo.classList.add( 'fall' )
    todo.addEventListener( 'transitionend', function () {
      todo.remove();
    } )
  }

  // Complete todo
  if ( item.classList[ 0 ] === 'complete-btn' ) {
    const todo = item.parentElement;
    todo.classList.toggle( 'completed' );
  }
}

// Event Listeners
todoButton.addEventListener( 'click', addTodo );
todoList.addEventListener( 'click', deleteCheck );