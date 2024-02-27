import getSelector from "../lib/getSelector";

export default async (elementValue: string, pageElement: string) => {
    console.log(`${pageElement} is populated with ${elementValue} value`)
    const selector = getSelector(pageElement)
    await $(selector).setValue(elementValue);
}