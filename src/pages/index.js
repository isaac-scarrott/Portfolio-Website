import React from 'react';

import LandingScreen from '../components/LandingScreen';
import SkillsScreen from '../components/SkillsScreen';
import BlogPosts from '../components/BlogPosts';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <LandingScreen />
      <SkillsScreen />
      <BlogPosts />
    </Layout>
  );
}
