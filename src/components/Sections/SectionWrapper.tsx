import Container from '../Container/Container'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
  description: string
}

const SectionWrapper = ({
  title,
  subtitle,
  description,
  children,
  ...props
}: SectionWrapperProps): JSX.Element => {
  return (
    <section id={title.toLowerCase()} {...props}>
      <Container>
        <div className="lg:text-center">
          <p className="text-base leading-6 text-green-500 font-semibold tracking-wide uppercase">
            {subtitle}
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-400 lg:mx-auto">
            {description}
          </p>
        </div>
        {children}
      </Container>
    </section>
  )
}

export default SectionWrapper
