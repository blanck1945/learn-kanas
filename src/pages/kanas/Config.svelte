<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Exam from './Exam.svelte';
	import {
		AlphabetConstants,
		AlphabetsValues,
		kanasStore,
		type AlphabetInterface,
		type AlphabetValue,
		type TypeOfLearning
	} from '../../store/kanas.store';

	export let typeOfLearning: TypeOfLearning = $kanasStore.typeOfLearning;
	export let alphabet: AlphabetInterface = $kanasStore.alphabet;
	export let rows: number = $kanasStore.rows;
	export let exam: any;

	const dispatch = createEventDispatcher();

	const handleChange = (e: any) => {
		console.warn(e.target.value);
		console.warn(AlphabetsValues[e.target.value as AlphabetValue]);
		alphabet = AlphabetsValues[e.target.value as AlphabetValue];
	};

	const startExam = () => {
		kanasStore.setRows(rows);
		kanasStore.setAlphabet(alphabet);
		kanasStore.setTypeOfLearning(typeOfLearning);

		dispatch('start', { comp: Exam });
	};
</script>

<div class="bg-[#EA2A2A] text-white flex items-center pl-2 h-12 text-xl">
	<p>Configuracion del aprendizaje</p>
</div>
<div class="border border-[#204988] grid grid-cols-2 sm:flex">
	<div class="border-r border-[#204988] w-full sm:w-1/5">
		<p class="text-xl pl-2 py-1 w-full border-b font-bold border-[#204988] text-[#204988]">
			Alfabeto
		</p>
		<div class="pl-2 mt-1">
			<label for="alphabet">Que alfabeto quieres practicar?</label>
			<div class="flex flex-col mt-1 mb-2">
				<label>
					<input
						checked={alphabet.value === AlphabetConstants.nh}
						type="radio"
						on:change={handleChange}
						name="alphabet"
						value={AlphabetConstants.nh}
					/>
					Hiragana
				</label>
				<label>
					<input
						checked={alphabet.value === AlphabetConstants.h}
						type="radio"
						on:change={handleChange}
						name="alphabet"
						value={AlphabetConstants.h}
					/>
					Hiragana compuesto
				</label>
				<label>
					<input
						checked={alphabet.value === AlphabetConstants.k}
						type="radio"
						on:change={handleChange}
						name="alphabet"
						value={AlphabetConstants.k}
					/>
					Katakana
				</label>
				<label>
					<input disabled type="radio" on:change={handleChange} name="alphabet" value="kanji" />
					<span class="text-slate-300">Kanji</span>
				</label>
			</div>
		</div>
	</div>
	<div class="w-full border-[#204988] sm:w-1/4 sm:border-r">
		<p class="text-xl pl-2 py-1 w-full border-b font-bold border-[#204988] text-[#204988]">
			Configuración
		</p>
		<div class="pl-2 mt-1">
			<p>Cantidad de filas</p>
			<input
				type="number"
				min="1"
				max="20"
				class="border mt-1 rounded-md py-1 pl-1 w-3/4 sm:w-3/4"
				name="rows"
				bind:value={rows}
			/>
		</div>
	</div>
	<div class="border-r border-[#204988]">
		<p class="text-xl pl-2 py-1 w-full border-b font-bold border-[#204988] text-[#204988]">Tipo</p>
		<div class="pl-2 mt-1">
			<p class="pr-2">Que tipo de aprendizaje quieres practicar?</p>
			<div class="flex flex-col mt-1 mb-2">
				<label>
					<input
						checked
						type="radio"
						bind:group={typeOfLearning}
						name="typeOfLearning"
						value="escribir"
					/>
					Escribir
				</label>
				<label>
					<input
						disabled
						type="radio"
						bind:group={typeOfLearning}
						name="typeOfLearning"
						value="simbolo"
					/>
					<span class="text-slate-300">Simbolo</span>
				</label>
			</div>
		</div>
	</div>
	<div class=" border-[#204988] w-full flex flex-1 flex-col sm:w-1/4">
		<p class="text-xl pl-2 py-1 w-full border-b font-bold border-[#204988] text-[#204988]">
			Información
		</p>
		<div class="pl-2 mt-1">
			<p>Alfabeto: {alphabet.label}</p>
			<p>Cantidad de filas: {rows}</p>
			<p>Tipo de aprendizaje: {typeOfLearning}</p>
		</div>
	</div>
</div>
<div class="bg-[#EA2A2A] flex items-center justify-center h-12">
	<button
		on:click={startExam}
		class="bg-[#204988] text-white px-4 rounded-md py-1 transition-all hover:bg-[#1851a7]"
		>Empezar</button
	>
</div>
