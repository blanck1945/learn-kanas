<script lang="ts">
	export let click: () => void;
</script>

<button
	on:click={click}
	class="bg-[#204988] text-white px-4 rounded-md py-1 transition-all hover:bg-[#1851a7]"
	><slot /></button
>
