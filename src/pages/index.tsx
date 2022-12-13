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

// data;

import { data } from "../utils/data";

export default function Home() {
  const footer_search_data = data.footer_quick_search;
  return (
    <div className="">
      <Layout title="Home" data={footer_search_data}>
        <Hero />
        <div className="bg-white">
          <PopularServices />
          <FastSearch />
        </div>
      </Layout>
    </div>
  );
}
