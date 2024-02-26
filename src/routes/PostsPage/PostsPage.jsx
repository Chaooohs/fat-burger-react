import { Link } from "react-router-dom";
import styles from "./PostsPage.module.css";
import { useGetDataQuery } from "../../redux";

export default function PostsPage() {
  const { data: posts, isLoading } = useGetDataQuery('/posts');

  if (isLoading) return <h1>Loading...</h1>;
  if (!posts) return <h2>no data</h2>;

  return (
    <main>
      <h1>Posts</h1>

      {
        localStorage.getItem('login') &&
        <div className="link-box">
          <Link to={"/posts/:id/new"} className="link">
            New post
          </Link>
        </div>
      }

      <div className="posts">
        {posts &&
          posts.slice(0, 10).map((el, i) => {
            return (
              <div key={el.id}>
                <Link to={`/posts/${el.id}`} className={styles.link}>
                  {el.id} {el.title}
                </Link>
                <div style={{ fontWeight: "400" }}>{`${el.body.slice(0, 90)}...`}</div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
