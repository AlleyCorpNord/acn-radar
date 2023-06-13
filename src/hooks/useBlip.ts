import { useEffect, useState } from "react";
import { Blip } from "../types/Blip";
import MiniSearch from "minisearch";
import { CollectionType, importContent } from "../helpers/DocumentFetching";

const blipCollection: CollectionType = "blips";

/*
 * Parameters that can be used to filter blips.
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

/**
 * This hook returns a list of all blips and a filtered list of blips based on the search parameters.
 * @param {SearchParams} searchParams - The search parameters to filter the blips by.
 * @returns {[Blip[], Blip[]]} - A tuple containing the list of all blips and the filtered list of blips.
 */
export const useBlip = (searchParams: SearchParams = {}): [Blip[], Blip[]] => {
  const [blips, setBlips] = useState<Blip[]>([]);

  useEffect(() => {
    importContent<Blip>(blipCollection).then((blips) => {
      setBlips(Array.isArray(blips) ? blips : [blips]);
      minisearch.removeAll();
      minisearch.addAll(blips);
    });
  }, []);

  let filteredBlips = blips;
  if (blips && searchParams.term) {
    const results = minisearch.search(searchParams.term, {
      fuzzy: 0.2,
      prefix: true,
    });

    filteredBlips = results.map((result) => {
      const blip = blips.find((blip) => blip.slug === result.id);
      return blip;
    });
  }

  filteredBlips = filteredBlips.filter((blip) => {
    if (searchParams.quadrant && blip.quadrant !== searchParams.quadrant)
      return false;
    if (searchParams.ring && blip.ring !== searchParams.ring) return false;
    if (
      searchParams.project &&
      !blip.projectIds?.includes(searchParams.project)
    )
      return false;
    return true;
  });

  return [blips, filteredBlips];
};
