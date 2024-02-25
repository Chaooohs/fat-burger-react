import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "../NewPost/NewPost.module.css";
import Btn from "../Btn/Btn";
import { useGetUsersQuery } from "../../redux";

export const Login = () => {
  const navigate = useNavigate();
  const { data: user } = useGetUsersQuery();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      localStorage.setItem('login', 'true');
      navigate("/", { replace: true });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        Email: Shanna@melissa.tv
        <input
          name="email"
          type="email"
          className={styles.input}
          style={errors.email && { borderColor: "red" }}
          placeholder="enter your email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-z0-9_.-]+@[a-z]+\.[a-z]+[a-z.]*$/gi,
              message: "email is not valid",
            },
            validate: {
              userEmail: (v) => user.find((el) => el.email === v) || "email is not valided",
            },
          })}
        />
        <div className={styles.error}>
          {errors?.email && <span>{errors?.email?.message || "the field must not be empty"}</span>}
        </div>
      </label>

      <label className={styles.label}>
        Username: Antonette
        <input
          name="username"
          className={styles.input}
          style={errors.username && { borderColor: "red" }}
          placeholder="enter your username"
          {...register("username", {
            required: true,
            validate: {
              userName: (v) => user.find((el) => el.username === v) || "email is not valided",
            },
          })}
        />
        <div className={styles.error}>
          {errors?.username && <span>{errors?.username?.message || "the field must not be empty"}</span>}
        </div>
      </label>

      <div className={styles.buttons}>
        <Btn>Go home</Btn>
        <Btn>Enter</Btn>
      </div>
    </form>
  );
};
