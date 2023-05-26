import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [blips, setBlips] = useState([]);

  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      {blips.map((blip) => (
        <div key={blip.title}>
          {JSON.stringify(blip)}
          <br />
          <a href={`/blips/${blip.title}`}>link</a>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Home;
