import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';
import kartal from '../public/logo.png'
import Image from 'next/image';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <Image className='h-[200px] w-[200px] rounded-xl' width={200} height={200} alt='Star Academy' src={kartal}  />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach out to us!</h2>
              <div className='text-white'>
                <h3 className='text-white'>Phone number </h3>
                <h6 className='text-white'>022 112 6636</h6>
                <h6 className='text-white'>+251 91 125 3112</h6>
                <h6 className='text-white'>+251 91 123 3710</h6>
              </div>
              <p className="lead text-white mt-3">
                {/* DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL */}
              </p>
              <p className="text-white mt-3">{bio}</p>
              
              
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
