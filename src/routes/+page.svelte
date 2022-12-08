<script lang="ts">
	import UserStore from '$lib/store/UserStore';

	import { getPages } from '$lib/pages';

	const { url } = import.meta;
	const modules = import.meta.glob('./**/*.svelte'); // Include subfolder
	// const modules = import.meta.glob('./**.svelte'); // Current folder only

	const pages = getPages(url, modules);
	console.log(pages);

	const { store } = UserStore;

	const isAuth = $store.isAuth;
</script>

<h1>
	User is {isAuth}
</h1>

<ul>
	{#each pages as page}
		<li>
			<a href={page}>{page}</a>
		</li>
	{/each}
</ul>
