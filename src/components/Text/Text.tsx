const Text = ({ text }): JSX.Element => {
  if (!text) {
    return null
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <span
        key={index + text.content}
        className={[
          bold ? 'font-bold' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : ''
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    )
  })
}

export default Text
