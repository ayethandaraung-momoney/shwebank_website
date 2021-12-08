import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      <div className='container'>{children}</div>

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Home | Swhe Bank',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
}
