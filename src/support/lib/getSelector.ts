import isFileExist from "./isFileExist.ts";
import * as fs from "fs";

export default (pageElement: string) => {
    const pageName = pageElement.split('.')[0];
    const element = pageElement.split('.')[1];

    const absolutePagePath = `${process.cwd()}/pages/${pageName}.json`;
    expect(isFileExist(absolutePagePath)).toBeTruthy();

    const rawJsonData = fs.readFileSync(absolutePagePath);
    // @ts-ignore
    const jsonData = JSON.parse(rawJsonData);

    for (let key in jsonData) {
        if (key === element)
            return jsonData[key];
    }
    throw Error(`key ${element} is not found in the file ${pageName}`);
}