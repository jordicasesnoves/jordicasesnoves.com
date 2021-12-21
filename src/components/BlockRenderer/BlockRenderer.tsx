import { Fragment } from 'react'
import { Text } from '..'
import { BlocksEnum, NotionBlock } from '../../models/notion'

const BlockRenderer = (block: NotionBlock): JSX.Element => {
  const { type, id } = block
  const value = block[type]

  const ImageComponent = (): JSX.Element => {
    const src = value.type === 'external' ? value.external.url : value.file.url
    const caption = value.caption ? value.caption[0].plain_text : ''
    return (
      <figure>
        <img src={src} alt={caption} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    )
  }

  const BlockTypes: {
    [key in keyof typeof BlocksEnum]?: JSX.Element
  } = {
    [BlocksEnum.paragraph]: (
      <p key={id}>
        <Text text={value.text} />
      </p>
    ),
    [BlocksEnum.heading_1]: (
      <h1 className="font-bold text-4xl" key={id}>
        <Text text={value.text} />
      </h1>
    ),
    [BlocksEnum.heading_2]: (
      <h2 className="font-bold text-2xl" key={id}>
        <Text text={value.text} />
      </h2>
    ),
    [BlocksEnum.heading_3]: (
      <h3 key={id}>
        <Text text={value.text} />
      </h3>
    ),
    [BlocksEnum.bulleted_list_item]: (
      <li key={id}>
        <Text text={value.text} />
      </li>
    ),
    [BlocksEnum.numbered_list_item]: (
      <li key={id}>
        <Text text={value.text} />
      </li>
    ),
    [BlocksEnum.to_do]: (
      <div key={id}>
        <label htmlFor={id}>
          <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
          <Text text={value.text} />
        </label>
      </div>
    ),
    [BlocksEnum.toggle]: (
      <details>
        <summary>
          <Text text={value.text} />
        </summary>
        {value.children?.map((block) => (
          <Fragment key={block.id}>{BlockRenderer(block)}</Fragment>
        ))}
      </details>
    ),
    [BlocksEnum.child_page]: <p>{value.title}</p>,
    [BlocksEnum.image]: <ImageComponent />
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
