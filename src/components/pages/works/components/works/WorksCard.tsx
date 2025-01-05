/* ライブラリ */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
/* CSS */
import "./worksCard.css";
import 'swiper/css';
import 'swiper/css/navigation';
/* コンテンツ */
import pointIcon from "@/assets/svg/point-icon.svg";
import { ContentsType, Work } from '../../types';

export const WorksCard = ({
  _work = {
    title: "",
    tags: [],
    description: "",
    contents: [],
  }
}:{
  _work: Work,
}) => {
  return (
    <article className="worksCard">
      <div className="title">
        <img src={pointIcon} alt="プロフィール欄アイコン" />
        <h3>{ _work.title }</h3>
      </div>
      <div className='display'>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          { _work.contents.map(item => {
            switch (item.contentsType){
              case ContentsType.Image:
                return (
                  <SwiperSlide key={item.url}>
                    <img src={item.url} alt="musicwolf1" />
                  </SwiperSlide>
                );
              case ContentsType.Video:
                return (
                  <SwiperSlide key={item.url}>
                    <video src={item.url} controls />
                  </SwiperSlide>
                );
              default:
                return null
            }  
          }) }
        </Swiper>
      </div>
      <div className='tags'>
        { _work.tags.map(tag => (
          <div className='tag' key={tag}>
            <div className='tag-icon'></div>
            <div className='tag-main'>{ tag }</div>
          </div>
        )) }
      </div>
      <div className='description'>
        { _work.description }
      </div>
    </article>
  );
};
