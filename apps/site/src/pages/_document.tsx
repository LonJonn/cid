import Document, { Head, Html, Main, NextScript } from "next/document";

import env from "@cid/env";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(env.public)}` }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
