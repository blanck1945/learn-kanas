<script lang="ts">
	export let words: string[] = [];

	const colors: any = {
		0: 'text-[#204988]',
		1: 'text-[#344359]',
		2: 'text-[#172335]'
	};
</script>

<div class="w-full grid place-content-center gap-3 sm:w-1/2">
	{#each words as word, index}
		<p class={`${colors[index]} text-3xl font-['Albert_Sans'] sm:text-6xl`}>
			{word}
		</p>
	{/each}
</div>
