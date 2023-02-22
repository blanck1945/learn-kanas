<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Config from './Config.svelte';
	import { kanasStore } from '../../store/kanas.store';
	import Results from './Results.svelte';
	export let exam: any;

	const dispatch = createEventDispatcher();

	const returnToConfig = () => dispatch('switch', { comp: Config });
	const getResults = () => {
		const result = exam.map((row: any) => {
			if (row.value === row.romaji) {
				return { ...row, result: true };
			} else {
				return { ...row, result: false };
			}
		});
		kanasStore.setResults(result);
		dispatch('switch', { comp: Results });
	};
</script>

<div>
	<div class="flex items-center justify-between border-b pb-2 border-[#204988]">
		<div class="flex flex-col gap-0 w-full  sm:w-3/4 sm:flex-row sm:gap-12">
			<p>Alfabeto: <span class="text-[#204988] font-bold">{$kanasStore.alphabet.label}</span></p>
			<p>Filas: <span class="text-[#204988] font-bold">{$kanasStore.rows}</span></p>
			<p>Tipo: <span class="text-[#204988] font-bold">{$kanasStore.typeOfLearning}</span></p>
		</div>
		<div class="hidden sm:block">
			<button on:click={returnToConfig} class="bg-[#EA2A2A] px-4 py-2 rounded-md text-white"
				>Atras</button
			>
		</div>
	</div>
	<div class="block mt-2 text-center sm:hidden">
		<button on:click={returnToConfig} class="bg-[#EA2A2A] px-4 py-2 rounded-md text-white"
			>Atras</button
		>
	</div>
	<div class="grid grid-cols-5 gap-8 mt-4">
		{#each exam as row}
			<div class="flex flex-col justify-between">
				<label for={`kana_${row.id}}`}>{row.kana}</label>
				<input bind:value={row.value} class="border pr-1" type="text" name={row.value} />
			</div>
		{/each}
	</div>
	<div class="bg-[#EA2A2A] flex items-center mt-8 justify-center h-12">
		<button
			on:click={getResults}
			class="bg-[#204988] text-white px-4 rounded-md py-1 transition-all hover:bg-[#1851a7]"
			>Entregar</button
		>
	</div>
</div>

<!-- on:click={startExam} -->
