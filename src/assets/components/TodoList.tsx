import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="todo_list_container">
      <h4>Todo List 💙</h4>
      <input placeholder="검색어를 입력하세요" />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
