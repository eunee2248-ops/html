import Button from './html/Button'
import CheckBox from './html/CheckBox'
import SvgClose from './svg/SvgClose'
import SvgPencil from './svg/SvgPencil'

const TodoListItem = ({todo}) => { todo :Todo})=> {
  return (
    //할일을 완료하면 'todo__item--complete 추가
    <li className= {`todo__item ${todo.done && 'todo__item--complete'}`}>
      <CheckBox
        parentClassName="todo__checkbox-group"
        type="checkbox"
        className="todo_checkbox"
      >
      {TodoListItem.title}
      </CheckBox>
      
      {/* <div className="todo__checkbox-group">
            <input type="checkbox" className="todo__checkbox" checked />
            <label>Eat Breakfast</label>
          </div> */}
      {/* 할 일을 수정할 때만 노출 */}
      {/* <input type="text" className="todo__modify-input" /> */}
      <div className="todo__button-group">
        <Button className="todo__action-button">
          <SvgPencil />
        </Button>
        <Button className="todo__action-button">
          <SvgClose />
        </Button>
      </div>
    </li>
  )
}

export default TodoListItem
