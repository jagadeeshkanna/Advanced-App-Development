import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Slider.css';

export default function App() {
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const slide_img = ["https://blog.zoho.com/sites/zblogs/images/cliq/networks-blog-banner-final-2022-09.jpg", 
  "https://blog.zoho.com/sites/zblogs/images/meeting/zoho-meeting-recognized-in-constellation-shortlist-2022-09.png", 
  "https://i2.wp.com/nasheman.in/wp-content/uploads/2016/02/wipro_earthian.jpg",
  "https://5.imimg.com/data5/BR/LQ/MY-56778186/entertainments.jpg",
  "https://techbeacon.com/sites/default/files/styles/social/public/field/image/alexandre-pellaes-6vajp0pscx0-unsplash.jpg?itok=npxeQA4W",
  
  ];

  const onAutoplayTimeLeft = (s, time, progress) => {
    setAutoplayProgress(progress * 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoplayProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <center>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <div className="autoplay-progress" style={{ width: `${autoplayProgress}%` }}></div>
        {slide_img.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} alt="" width={1450} height={700} centeredSlides/>
          </SwiperSlide>
        ))}
      </Swiper>
    </center>
    </>
  );
}
