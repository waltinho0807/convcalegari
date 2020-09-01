import React from 'react';
import buildClient from '../api/build-client';

import Head from '../components/Head';
import Footer from '../components/Footer';
import Javascript from '../components/Javascript';
import PreLoader from '../components/Preloader';

import HeroHome from '../components/home/HeroHome';
import Categories from '../components/home/Categories';
import Featured from '../components/home/Featured';
import Banner from '../components/home/Banner';
import Latest from '../components/home/Latest';
import FromBlog from '../components/home/FromBlog';




const Home = ({ currentUser, produtos }) => {
  console.log(produtos)
  return (
      <div> 
      <HeroHome />
      <Categories />
      <Featured />
      <Banner />
      <Latest />
      <FromBlog />
      </div> 
  );
};

Home.getInitialProps = async (context, client, currentUser ) => {
 
  const { data } = await client.get('/api/produtos');

  return {produtos: data};
};

export default Home;
