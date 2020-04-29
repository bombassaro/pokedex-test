import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../components/styles.scss'
export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <React.Fragment>
        <Head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='x-ua-compatible' content='ie=edge'/>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
          <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"></link>
          <title>PokeCards</title>
        </Head>
        <Component {...this.props} />
      </React.Fragment>
    )
  }
}
