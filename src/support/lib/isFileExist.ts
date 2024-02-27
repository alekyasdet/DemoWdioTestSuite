import * as fs from "fs";

export default (filePath: string) => {
    return fs.existsSync(filePath);
}