import styles from './Footer.module.scss';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__box}>
          <div className={styles.footer__box_top}>
            <b>Контакты</b>
            <ul>
              <li>
                <div className={styles.footer__box__top_icon}>
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
                <div className={styles.footer__box__top_icon}>
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
              <li>
                <div className={styles.footer__box__top_icon}>
                  <Image
                    src='/static/media/email.svg'
                    alt=''
                    width={20}
                    height={20}
                  />
                </div>
                <a href='mailto:info@medol.uz'>info@medol.uz</a>
              </li>
              <li>
                <button>Оставить заявку</button>
              </li>
            </ul>
          </div>
          <div className={styles.footer__box_bottom}>
            <Image
              src='/static/media/logo.svg'
              alt=''
              width={150}
              height={50}
            />
            <p>
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>
        </div>
        <div className={styles.footer__lists}>
          <ul>
            <li>
              <strong>О компании</strong>
            </li>
            <li>История</li>
            <li>Партнеры</li>
            <li>Вакансии</li>
          </ul>
          <ul>
            <li>
              <strong>Продукция</strong>
            </li>
            <li>Аритмология</li>
            <li>Хирургия</li>
            <li>Диабет</li>
            <li>Эндоурология</li>
          </ul>
          <ul>
            <li>
              <strong>Услуги</strong>
            </li>
            <li>Сервис</li>
            <li>Регистрации</li>
            <li>Услуги логистики</li>
          </ul>{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
