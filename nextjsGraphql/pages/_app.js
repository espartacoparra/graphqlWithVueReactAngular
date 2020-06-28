import { GraphQLProvider } from 'graphql-react'
import { withGraphQLApp } from 'next-graphql-react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps, graphql }) => (
  <GraphQLProvider graphql={graphql}>
    <Head>
      <title>My NextJS app</title>
    </Head>
    <Component {...pageProps} />
  </GraphQLProvider>
)

export default withGraphQLApp(App)
