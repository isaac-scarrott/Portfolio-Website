import React from 'react';

import Layout from '../components/Layout';
import TypedAnimation from '../components/TypedAnimation';
import styled from 'styled-components';

const typewriteData = [
  { text: `Hmmmm...`, backspace: 0, delay: 0, duration: 700 },
  { text: '4', backspace: 8, delay: 1000, duration: 0 },
  { text: '0', backspace: 1, delay: 1000, duration: 0 },
  { text: '4', backspace: 1, delay: 1000, duration: 0 },
  { text: 'Page Not Found', backspace: 1, delay: 3000, duration: 0 },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Index() {
  return (
    <Layout>
      <Container>
        <TypedAnimation typewriteData={typewriteData} loop={false} />
      </Container>
    </Layout>
  );
}
