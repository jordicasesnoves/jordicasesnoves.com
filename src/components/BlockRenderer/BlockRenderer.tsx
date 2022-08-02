import { Fragment } from 'react'
import { Callout, EmbeddedVideo, Text, Typography } from '..'
import { BlocksEnum, NotionBlock } from '../../models/notion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const BlockRenderer = (block: NotionBlock): JSX.Element => {
  const { type, id } = block
  const value = block[type]

  const CodeComponent = (): JSX.Element => {
    const codeString = value.rich_text[0].plain_text
    return (
      <SyntaxHighlighter
        language={value.language}
        style={atomOneDark}
        customStyle={{ padding: '16px', borderRadius: '4px' }}
      >
        {codeString}
      </SyntaxHighlighter>
    )
  }

  const ImageComponent = (): JSX.Element => {
    const src = value.type === 'external' ? value.external.url : value.file.url
    const caption = value.caption ? value.caption[0]?.plain_text : ''
    return (
      <figure>
        <img src={src} alt={caption && caption} />
        {caption && (
          <figcaption className="text-primary-medium mt-1 italic font-normal">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  const BlockTypes: {
    [key in keyof typeof BlocksEnum]?: JSX.Element
  } = {
    [BlocksEnum.paragraph]: (
      <p key={id}>
        <Typography serif variant="post-body">
          <Text text={value.rich_text} />
        </Typography>
      </p>
    ),
    [BlocksEnum.heading_1]: (
      <Typography variant="h1" key={id}>
        <Text text={value.rich_text} />
      </Typography>
    ),
    [BlocksEnum.heading_2]: (
      <Typography serif variant="h2" key={id}>
        <Text text={value.rich_text} />
      </Typography>
    ),
    [BlocksEnum.heading_3]: (
      <Typography serif variant="h3" key={id}>
        <Text text={value.rich_text} />
      </Typography>
    ),
    [BlocksEnum.bulleted_list_item]: (
      <li key={id}>
        <Typography serif variant="post-body">
          <Text text={value.rich_text} />
        </Typography>
      </li>
    ),
    [BlocksEnum.numbered_list_item]: (
      <li key={id}>
        <Typography serif variant="post-body">
          <Text text={value.rich_text} />
        </Typography>
      </li>
    ),
    [BlocksEnum.to_do]: (
      <div key={id}>
        <label htmlFor={id}>
          <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
          <Text text={value} />
        </label>
      </div>
    ),
    [BlocksEnum.toggle]: (
      <details>
        <summary>
          <Text text={value} />
        </summary>
        {value.children?.map((block) => (
          <Fragment key={block.id}>{BlockRenderer(block)}</Fragment>
        ))}
      </details>
    ),
    [BlocksEnum.child_page]: <p>{value.title}</p>,
    [BlocksEnum.image]: <ImageComponent />,
    [BlocksEnum.callout]: <Callout text={value.rich_text} emoji={value.icon} />,
    [BlocksEnum.video]: <EmbeddedVideo url={value.external?.url} />,
    [BlocksEnum.embed]: (
      <div>
        <iframe className="w-full" src={value.url} title="embeded frame" />
      </div>
    ),
    [BlocksEnum.code]: <CodeComponent />
  }

  const unsupportedBlock = (
    <div>
      <span role="img" aria-label="unsupported">
        ❌
      </span>{' '}
      Type {type} unsupported {type === 'unsupported' && 'by Notion API'}
    </div>
  )

  return BlockTypes[type] || unsupportedBlock
}

export default BlockRenderer
