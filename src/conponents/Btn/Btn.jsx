import { useNavigate } from "react-router-dom";
import styles from "./Btn.module.css";

export default function Btn({ deletePost, postId, disabled, ...props }) {
  const navigate = useNavigate();
  const goBurgers = () => navigate("/burgers");
  const allPosts = () => navigate("/posts");
  const goBack = () => navigate(-1);
  const goHome = () => navigate("/");

  return (
    <>
      {
        props.children === "All burgers" &&
        <button
          className={styles.btn}
          onClick={goBurgers}
          style={{ margin: '20px auto 40px' }}
        >
          {props.children}
        </button>
      }

      {
        props.children === "All post" &&
        <button
          className={styles.btn}
          onClick={allPosts}
          style={{ display: "inline-block", width: "100px", margin: "20px 0 40px" }}
        >
          {props.children}
        </button>
      }

      {
        props.children === "Save post" &&
        <button
          className={styles.btn}
        >
          {props.children}
        </button>
      }

      {
        props.children === "Go back" &&
        <button
          className={styles.btn}
          onClick={goBack}
        >
          {props.children}
        </button>
      }

      {
        props.children === "Delete" &&
        <button
          className="link link-del"
          onClick={() => deletePost(postId)}
        >
          {props.children}
        </button>
      }

      {
        props.children === "Go home" &&
        <button
          className={styles.btn}
          onClick={goHome}
        >
          {props.children}
        </button>
      }

      {
        props.children === "Enter" &&
        <button
          type="submit"
          className={styles.btn}
        >
          {props.children}
        </button>
      }
    </>
  );
};
