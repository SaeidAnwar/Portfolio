import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/Projects.css";

import trainImg from "/public/projects/horror_train.png"
import portfolioImg from "/public/projects/portfolio.png"
import iguanaImg from "/public/projects/iguana_escape.png"
import superImg from "/public/projects/super_mario.png"
import youtubeImg from "/public/projects/youtube_filtered.png"

export default function () {
  return (
    <div className="Project">
      <p className="title">Projects</p>
      <div className="project-container">
        <Swiper
          keyboard={{
            enabled: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation= {true}
          modules={[EffectCoverflow, Pagination, Keyboard, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="card">
            <img
              src={portfolioImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Portfolio</h5>
              <p className="card-text">
                My Portfolio where you will find all professional information about me.
              </p>
            </div>
            <div className="inner-header">Tech-Stack</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                HTML/CSS, React JS, BootStrap
              </li>
            </ul>
            <div className="card-body-link">
              <a href="https://saeidanwar.github.io/Portfolio/" className="card-link"  target="_blank">
                Link
              </a>
              <a href="https://github.com/SaeidAnwar/Portfolio/tree/main" className="card-link-1"  target="_blank">
                GitHub
              </a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img
              src={youtubeImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Youtube Filtered</h5>
              <p className="card-text">
              Website for those who want to utilize YouTube content without distractions or
              recommendations
              </p>
            </div>
            <div className="inner-header">Tech-Stack</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                HTML/CSS, Javascript, Youtube Api
              </li>
            </ul>
            <div className="card-body-link">
              <a href="https://wevdebelopers.github.io/YoutubeFilteredDeployment/homepage.html" className="card-link"  target="_blank">
                Link
              </a>
              <a href="https://github.com/wevdebelopers/Youtube_Filter" className="card-link-1"  target="_blank">
                GitHub
              </a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img
              src={superImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Super Mario AI</h5>
              <p className="card-text">
                See what's the AI's take on the world's famous classic game Super Mario Bros.
              </p>
            </div>
            <div className="inner-header">Tech-Stack</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Python, Gym, Stable-Baseline3
              </li>
            </ul>
            <div className="card-body-link">
              <a href="https://github.com/SaeidAnwar/Super-Mario-AI" target="_blank" className="card-link">
                Link
              </a>
              <a href="https://github.com/SaeidAnwar/Super-Mario-AI"  target="_blank" className="card-link-1">
                GitHub
              </a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img
              src={trainImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">The Horror Train</h5>
              <p className="card-text">
              Game where players journey on a haunted train, tasked with finding eerie
              items at various stations.
              </p>
            </div>
            <div className="inner-header">Tech-Stack</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Unity Engine, Krita, Visual Studio
              </li>
            </ul>
            <div className="card-body-link">
              <a href="https://indianindie.itch.io/train-game" className="card-link"  target="_blank">
                Link
              </a>
              <a href="https://indianindie.itch.io/train-game" className="card-link-1"  target="_blank">
                GitHub
              </a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img
              src={iguanaImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Iguana's Escape</h5>
              <p className="card-text">
                Help the poor Iguana in escaping snakes and collecting food for it's survival in the wild.
              </p>
            </div>
            <div className="inner-header">Tech-Stack</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Unity Engine, Blender, Visual Studio
              </li>
            </ul>
            <div className="card-body-link">
              <a href="https://indianindie.itch.io/escape-for-survival" className="card-link"  target="_blank">
                Link
              </a>
              <a href="#" className="card-link-1"  target="_blank">
                GitHub
              </a>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
