import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

import env from "@cid/env";
import { getAllPosts } from "@cid/server";

export async function loader() {
  return json(await getAllPosts());
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  const [hey] = useState("");
  useEffect(() => {
    console.log(hey);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix yepjik</h1>
      <pre>{JSON.stringify(posts, null, 4)}</pre>
      {env.public.EVENT_STAGE}
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
