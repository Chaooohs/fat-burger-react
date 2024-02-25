import { useAddPostMutation } from "../../redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./NewPost.module.css";
import Btn from "../Btn/Btn";

export const NewPost = () => {
  const navigate = useNavigate()
  const [addPost] = useAddPostMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = data => {
    if (data) {
      addPost(data).unwrap();
      navigate(-1)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        Title:
        <input
          name="title"
          className={styles.input}
          style={errors.title && {borderColor: 'red'}}
          {...register("title", {
            required: true,
            minLength: {
              value: 2,
              message: "the field must contain at least 2 symbols",
            },
          })}
          placeholder="the field must not be empty and contain at least 2 symbols"
        />
        <div className={styles.error}>
          {
            errors?.title &&
            <span>{errors?.title?.message || "the field must not be empty"}</span>
          }
        </div>
      </label>

      <label className={styles.label}>
        Body:
        <textarea
          name="body"
          className={styles.textarea}
          style={errors.body && {borderColor: 'red'}}
          {...register("body", {
            required: true,
            minLength: {
              value: 50,
              message: "the field must contain at least 50 symbols",
            },
          })}
          placeholder="the field must not be empty and contain at least 50 symbols"
        />
        <div className={styles.error}>
          {
            errors?.body &&
            <span>{errors?.body?.message || "the field must not be empty"}</span>
          }
        </div>
      </label>

      <div className={styles.buttons}>
        <Btn>Go back</Btn>
        <Btn>Save post</Btn>
      </div>
    </form>
  );
};
