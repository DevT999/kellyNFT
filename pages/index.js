/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { getSortedPostsData } from '../lib/posts'
import { Navbar } from '../components/Navbar/Navbar';
import Layout from '../components/Layout/layout'

export default function Home(initialData) {
 
  const router = useRouter()
  return (
    <Layout>
      <div className="flex flex-row justify-center items-center min-h-screen">
        <button
          onClick={()=>router.push('/solana')}
          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
        >
          SOL NFT
        </button>
        <button
          onClick={()=>router.push('/ethereum')}
          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
        >
          ETH NFT
        </button>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}