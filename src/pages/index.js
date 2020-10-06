import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Bures</h1>
      <h2>Lean Rune, skapprogrammerár Kárášjogas.</h2>
      <p>
        Dukkaraddamin <a href="https://gatsbyjs.com">Gatsby:ain</a> ja <a href="https://contentful.com">Contentful:ain</a>.
        <Link to="/contact">Váldde oktavuođa.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage