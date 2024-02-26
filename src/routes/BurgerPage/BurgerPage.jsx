import { useParams } from "react-router-dom";
import { useGetBurgersQuery } from "../../redux";
import Btn from "../../conponents/Btn/Btn";
import styles from "./BurgerPage.module.css";

export default function BurgerPage() {
  const { data: burgers, isLoading } = useGetBurgersQuery()
  let { id } = useParams();

  if (isLoading) return <h1>Loading...</h1>;

  const burger = burgers.find((el) => {
    if (id === el.id) {
      return el;
    }
  });

  return (
    <main>
      <div className={styles.singleBurger}>
        <div>
          <h1>{burger.name}</h1>
          <div className={styles.imageContainer}>
            <img src={burger.image} alt={burger.name} />
          </div>
          <p>{burger.desc}</p>
        </div>
      </div>
      <Btn>All burgers</Btn>
    </main>
  );
}
