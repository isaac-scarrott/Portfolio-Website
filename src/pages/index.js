import React from 'react';
import Helmet from 'react-helmet';

import LandingScreen from '../components/LandingScreen';
import SkillsScreen from '../components/SkillsScreen';
import BlogPosts from '../components/BlogPosts';



export default function Index() {
  return (
    <>

      <LandingScreen />
      <SkillsScreen />
      <BlogPosts />
    </>
  );
};
