import fs from "fs/promises";
import fm from "front-matter";

const collectionType = {
  blips: "blips",
  projects: "projects",
} as const;

export type CollectionType = keyof typeof collectionType;

const collectionPath: { [collection in CollectionType]: string } = {
  blips: "blips",
  projects: "projects",
};

const baseContentPath = "./src/content";

export const loadDocumentNames = async (collection: CollectionType) => {
  const content = await fs.readdir(
    `./src/content/${collectionPath[collection]}`
  );
  return content;
};

export async function importContent<T>(
  collection: CollectionType
): Promise<T[]> {
  const fileNames = await loadDocumentNames(collection);

  return Promise.all(
    fileNames.map(async (name) => {
      const document = await fs.readFile(
        `${baseContentPath}/${collectionPath[collection]}/${name}`,
        "utf-8"
      );
      const content = fm(document).attributes as T;

      return { ...content, slug: name.split(".")[0] };
    })
  ) as Promise<T[]>;
}
