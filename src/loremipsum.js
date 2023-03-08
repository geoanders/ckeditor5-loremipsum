/**
 * @module loremipsum/loremipsum
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import LoremIpsumUI from './loremipsumui';

/**
 * The Lorem ipsum feature.
 *
 * It provides the possibility to insert Lorem ipsum into the rich-text editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class LoremIpsum extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ LoremIpsumUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'LoremIpsum';
	}
}