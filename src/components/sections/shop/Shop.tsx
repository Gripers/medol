import styles from "./Shop.module.scss";

import Image from "next/image";

const Shop = () => {
  return (
    <section id="shop" className={styles.shop}>
      <div className={styles.shop__left}>
        <h1>Анализатор ABL800 FLEX</h1>
        <p>
          Ориентированный на среднюю или высокую производительность тестов,
          анализатор ABL800 FLEX измеряет полный набор параметров, включая pH,
          газы крови, электролиты, метаболиты и показатели оксиметрии
        </p>
        <button>Подробнее</button>
      </div>
      <div className={styles.shop__right}>
        <Image src="/static/media/slide.png" alt="" fill />
      </div>
    </section>
  );
};

export default Shop;
