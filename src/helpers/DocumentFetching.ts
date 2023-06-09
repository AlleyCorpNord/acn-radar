/*

async function getDocumentNames(path: string): Promise<string[]> {
  // const context = require.context(path, false, /\.md$/);
  console.log("path: ", path);
  const context = await import(`../${path}/`);
  console.log("context: ", context);
  // const markdownFilePaths = require
  //   .context("" + path, false, /\.md$/)
  //   .keys()
  //   .map((relativePath) => relativePath.substring(2));

  // const halfLen = markdownFilePaths.length / 2;
  // markdownFilePaths.splice(halfLen, halfLen);

  // return markdownFilePaths.map((path) => path.split(".")[0]);
  return [];
}

*/

export function importContent<T>(path: string): Promise<T[]>;
export function importContent<T>(path: string, name: string): Promise<T>;
export async function importContent<T>(
  path: string,
  name?: string
): Promise<T | T[] | undefined> {
  if (name) {
    const blip = await import(`../${path}/${name}.md`);
    if (!blip) return undefined;
    return {
      ...blip.attributes,
      slug: name,
    };
  } else {
    const fileNames = []; // await getDocumentNames(path);
    return Promise.all(
      fileNames.map((name) => importContent(path, name))
    ) as Promise<T[]>;
  }
}
