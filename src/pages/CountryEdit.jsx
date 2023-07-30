import React from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CountryDetails from '../components/CountryDetails'

const CountryEdit = (props) => {
  const location = useLocation()

  return (
    <Layout>
      <Header/>
      <CountryDetails country={location.state}/>
    </Layout>
  )
}

export default CountryEdit
