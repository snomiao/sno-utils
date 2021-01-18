import fs from 'fs';
import { URL } from 'url';

export async function 文本文件读取(路径: string | Buffer | URL | fs.promises.FileHandle) {
    return await fs.promises.readFile(路径, 'utf-8')
}
export async function 目录创建(目录: fs.PathLike) {
    return await fs.promises.mkdir(目录, { recursive: true });
}
export async function 目录删除(目录: fs.PathLike) {
    return await fs.promises.unlink(目录);
}