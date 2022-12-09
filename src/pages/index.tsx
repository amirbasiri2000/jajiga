import Head from 'next/head'
import Image from 'next/image'
import FastSearch from '../components/fast-search/FastSearch'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import PopularServices from '../components/popular-services/PopularServices'
// swipper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <div className="">
      <Layout title="Home">
        <Hero />
        <div className="bg-white">
          <PopularServices />
          <FastSearch />
        </div>
      </Layout>
    </div>
  )
}
