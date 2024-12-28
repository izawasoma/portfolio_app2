/* ライブラリ */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
/* CSS */
import "./worksCard.css";
import 'swiper/css';
import 'swiper/css/navigation';
/* コンテンツ */
import pointIcon from "@/assets/svg/point-icon.svg";

export const WorksCard = ({
  _title = "title",
}:{
  _title: string,
}) => {
  return (
    <article className="worksCard">
      <div className="title">
        <img src={pointIcon} alt="プロフィール欄アイコン" />
        <h3>{ _title }</h3>
      </div>
      <div className='display'>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="img/musicwolf1.jpg" alt="musicwolf1" />
          </SwiperSlide>
          <SwiperSlide>
            <video src='video/musicwolf.mp4' controls />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/musicwolf2.jpg" alt="musicwolf2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </article>
  );
};
