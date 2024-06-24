import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const CarouselSlide = () => {
  const navigate = useNavigate();

  const handleImageClick = (id, event) => {
    event.stopPropagation();
    navigate(`/book/${id}`);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Carousel showArrows={false} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={3000}>
        <div onClick={(e) => handleImageClick('6674551e57dd26116151c617', e)}>
          <img src="/carousel/cr1.png" alt="Slide 1" style={{ width: '100vw' }} />
        </div>
        <div onClick={(e) => handleImageClick('6674553357dd26116151d537', e)}>
          <img src="/carousel/cr2.png" alt="Slide 2" style={{ width: '100vw' }} />
        </div>
        <div onClick={(e) => handleImageClick('6674553357dd26116151d4c7', e)}>
          <img src="/carousel/cr3.png" alt="Slide 3" style={{ width: '100vw' }} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
