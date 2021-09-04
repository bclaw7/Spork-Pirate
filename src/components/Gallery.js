import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import brain from '../img/spork-brain-oil.jpg';
import panda from '../img/spork-panda.jpeg';

export default function Gallery() {
  return (
    <>
      <Container>
        <Row xs={1} md={2} xl={3}>
          <Col>
            <Image src={brain} thumbnail />
            <Image src={panda} thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
}
