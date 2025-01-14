/* ライブラリ */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
/* CSS */
import "./worksCard.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* コンテンツ */
import pointIcon from "@/assets/svg/point-icon.svg";
import { ContentsType, Work } from '../../types';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <article className="worksCard">
      <div className="title">
        <img src={pointIcon} alt="プロフィール欄アイコン" />
        <h3>{ _work.title }</h3>
      </div>
      <div className='display'>
        { _work.contents.length > 1 && (
          <>
            <button ref={prevRef} className="prev">
              <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <button ref={nextRef} className="next">
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </>
        ) }
        <Swiper
          rewind={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: false }} // Paginationを有効化
          onBeforeInit={(swiper) => {
            // Swiperのカスタムナビゲーション要素を設定
            if (swiper.params.navigation) {
              const navigation = swiper.params.navigation;
              if (typeof navigation !== 'boolean') {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
            }
          }}
          modules={[Navigation, Pagination]}
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
