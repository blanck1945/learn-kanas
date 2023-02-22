<script lang="ts">
	export let key: string;

	const data: any = {
		cities: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'],
		kanji: ['東京都', '京都市', '大阪市', '名古屋市']
	};
</script>

<div class="w-full h-20 bg-[#EA2A2A] flex items-center justify-between px-8">
	{#each data[key] as item}
		<p class="text-white text-lg sm:text-2xl">{item}</p>
	{/each}
</div>
