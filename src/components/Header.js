import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import brain from '../img/spork-brain.jpeg';

export default function Header() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${brain})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}>
        <Router>
          <StyledLink to='/gallery'>Art Hole</StyledLink>
        </Router>
      </div>
    </>
  );
}

const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
