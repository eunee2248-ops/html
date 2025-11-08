type Buttonprops = React.ComponentPropsWithRef<'button'>
//type: 타입스크립트에서 컴포넌트를 만드는 경우에도 반드시 형태를 미리 선언하여야 한다
//html의 button태그가 가지고 있는 모든 내용을 그대로 사용할 수 있도록 한다.
//onClick, disable.....

const Button = ({ children, ...rest }: Buttonprops) => {
  // const [children, ...rest] = props
  //위 라인은 구조분해할당을 사용하는 것이다
  //Children:<buton> 태그 내부에 들어가는 내용>텍스트 또는 아이콘
  //...rest> 텍스트 or 아이콘과 같은 정보는 제외하고 나머지를 모조기 여기에 담는다

  return <Button {...rest}>{children}</Button>
  // 내가 나를 만든다?
  // 실제 html tag를 런더링하여 변환한다.
}

export default Button
