import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header } from "../conponents";
import styles from "./root.module.css";

export default function Root() {
  const navigate = useNavigate();

  const handlerLogOut = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  const handlerLogIn = () => {
    navigate('/login')
  }

  return (
    <>
      <div>
        {localStorage.getItem("login")
          ?
          <button onClick={handlerLogOut} className={styles.logbtn}>
            logOut
          </button>
          :
          <button onClick={handlerLogIn} className={styles.logbtn}>
            logIn
          </button>
        }
        <div className="content">
          <Header />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
