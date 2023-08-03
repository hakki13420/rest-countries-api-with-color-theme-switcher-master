import React, { Suspense, lazy, useContext } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import BarTools from '../components/BarTools'
// import { countriesContext } from '../context/countriesContext'
import Loading from '../components/Loading'
const Main = lazy(() => import('../components/Main'))

const Home = () => {
  // //const { countries } = useContext(countriesContext)

  return (
    <Layout>
        <Header/>
        <BarTools />
        <Suspense fallback={<Loading/>}>
          <Main />
        </Suspense>
      </Layout>
  )
}

export default Home
