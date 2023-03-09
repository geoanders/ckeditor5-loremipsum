/**
 * @module loremipsum/loremipsum
 */

import { Plugin } from 'ckeditor5/src/core';
import { Widget } from 'ckeditor5/src/widget';

import LoremIpsumUI from './loremipsumui';

export default class LoremIpsum extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ LoremIpsumUI, Widget ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'LoremIpsum';
	}
}
