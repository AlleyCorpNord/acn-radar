import { Blip } from "../types/Blip";
import MiniSearch from "minisearch";

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

export const useBlipsFilter = (
  blips: Blip[],
  searchParams: SearchParams
): Blip[] => {
  if (!blips) return [];

  let filteredBlips = blips;
  minisearch.removeAll();
  minisearch.addAll(blips);

  if (blips && searchParams.term) {
    const results = minisearch.search(searchParams.term, {
      fuzzy: 0.2,
      prefix: true,
    });

    filteredBlips = results
      .map((result) => blips.find((blip) => blip.slug === result.id))
      .filter((blip) => blip !== undefined && blip !== null) as Blip[];
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

  return filteredBlips;
};
