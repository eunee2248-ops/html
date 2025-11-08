import { useState} from 'react'
import Button from './html/Button'
import Input from './html/Input'
import { react } from '@vitejs/plugin-react';
import { text } from 'stream/consumers';

//addTodo 함수는 새로운 할일을 등록하는 역할
//이 함수를 TodoEditor 컴포넌트에서 사용할 수 있도록 하기 위하여
//props로 전달 받는다
// 앞에서 addTodo 함수의 타입이ㅣ void 로 설정되어 있다 
// {addTodo} 구조분해할당 방법
const TodoEditor = ({addTodo}:{addTodo(title :string) => void}) => {
  const [text, setText] = useState('')
  
const handleSubmit = (e.React.FormEvent< HTMLFormElement>) => { 
  e.preventDefault();
  // 웹 브라우저의 기본 동작을 하지 못하도록 한다 > 새로고침(삭제)을 못하도록 / break를 건다 
  if(text.trim()) return // trim 잘라낸다 , 앞뒤 공백 날려라, 아무 변화 없다면 가만 있어라/ 거짓 /
  addTodo(text)
  setText('')// 공백으로 만들어라
}

  return (
    <form className="todo-form">
      <div className="todo_editor">
        <input
          type="text"
          className="todo_input"
          placeholder="Enter Todo List"
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  )
}

export default TodoEditor
