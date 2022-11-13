import { getAllPosts } from "@cid/server";

export default async function IndexPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <div>hey</div>
      {JSON.stringify(posts, null, 2)}
    </div>
  );
}
