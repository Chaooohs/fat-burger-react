import Btn from "../../conponents/Btn/Btn";
import styles from "../root.module.css";

export default function HomePage() {
  return (
    <main>
      <h1 className={`${styles.title} ${styles.fire}`}>Home Page</h1>
      <div className={styles.mainImage}>
        <img src="/fatburger.png" alt="fat burger" />
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non deleniti voluptates voluptate itaque libero, neque aut odio nemo iusto reiciendis?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis nobis sed sit qui!
      </p>
      <Btn>All burgers</Btn>
    </main>
  );
}
