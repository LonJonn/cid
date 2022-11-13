import { getAllPosts } from "@cid/server";
import { useEffect, useState } from "react";

export default async function IndexPage() {
  const posts = await getAllPosts();

  const [x, setX] = useState("");
  useEffect(() => {
    console.log(x);
  }, []);

  return (
    <div>
      <div>hey</div>
      {JSON.stringify(posts, null, 2)}
    </div>
  );
}
