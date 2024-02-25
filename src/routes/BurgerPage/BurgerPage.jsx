import { useLoaderData, useParams } from "react-router-dom";
import Btn from "../../conponents/Btn/Btn";
import styles from "./BurgerPage.module.css";

export default function BurgerPage() {
  const burgers = useLoaderData();
  let { id } = useParams();

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

export async function Loader() {
  const res = await fetch("https://raw.githubusercontent.com/Chaooohs/JSON-resume/master/fat-burgers.json");

  const burgers = await res.json();
  return burgers;
}
