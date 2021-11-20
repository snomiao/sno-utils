// NODE-ONLY
import fs from "fs";
export const BOM头删除 = (e: string) => e.replace(/^\ufeff/, "");
export const BOM头追加 = (e: string) => "\ufeff" + e;
export const CR于CRLF删除 = (e: string) => e.replace(/\r\n/g, "\n");
export const 文本文件读取 = async (文件名: fs.PathLike | fs.promises.FileHandle) => await fs.promises.readFile(文件名, "utf8").then(BOM头删除).then(CR于CRLF删除);
