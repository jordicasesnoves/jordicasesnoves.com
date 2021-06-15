import Container from '../Container/Container'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
}

const SectionWrapper = ({
  title,
  children,
  ...props
}: SectionWrapperProps): JSX.Element => {
  return (
    <section id={title?.toLowerCase()} {...props}>
      <Container>{children}</Container>
    </section>
  )
}

export default SectionWrapper
