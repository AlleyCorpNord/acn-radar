import Head from "next/head";
import { useBlip } from "../../hooks/useBlip";

const BlipList = () => {
  const blips = useBlip(undefined);

  return (
    <div>
      <Head>
        <title>ACN Radar</title>
      </Head>
      <div>Blips</div>
      {blips.map((blip, i) => (
        <div key={blip.title ?? `${i}`}>
          <div>{JSON.stringify(blip.title)}</div>
          <a href={`/blips/${blip.slug}`}>link</a>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlipList;
