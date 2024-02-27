/*// Locate the <h4> element
const h4Element = $('//h4[text()="Accepted usernames are:"]');

// Get all following sibling text nodes
const textNodes = h4Element.$$xpath('following-sibling::text()');

// Extract and store the text from each text node
const texts = textNodes.map((node) => node.getText());

// Print the stored texts
texts.forEach((text) => console.log(text));
*/

import type {Selector} from 'webdriverio';

import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not
 *                               (an or no)
 * @param  {String}   selector   Element selector
 */
export default async (isExisting: string, selector: Selector) => {
    /**
     * Falsecase assertion
     * @type {Boolean}
     */
    let falseCase = true;

    if (isExisting === 'an') {
        falseCase = false;
    }

    await checkIfElementExists(selector, falseCase);
};
