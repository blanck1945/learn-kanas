import { noComposeHiraganas, hiraganas } from './hiragana';
import { katakanas } from './katakana';
import { AlphabetConstants } from '../store/kanas.store';

interface KanasInterface {
	id: number;
	romaji: string;
	kana: string;
	value: string;
}

interface Alphabets {
	[AlphabetConstants.h]: KanasInterface[];
	[AlphabetConstants.k]: KanasInterface[];
	[AlphabetConstants.nh]: KanasInterface[];
	// [AlphabetConstants.nk]?: KanasInterface[];
}

export const alphabets: Alphabets = {
	hiraganas,
	noComposeHiraganas,
	katakanas
};
