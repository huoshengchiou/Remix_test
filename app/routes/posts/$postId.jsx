import { useParams } from "remix";

const Post = () => {
  const params = useParams();
  return (
    <div>
      <div>post {params.postId}</div>
    </div>
  );
};

export default Post;
