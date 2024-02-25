import { useParams } from "react-router-dom";
import { EditPost } from "../../conponents";
import { useGetSinglePostQuery } from "../../redux";

export default function PostEditPage() {
  const params = useParams()
  const { data, isLoading } = useGetSinglePostQuery(params.id);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <main>
      <h1> Edit post {data.id} </h1>
      <EditPost {...data} ></EditPost>
    </main>
  );
}
