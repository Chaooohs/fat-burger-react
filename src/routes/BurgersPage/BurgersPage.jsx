import { Link, useLoaderData } from "react-router-dom";
import styles from "./BurgersPage.module.css";

export default function BurgersPage() {
  const burgers = useLoaderData();

  return (
    <main>
      <h1>Our burgers</h1>
      {burgers.map((burger) => {
        return (
          <Link to={`/burgers/${burger.id}`} key={burger.id} className={styles.burgerCard}>
            <div>
              <img src={burger.image} alt={burger.name} className={styles.image} />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}

export async function Loader() {
  const res = await fetch("https://raw.githubusercontent.com/Chaooohs/JSON-resume/master/fat-burgers.json");

  const burgers = await res.json();
  return burgers;
}
