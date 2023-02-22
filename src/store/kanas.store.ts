import { writable } from 'svelte/store';

export type AlphabetLabel = 'Hiraganas compuestos' | 'Katakanas' | 'Hiraganas simples'; //| 'No compose Katakanas';
export type AlphabetValue = 'hiraganas' | 'katakanas' | 'noComposeHiraganas'; //| 'noComposeKatakanas';
export type TypeOfLearning = 'escribir' | 'draw';

export interface AlphabetInterface {
	label: AlphabetLabel;
	value: AlphabetValue;
}

export const AlphabetConstants = {
	h: 'hiraganas',
	k: 'katakanas',
	nh: 'noComposeHiraganas'
	// nk: 'noComposeKatakanas'
} as const;

export const TypeOfLearningConstants = {
	w: 'escribir',
	d: 'draw'
} as const;

export const AlphabetsValues: any = {
	[AlphabetConstants.nh]: {
		label: 'Hiraganas simples',
		value: AlphabetConstants.nh
	},
	[AlphabetConstants.h]: {
		label: 'Hiraganas compuestos',
		value: AlphabetConstants.h
	},
	[AlphabetConstants.k]: {
		label: 'Katakanas',
		value: AlphabetConstants.k
	}
};

interface KanasStore {
	rows: number;
	alphabet: AlphabetInterface;
	typeOfLearning: TypeOfLearning;
	results: any;
}

const kanasStoreInit = () => {
	const { subscribe, update } = writable<KanasStore>({
		rows: 5,
		alphabet: {
			label: 'Hiraganas simples',
			value: AlphabetConstants.nh
		},
		typeOfLearning: TypeOfLearningConstants.w,
		results: []
	});

	return {
		subscribe,
		setRows: (rows: number) => update((n: any) => ({ ...n, rows })),
		setAlphabet: (alphabet: AlphabetInterface) => update((n: any) => ({ ...n, alphabet })),
		setTypeOfLearning: (typeOfLearning: TypeOfLearning) =>
			update((n: any) => ({ ...n, typeOfLearning })),
		setResults: (results: any) => update((n: any) => ({ ...n, results }))
	};
};

export const kanasStore = kanasStoreInit();
