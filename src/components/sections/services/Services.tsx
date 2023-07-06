import styles from "./Services.module.scss";

import Image from "next/image";

import servicesDB from "@/db/services.db";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h1>УСЛУГИ</h1>
      <ul>
        {servicesDB.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.item__image}>
              <Image src={item.image} alt="" fill />
            </div>
            <div className={styles.item__info}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <button>Подробнее</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
