import { feedbacks } from '../portfolio';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FeedbackCard from '../components/FeedbackCard';
import Image from 'next/image';
import I1 from '../public/img/1.jpg'
import I2 from '../public/img/2.jpg'
import I3 from '../public/img/3.jpg'
import I4 from '../public/img/4.jpg'
import I5 from '../public/img/5.jpg'
import I6 from '../public/img/6.jpg'
import I7 from '../public/img/7.jpg'
import I8 from '../public/img/8.jpg'
import I9 from '../public/img/9.jpg'
import I10 from '../public/img/10.jpg'
import I11 from '../public/img/11.jpg'

const Feedbacks = () => {
  return (
    feedbacks && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">LETS HELP YOU CHANGE YOUR CHILS LIFE</h4>
            </div>
          </div>
          <div className='main-con'>
            <div className='con'>
              <Image className='img' src={I1} width={400} height={300} alt='Star Academy'/>
            </div>
            
            <div className='con'>
              <Image className='img' src={I3} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I2} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I4} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I5} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I6} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I7} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I8} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I9} width={400} height={300} alt='Star Academy'/>
            </div>
            <div className='con'>
              <Image className='img' src={I10} width={400} height={300} alt='Star Academy'/>
            </div>
          </div>
            
        </Container>
      </section>
    )
  );
};

export default Feedbacks;
