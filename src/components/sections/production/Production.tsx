import styles from "./Production.module.scss";

import Image from "next/image";
import Link from "next/link";

import productionDB from "@/db/production.db";

const Production = () => {
  return (
    <section id="production" className={styles.production}>
      <h1>ПРОДУКЦИЯ</h1>
      <ul>
        {productionDB.map((item) => (
          <li key={item.id}>
            <Image src={item.image} alt="" fill />
            <strong>{item.name}</strong>
            <button>Посмотреть все</button>
          </li>
        ))}
      </ul>
      <Link href="/">Перейти в каталог нашей продукции</Link>
    </section>
  );
};

export default Production;
