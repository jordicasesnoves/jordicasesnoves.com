import React from 'react'

import Layout from '../components/Layout'

import abductionIllustration from '../../public/abduction-illustration.svg'
import { Container } from '../components/Container'

function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
