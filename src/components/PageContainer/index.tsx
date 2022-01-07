type PageContainerProps = {
  children: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps): JSX.Element => {
  return <div className="pt-10 lg:pt-12 pb-10 lg:pb-16">{children}</div>
}

export default PageContainer
