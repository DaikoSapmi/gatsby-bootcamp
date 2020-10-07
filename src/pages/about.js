import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>Rune Fjellheim</h1>
            <p>Lean nannemin iežan dihtoroahppu erenoamášit Jamstack prinsihppaid.</p>
            <p>Dárbbašatgo veahkki? <Link to="/contact">Váldde oktavuođa!</Link></p>
        </Layout>
    )
}

export default AboutPage