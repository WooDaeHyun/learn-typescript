// 중복 제거를 위해서 따로 만드는 것! 이것을 타입 별칭이라고 한다.
// {id: number, title: string, done: boolean} 을 Todo라는 이름으로 별칭을 붙인 것이다.
// 즉 기존에 기본 타입들을 활용하여 Todo라는 타입을 새로 만들어 낸 것이다.
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos: Todo[] = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos: Todo[] = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo) {
  //여기서 todo의 타입을 object로 지정하게 되면 object 타입에 done 프로퍼티가 존재한다는 것을 보장할 수가 없어서 에러가 발생함!
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(todo1?: Todo, todo2?: Todo): void {
  todo1 && addTodo(todo1);
  todo2 && addTodo(todo2);
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
