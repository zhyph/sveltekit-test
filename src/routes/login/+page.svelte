<script lang="ts">
	import { goto } from '$app/navigation';
	import UserStore from '$lib/store/UserStore';

	interface DataType {
		username: string;
		password: string;
	}

	const data: DataType = {
		username: '',
		password: ''
	};

	const login = async () => {
		const { username } = data;
		UserStore.login({ username, id: '1', isAuth: true });
		await goto('/');
	};
</script>

<form on:submit|preventDefault={login}>
	<input type="text" id="username" bind:value={data.username} />
	<input type="text" id="password" bind:value={data.password} />
	<button type="submit"> SUBMIT THAT BITCH </button>
</form>
