import Head from "next/head";
import { useRouter } from "next/router";
import { useBlip } from "../../hooks/useBlip";
import { BlipDetails } from "../../components/BlipDetails";

const Blips = () => {
  const router = useRouter();
  const { blip: blipName } = router.query;
  const blips = useBlip((blipName as string) ?? "");
  const blip = blips[0];

  return (
    <div>
      <Head>
        <title>{blip?.title ?? "Radar Blip"}</title>
      </Head>
      {blipName && blip && (
        <>
          <h1>{blip.title}</h1>
          <BlipDetails blip={blip} />
        </>
      )}
    </div>
  );
};

export default Blips;
