import { deepEqual } from "assert";
import fs from "fs";

import { useState, useEffect } from "react";

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
