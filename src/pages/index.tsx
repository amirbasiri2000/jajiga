import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import PopularServices from '../components/popular-services/PopularServices'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Layout title="Home">
        <Hero />
        <div className="bg-white">
          <PopularServices />
        </div>
      </Layout>
    </div>
  )
}
