import getSelector from "../lib/getSelector";

export default async (pageElement: string) => {
    console.log(`Clicking the ${pageElement}`)
    const selector = getSelector(pageElement)
    await $(selector).click();
}