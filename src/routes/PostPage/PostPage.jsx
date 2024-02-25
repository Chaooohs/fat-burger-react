import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeletePostMutation, useGetSinglePostQuery } from "../../redux";
import Btn from "../../conponents/Btn/Btn";

export default function PostPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading } = useGetSinglePostQuery(params.id);
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <h1>Loading...</h1>;

  const handleDeletePost = async (id) => {
    await deletePost(id);
    navigate(-1);
  };

  return (
    <main>
      {post && (
        <>
          {
            localStorage.getItem('login') &&
            <div className="link-box">
              <Link to={`/posts/${post.id}/edit`} className="link">
                Edit post
              </Link>
              <Btn deletePost={handleDeletePost} postId={post.id}>
                Delete
              </Btn>
            </div>
          }
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          <Btn>All post</Btn>
        </>
      )}
    </main>
  );
}
