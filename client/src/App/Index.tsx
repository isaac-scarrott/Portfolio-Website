import React from "react";

import Project from '../components/Project';

import NormalisedStyles from './NormalisedStyles'
import BaseStyles from "./BaseStyles";


export default function App() {
  return (
    <>
      <NormalisedStyles></NormalisedStyles>
      <BaseStyles></BaseStyles>
      <Project></Project>
    </>
  );
}
