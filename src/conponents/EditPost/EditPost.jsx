import { useAddPostMutation } from "../../redux";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "../NewPost/NewPost.module.css";
import style from "../Btn/Btn.module.css";
import Btn from "../Btn/Btn";

export const EditPost = ({ id, title, body }) => {
  const [message, setMessage] = useState();
  const [addPost] = useAddPostMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = data => {
    data && addPost(data).unwrap();
    setMessage({ message: "Saved" })
  }
    
  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
    return () => clearTimeout();
  }, [message]);

  return (
    <form method="post" className={styles.form} onSubmit={handleSubmit(onSubmit)} >

      <label className={styles.label}>
        Title:
        <input
          name="title"
          defaultValue={title}
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
          defaultValue={body}
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

      <input type="hidden" name="id" value={id} />

      <div className={styles.buttons}>
        <Btn>Go back</Btn>
        <Btn>Save post</Btn>
      </div>

      {message?.message && (
        <div className={`${styles.message} ${style.btn}`} style={{ backgroundColor: "darkorange" }}>
          {message.message}
        </div>
      )}
    </form>
  );
};
