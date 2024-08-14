import React from 'react';
import './css/Home.css';
import { Container } from 'react-bootstrap';
import Peacock from './mod/Peacock';
import Wizard from './mod/Wizard';
import Text from './mod/Text';
import Bounce from './mod/Bounce';

const Home = () => {

  return (
    <div >
      <Container>
        <Peacock />
        <Wizard />
        <Text />
        <Bounce text="IDEAsmith" duration={1} stagger={0.2}/>
      </Container>
    </div>
  );
};

export default Home;
