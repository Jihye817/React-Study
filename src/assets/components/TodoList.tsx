import TodoItem from "./TodoItem";

const TodoList = (props: {
  todo: { id: number; isDone: boolean; content: string; createdDate: number }[];
  onDelete: (targetId: number) => void;
}) => {
  return (
    <div className="todo_list_container">
      <h4>Todo List 💙</h4>
      <input placeholder="검색어를 입력하세요" />
      <div>
        {props.todo.map((item) => (
          <TodoItem key={item.id} {...item} onDelete={props.onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
