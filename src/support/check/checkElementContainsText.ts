import getSelector from "../lib/getSelector";

export default async (pageElement: string, expectedText: string) => {
    const selector = getSelector(pageElement);
    const actualText = await $(selector).getText();
    console.log(`actual text ${actualText}`);
    expect(actualText).toEqual(expectedText);
}