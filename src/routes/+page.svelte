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
	import { weirdStuff } from '$lib/utils';

	interface DataInterface {
		mydata: { text: ''; error: boolean; message: string };
		newdata: { text: ''; error: boolean; message: string };
	}

	let data: DataInterface = {
		mydata: { text: '', error: false, message: '' },
		newdata: {
			text: '',
			error: false,
			message: ''
		}
	};

	const errors = {
		mydata: { error: true, message: 'Hello World' },
		newdata: { error: true, message: 'Hello Worl2d' }
	};

	const submit = () => {
		data = weirdStuff<DataInterface>(errors, data);
	};
</script>

<pre>{JSON.stringify(data)}</pre>

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

<form on:submit|preventDefault={submit}>
	<button type="submit">VAI</button>
</form>
