import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import env from "@cid/env";
import { getAllPosts } from "@cid/server";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  // if (!params || typeof params.hey !== "string") {
  //   return {
  //     notFound: true,
  //     revalidate: 60,
  //   }; // satisfies ReturnType<GetStaticProps>;
  // }

  return {
    revalidate: 60,
    props: {
      hey: "there!",
      posts: await getAllPosts(),
    },
  }; // satisfies ReturnType<GetStaticProps>;
}

// export default function Page({ hey }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <div>
//       <div>woah</div>
//       <p>{hey}</p>
//     </div>
//   );
// }

const PAGES = {
  PRE: PrePage,
  LIVE: LivePage,
};

export default PAGES[env.public.EVENT_STAGE];

function PrePage({ hey, posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>I am PREJK</h1>
      <p>{hey}</p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <pre>{JSON.stringify(env.public, null, 2)}</pre>
    </div>
  );
}

function LivePage({ hey }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>I am LIVEJK</h1>
      <p>{hey}</p>
    </div>
  );
}
