export const UTF8_BOM头删除 = (e: string) => e.replace(/^\ufeff/, "");
export const UTF8_BOM头追加 = (e: string) => "\ufeff" + e;
export const 换行CR于CRLF删除 = (e: string) => e.replace(/\r\n/g, "\n");

const fsp = async () => (await import("fs")).promises;

/**
 * NODE-ONLY
 * @returns string
 */
 export const 文本文件读取 = async (路径: string) => await (await fsp()).readFile(路径, "utf8").then(UTF8_BOM头删除).then(换行CR于CRLF删除);
/**
 * NODE-ONLY
 */
 export const 文件写入 = async (路径: string, 数据: string | Uint8Array) => await (await fsp()).writeFile(路径, 数据);
