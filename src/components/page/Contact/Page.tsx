import Head from "next/head"

import { TopPageView } from "@/components/page/Contact/View"

import type { NextPage } from "next"

export const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contactanos</title>
        <meta
          name="contact info"
          content="A template for prototyping with Next.js and daisy UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopPageView />
    </>
  )
}
