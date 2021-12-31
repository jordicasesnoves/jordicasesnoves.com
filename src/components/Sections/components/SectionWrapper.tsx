import Container from '../../Container/Container'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
}

const SectionWrapper = ({
  title,
  children,
  className,
  ...props
}: SectionWrapperProps): JSX.Element => {
  return (
    <section
      {...props}
      id={title?.toLowerCase()}
      className={'py-12 sm:py-16 md:py-24 ' + className}
    >
      <Container>{children}</Container>
    </section>
  )
}

export default SectionWrapper
