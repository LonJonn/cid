import { useState, useEffect } from "react";

import fs from "fs";

export default function Web() {
  const [hey] = useState("");
  useEffect(() => {
    console.log(hey);
  }, []);

  return (
    <div>
      <h1>Web</h1>
    </div>
  );
}
