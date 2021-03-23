// Selectors
const todoInput = document.querySelector( '.todo-input' );
const todoButton = document.querySelector( '.todo-button' );
const todoList = document.querySelector( '.todo-list' );
const filterOption = document.querySelector( '.filter-todo' )

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

  // Delete todo
  if ( item.classList[ 0 ] === 'delete-btn' ) {
    const todo = item.parentElement;

    // Animation
    todo.classList.add( 'fall' )
    todo.addEventListener( 'transitionend', e => {
      todo.remove();
    } )
  }

  // Complete todo
  if ( item.classList[ 0 ] === 'complete-btn' ) {
    const todo = item.parentElement;
    todo.classList.toggle( 'completed' );
  }
}

// Filter
const filterTodo = ( e ) => {
  const todos = todoList.childNodes;
  todos.forEach( todo => {
    switch ( e.target.value ) {
      case "all":
        todo.style.display = 'flex';
        break;

      case "completed":
        if ( todo.classList.contains( 'completed' ) ) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;

      case "incomplete":
        if ( !todo.classList.contains( 'completed' ) ) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none'
        }
        break;
    }
  } )
}

// Event Listeners
todoButton.addEventListener( 'click', addTodo );
todoList.addEventListener( 'click', deleteCheck );
filterOption.addEventListener( 'click', filterTodo )