import getSelector from "../lib/getSelector";

export default async (pageElement: string,
                      waitCommand: 'isClickable' | 'isDisplayed' | 'isSelected' | 'isExisting',
                      maxCounter = 10,
                      timeIntervalinMs: number = 1000) => {
    const selector = getSelector(pageElement)
    let isElementResolved: boolean = false;
    let tryCounter: number = 0;
    let actualElementState;

    do {
        actualElementState = await $(selector)[waitCommand]();
        if (actualElementState)
            isElementResolved = true;
        else {
            await browser.pause(timeIntervalinMs);
            tryCounter++;
        }
    } while (!isElementResolved && tryCounter <= maxCounter)
    expect(isElementResolved).toBeTruthy();
}