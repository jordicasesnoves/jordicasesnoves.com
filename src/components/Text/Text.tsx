const Text: React.FC<any> = ({ text }) => {
  if (!text) {
    return null
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value

    const getClassName = (): string => {
      const classArray = []
      if (bold) classArray.push('font-bold')
      if (italic) classArray.push('italic')
      if (strikethrough) classArray.push('line-through')
      if (underline) classArray.push('underline underline-offset-4')
      if (code)
        classArray.push(
          'bg-gray-200 px-2 py-1 rounded font-sans text-sm md:text-lg'
        )
      return classArray.join(' ')
    }

    return (
      <span
        key={index + text.content}
        className={getClassName()}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a
            className="underline underline-offset-4 font-medium text-accent"
            target="_blank"
            rel="noreferrer"
            href={text.link.url}
          >
            {text.content}
          </a>
        ) : code ? (
          <code>{text.content}</code>
        ) : (
          text.content
        )}
      </span>
    )
  })
}

export default Text
