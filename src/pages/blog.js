import React from 'react'
import {Link} from 'gatsby';

import Layout from "../components/layout"

export default function Blog() {
    return (
        <Layout>
            <h1>Blog Page</h1>
            <Link to="/">&larr; Back to home</Link>
        </Layout>
    )
}
