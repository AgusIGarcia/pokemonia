import fs from "fs";

export const getObjectFromFile = <T>(path: string): T => {
  const contenido = fs.readFileSync(path, "utf-8");
  return JSON.parse(contenido) as T;
};
