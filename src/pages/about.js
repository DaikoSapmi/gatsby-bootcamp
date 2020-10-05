import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>Rune Fjellheim</h1>
            <p>Jeg er foreløpig mellom jobber.</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage