import clsx from 'clsx'

const BreadCrumb = ({
  children,
  separator,
  className
}: {
  children: JSX.Element[]
  separator?: string | JSX.Element
  className?: string
}) => {
  children = children.reduce((accumulator: any[], child, index, self) => {
    // add a separator between the two items
    index < self.length - 1
      ? accumulator.push(child, <span>{separator ?? '/'}</span>)
      : accumulator.push(child)

    // return the accumulator
    return accumulator
  }, [])

  return (
    <ol className={clsx(className)}>
      {children.map((child, i) => (
        <li key={i} className="list-none">
          {child}
        </li>
      ))}
    </ol>
  )
}

export default BreadCrumb
