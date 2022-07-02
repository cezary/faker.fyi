import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="faker.fyi">
    <h1>faker.fyi - an api for fake(r) data</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
