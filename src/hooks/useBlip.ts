import { useEffect, useState } from "react";
import { Blip } from "../types/Blip";

/*
 * This hook is used to fetch blips from the blips directory.
 * If blipName is null, all blips are returned.
 * If blipName is not null, only the blip with the given name is returned.

 */
export const useBlip = (blipName: string | undefined = undefined) => {
  const [blips, setBlips] = useState<Blip[]>([]);

  useEffect(() => {
    importBlip(blipName).then((blips) => {
      setBlips(Array.isArray(blips) ? blips : [blips]);
    });
  }, [blipName]);

  return blips;
};

const getBlipNames = async () => {
  const markdownFilePaths = require
    .context("../blips", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  const halfLen = markdownFilePaths.length / 2;
  markdownFilePaths.splice(halfLen, halfLen);
  return markdownFilePaths.map((path) => path.split(".")[0]);
};

function importBlip(): Promise<Blip[]>;
function importBlip(name: string): Promise<Blip>;
async function importBlip(name?: string): Promise<Blip | Blip[] | undefined> {
  if (name) {
    const blip = await import(`../blips/${name}.md`);
    if (!blip) return undefined;
    return {
      ...blip.attributes,
      slug: name,
    };
  } else {
    const fileNames = await getBlipNames();
    return Promise.all(fileNames.map((n) => importBlip(n)));
  }
}
