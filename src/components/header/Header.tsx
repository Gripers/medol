import styles from './Header.module.scss';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__top}>
          <ul className={styles.header__top_fst}>
            <li>
              <div className={styles.header__top__fst_icon}>
                <Image
                  src='/static/media/location.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
              <p>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
            </li>
            <li>
              <div className={styles.header__top__fst_icon}>
                <Image
                  src='/static/media/call.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
              <p>
                <a href='tel:+998712766253'>+998 71 276-62-53</a>
                <br />
                <a href='tel:+998712766254'>+998 71 276-62-54</a>
              </p>
            </li>
          </ul>
          <div className={styles.header__top_logo}>
            <Image
              src='/static/media/logo.svg'
              alt=''
              width={150}
              height={50}
            />
          </div>
          <ul className={styles.header__top_sec}>
            <li>
              <button>
                <Image
                  src='/static/media/search.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </button>
            </li>
            <li>
              <a href='#'>
                <button>Мы на Facebook</button>
              </a>
            </li>
            <li>
              <button>Русский</button>
            </li>
          </ul>
        </div>
        <nav className={styles.header__bottom}>
          <OwlCarousel autoWidth stageElement='ul' stageClass={styles.list} itemElement='li' dots={false}>
              <a href='#shop'>МАГАЗИН</a>
              <a href='#about'>О КОМПАНИИ</a>
              <a href='#production'>ПРОДУКЦИЯ</a>
              <a href='#services'>УСЛУГИ</a>
              <a href='#news'>АКЦИИ И НОВОСТИ</a>
              <a href='#feedback'>ОБРАТНАЯ СВЯЗЬ</a>
          </OwlCarousel>
        </nav>
      </div>
    </header>
  );
};

export default Header;
