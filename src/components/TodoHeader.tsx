const TodoHeader = () => {
  return (
    <div className="header_container">
      <div className="header_date">
        <h2>Today is...</h2>
        <h2 className="header_primary">{new Date().toDateString()}</h2>
      </div>
      <h2>오늘의 할 일 📅</h2>
    </div>
  );
};

export default TodoHeader;
