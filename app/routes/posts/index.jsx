import { Outlet } from "remix";

const posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {/* 插入子路由component */}
      <Outlet></Outlet>
    </div>
  );
};

export default posts;
