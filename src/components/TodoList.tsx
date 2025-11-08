import TodoListItem from './TodoListItem'
import TodoListItemEmpty from './TodoListItemEmpty'

const TodoList =
  () =>
  ({ todos }: { todos: Todo[] }) => {
    return (
      <ul className="todo__list">
        {todos.length === 0 && <TodoListItemEmpty />}
        {todos.length === 0 &&
          todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
    )
  }
// todos 길이가 0보다 큰 상태> 하나 그 이상의 할일이 존재한다
// map이라는 함수(메서드)를 이용하여 모든 것을 하나씩 순회한다
// 순회할 때마다 그 항목을 TodoListItem 컴포넌트 형태로 출력한다
//이 때 리액트가 하나씩  구별하기 위하여 key 속성에 고유한 값인 id를 지정한다
//todo 객체 전체를 props

export default TodoList
//  할 일 목록에서 "할 일이 없는 경우"를 다시 TodoListItemEmpty 컴포넌트로 분리하시오.
// 할 일이 있는 경우 > TodoListItem컴포넌트로 분리하시오.
// . 처음부터 마지막까지 하나씩 순회하는 작업을 하는 작업을 실행
//key={todo.id} 반드시 필요!!
