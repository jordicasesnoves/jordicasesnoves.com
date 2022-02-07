import { Typography, Text } from '..'

const Callout = ({ text, emoji }): JSX.Element => {
  if (!text) return null

  return (
    <div className="flex gap-x-3 lg:gap-x-6 items-center bg-gray-50 py-6 px-3 lg:px-6 rounded">
      {emoji && <Typography variant="small-body">{emoji.emoji}</Typography>}
      <Typography variant="small-body" serif>
        <Text text={text} />
      </Typography>
    </div>
  )
}

export default Callout
