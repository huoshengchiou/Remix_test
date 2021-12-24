import { Outlet, useLoaderData } from "remix";
//如果最外層有跟資料夾同名稱路徑則會同時出現在畫面上

//server run
export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: "post1" },
      { id: 2, title: "post2" },
      { id: 3, title: "post3" },
    ],
  };
  return data;
};

const posts = () => {
  const { posts } = useLoaderData();
  return (
    <div>
      out <Outlet></Outlet>
      {posts.map((item) => (
        <>{item.title}</>
      ))}
    </div>
  );
};

export default posts;
