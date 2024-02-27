export default async (waitInMs: string) => {
    console.log(`execution paused for ${waitInMs}`)
    await browser.pause(parseInt(waitInMs));
}