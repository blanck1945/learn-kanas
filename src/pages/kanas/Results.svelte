<script>
	import { createEventDispatcher } from 'svelte';
	import BlueButton from '../../components/BlueButton.svelte';
	import { kanasStore } from '../../store/kanas.store';
	import Config from './Config.svelte';
	import Exam from './Exam.svelte';

	const dispatch = createEventDispatcher();

	const returnToConfig = () => dispatch('switch', { comp: Config });
	const reStartExam = () => dispatch('start', { comp: Exam });
</script>

<div>
	<div class="bg-[#EA2A2A] h-12 w-full flex items-center justify-between px-2">
		<p class="text-white">Resultados</p>
		<div class="flex gap-4 items-center justify-between">
			<BlueButton click={reStartExam}>Repetir</BlueButton>
			<BlueButton click={returnToConfig}>Configuracion</BlueButton>
		</div>
	</div>
	<div class="grid grid-cols-4 border border-[#204988]">
		<p
			class="ml-2 font-bold border-r border-[#204988] text-[#204988] h-full pb-0 text-sm sm:text-xl  sm:pb-2"
		>
			Kana
		</p>
		<p
			class="ml-2 font-bold border-r border-[#204988] text-[#204988] h-full pb-0 text-sm sm:text-xl sm:pb-2"
		>
			Romaji
		</p>
		<p
			class="ml-2 font-bold border-r border-[#204988] text-[#204988] h-full pb-0 text-sm sm:text-xl sm:pb-2"
		>
			Respuesta
		</p>
		<p
			class="ml-2 font-bold border-r border-[#204988] text-[#204988] h-full pb-0 text-sm sm:text-xl sm:pb-2"
		>
			Resultado
		</p>
	</div>
	{#each $kanasStore.results as row}
		<div class="border border-[#EA2A2A] border-t-0 grid grid-cols-4 items-center">
			<p class="border-r border-[#EA2A2A]  h-full flex items-center ml-2">{row.kana}</p>
			<p class="border-r border-[#EA2A2A]  h-full flex items-center ml-2">{row.romaji}</p>
			<p class="border-r border-[#EA2A2A]  h-full flex items-center ml-2">{row.value}</p>
			{#if row.result}
				<span class="bg-green-600 text-white p-1 text-sm sm:p-2 sm:text-xl">Correcto</span>
			{:else}
				<span class="bg-red-600 text-white p-1 text-sm sm:p-2 sm:text-xl">Incorrecto</span>
			{/if}
		</div>
	{/each}
</div>
