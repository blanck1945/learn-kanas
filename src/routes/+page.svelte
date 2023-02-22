<script lang="ts">
	import ColorWords from '../components/ColorWords.svelte';
	import Flag from '../components/Flag.svelte';
	import Section from '../components/Section.svelte';
	import Separator from '../components/Separator.svelte';
</script>

<Section>
	<ColorWords words={['New Culture', 'New Vision', 'New Language']} />
	<Flag />
</Section>
<Separator key="cities" />
<Section>
	<div class="w-full hidden place-content-center gap-3 sm:w-1/2 sm:grid">
		<!-- <div class="w-1/2 hidden bg-red-600 justify-center items-center sm:block"> -->
		<p class="text-6xl">ひらがな</p>
		<p class="text-6xl">カタカナ</p>
		<p class="text-6xl">漢字</p>
	</div>
	<ColorWords words={['Hiragana', 'Katakana', 'Kanji']} />
</Section>
<Separator key="kanji" />
<Section>
	<div />
	<ColorWords words={['At Your Pace', 'Mobile - Website', 'App Free']} />
</Section>
<Separator key="cities" />
<footer class="h-64">
	<div class="h-full bg-[#344359] grid grid-cols-3 px-8 py-4">
		<div>
			<p class="text-white font-bold">Link de interes</p>
		</div>
		<div>
			<p class="text-white font-bold">App de aprendizaje</p>
		</div>
	</div>
	<div class="flex items-center justify-center w-full h-12 text-[#DADADA] font-bold bg-[#172335]">
		<p>Copyright Learn Kanas - Okubo 2021</p>
	</div>
</footer>
