type Inputprops = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type?: 'text'
}

//

//  Omit: 해당 타입에서 특정한 속성만 제외한 새로운 타입을 만들 때 사용함
// 힐 일 관리: input 태그에는  type 속성만 허용하여야 한다
// 그 이외의 속성은 허용하지 말아햐 한다
// intersection : 교집합

const Input = (props: Inputprops) => {
  const { ...rest } = props
  return <input {...rest} />
}

export default Input
