import styles from './News.module.scss';

import Image from 'next/image';
import dynamic from 'next/dynamic';

import newsDB from '@/db/news.db';

const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const News = () => {
  const settings = {
    items: 2,
    loop: true,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section id='news' className={styles.news}>
      <h1>НОВОСТИ</h1>
      <OwlCarousel className={styles.carousel} {...settings}>
        {newsDB.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.item__image}>
              <Image src={item.image} alt='' fill />
            </div>
            <div className={styles.item__info}>
              <h3>{item.name}</h3>
              <p>
                {item.date.day}.{item.date.month}.{item.date.year}
              </p>
              <p>{item.description}</p>
            </div>
            <button>Подробнее</button>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default News;
