import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Title = ({
  suffix,
  children
}: {
  suffix?: string
  children?: string
}) => {
  const router = useRouter()
  let title =
    children === undefined ? suffix : children + (suffix ? ` - ${suffix}` : '')

  return (
    <Head>
      <meta property="og:image" content={require('@/img/logo512.png')} />
      <meta name="twitter:image" content={require('@/img/logo512.png')} />
      <title className="uppercase">
        {router.pathname === '/' ? 'YomYom' : `${title}`}
      </title>
    </Head>
  )
}

export default Title
