import React from 'react'

import NavBar from '../NavBar';
import MainPage from '../Main';
import SkillsPage from "../Skills";
import BlogPage from '../Blog'

export default function Project() {
  return (
    <>
      <NavBar></NavBar>
      <MainPage></MainPage>
      <SkillsPage></SkillsPage>
      <BlogPage></BlogPage>
    </>
  );
}
