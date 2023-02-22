<script lang="ts">
	import { alphabets } from '../../data';
	import Config from '../../pages/kanas/Config.svelte';
	import { kanasStore } from '../../store/kanas.store';

	let exam: any = [];
	let stage = Config;

	const handlePageComponent = (comp: any) => (stage = comp.detail.comp);

	const handleExamStart = (e: any) => {
		const amountOfRows = $kanasStore.rows * 5;

		//exam = [];
		const alphabet = alphabets[$kanasStore.alphabet.value];

		//alphabet.sort((a, b) => b.id - a.id);

		// Ordenamos el array de manera aleatoria
		alphabet.sort(() => Math.random() - 0.5);

		// Devolvemos los primeros numElements elementos del array
		exam = JSON.parse(JSON.stringify(alphabet.slice(0, amountOfRows)));

		handlePageComponent(e);
	};
</script>

<div class="px-2 my-4 sm:px-8">
	<svelte:component
		this={stage}
		on:start={handleExamStart}
		on:switch={handlePageComponent}
		{exam}
	/>
</div>
