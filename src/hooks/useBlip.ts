import { useEffect, useState } from "react";
import { Blip } from "../types/Blip";
import MiniSearch from "minisearch";

/*
 *
 */
export interface SearchParams {
  term?: string;
  quadrant?: string;
  ring?: string;
  project?: string;
}

let minisearch = new MiniSearch({
  idField: "slug",
  fields: ["title", "description", "license"],
  storeFields: ["title", "description", "license"],
});

/*
 * This hook is used to fetch blips from the blips directory.
 * If blipName is null, all blips are returned.
 * If blipName is not null, only the blip with the given name is returned.
 */
export const useBlip = (searchParams: SearchParams = {}) => {
  const [blips, setBlips] = useState<Blip[]>([]);

  useEffect(() => {
    importBlip().then((blips) => {
      setBlips(Array.isArray(blips) ? blips : [blips]);
      minisearch.removeAll();
      minisearch.addAll(blips);
    });
  }, []);

  let filteredBlips = blips;
  if (blips && searchParams.term) {
    console.log(
      "searching for: " + searchParams.term + "..." + minisearch.documentCount
    );
    const results = minisearch.search(searchParams.term, {
      fuzzy: 0.2,
      prefix: true,
    });

    filteredBlips = results.map((result) => {
      console.log("result: ", result);
      const blip = blips.find((blip) => blip.slug === result.id);
      return blip;
    });
  }

  filteredBlips = filteredBlips.filter((blip) => {
    if (searchParams.quadrant && blip.quadrant !== searchParams.quadrant)
      return false;
    if (searchParams.ring && blip.ring !== searchParams.ring) return false;
    if (searchParams.project && !blip.projects?.includes(searchParams.project))
      return false;
    return true;
  });

  return filteredBlips;
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
    return Promise.all(fileNames.map(importBlip));
  }
}
