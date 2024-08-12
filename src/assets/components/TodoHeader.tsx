const TodoHeader = () => {
  return (
    <div className="header_container">
      <h2>Today is... {new Date().toDateString()}</h2>
      <h2>오늘의 할 일 📅</h2>
    </div>
  );
};

export default TodoHeader;
