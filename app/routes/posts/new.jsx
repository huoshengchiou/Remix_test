import { redirect } from "remix";

export const action = async ({ request }) => {
  const form = await request.formData();

  const title = form.get("title");
  const ctx = form.get("ctx");

  const fields = { title, ctx };
  console.log({ fields });

  // submit to DB

  // return redirect("/posts");
};

//為posts的子路由

const NewPost = () => {
  return (
    <>
      <div>NewPost</div>
      <form method="POST">
        <label htmlFor="title">
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="ctx">
          <textarea name="ctx" id="ctx" cols="30" rows="10"></textarea>
        </label>
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default NewPost;
