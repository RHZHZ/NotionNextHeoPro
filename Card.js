const Card = ({ children, headerSlot, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`${className || ''} card border dark:border-gray-700 rounded-xl lg:p-6 p-4`}>
      <>{headerSlot}</>
      <section>{children}</section>
    </div>
  )
}
export default Card
