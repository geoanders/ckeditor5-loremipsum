/**
 * @module loremipsum/loremipsum
 */

import { Plugin, type PluginDependencies } from 'ckeditor5/src/core';
import { Widget } from 'ckeditor5/src/widget';

import LoremIpsumUI from './loremipsumui';

export default class LoremIpsum extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires(): PluginDependencies {
		return [ LoremIpsumUI, Widget ];
	}

	/**
	 * @inheritDoc
	 */
	public static get pluginName(): 'LoremIpsum' {
		return 'LoremIpsum';
	}
}
