type Checkprops = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type?: 'checkbox'
  parentClassName: string
}
//  pattern (패턴)

const CheckBox = (props: Checkprops) => {
  const { parentClassName, children, ...rest } = props
  return (
    <div className={parentClassName}>
      <input {...rest} />
      <label>{children}</label>
    </div>
  )
}

export default CheckBox
