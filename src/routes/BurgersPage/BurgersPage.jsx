import { Link } from "react-router-dom";
import { useGetBurgersQuery } from "../../redux";
import styles from "./BurgersPage.module.css";

export default function BurgersPage() {
  const { data: burgers, isLoading } = useGetBurgersQuery()

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <main>
      <h1>Our burgers</h1>
      {burgers &&
        burgers.map((burger) => {
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
