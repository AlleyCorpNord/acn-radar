const contexts = {
  blips: require.context(`../content/blips`, false, /\.md$/),
  projects: require.context(`../content/projects`, false, /\.md$/),
};

const collectionType = {
  blips: "blips",
  projects: "projects",
} as const;

export type CollectionType = keyof typeof collectionType;

const collectionPath: { [collection in CollectionType]: string } = {
  blips: "blips",
  projects: "projects",
};

async function getDocumentNames(path: CollectionType): Promise<string[]> {
  const context = contexts[path];
  const markdownFilePaths = context
    .keys()
    .map((relativePath) => relativePath.substring(2));

  const halfLen = markdownFilePaths.length / 2;
  markdownFilePaths.splice(halfLen, halfLen);
  return markdownFilePaths.map((path) => path.split(".")[0]);
}

export function importContent<T>(collection: CollectionType): Promise<T[]>;
export function importContent<T>(
  collection: CollectionType,
  name: string
): Promise<T>;
export async function importContent<T>(
  collection: CollectionType,
  name?: string
): Promise<T | T[] | undefined> {
  if (name) {
    const document = await import(
      `../content/${collectionPath[collection]}/${name}.md`
    );
    if (!document) return undefined;
    return {
      ...document.attributes,
      slug: name,
    };
  } else {
    const fileNames = await getDocumentNames(collection);
    return Promise.all(
      fileNames.map((name) => importContent(collection, name))
    ) as Promise<T[]>;
  }
}
