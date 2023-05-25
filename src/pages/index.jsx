import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [blips, setBlips] = useState([]);

  useEffect(() => {
    importBlips().then((blipList) => {
      console.log(blipList);
      setBlips(blipList);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      {blips.map((blip) => (
        <div>
          {JSON.stringify(blip)}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Home;

const importBlips = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../blips", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  const halfLen = markdownFiles.length / 2;
  markdownFiles.splice(halfLen, halfLen);
  return Promise.all(
    markdownFiles.map(async (path) => {
      // const markdown = await import(`../blips/${path}`);
      return markdown.attributes;
    })
  );
};
