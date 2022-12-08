import { goto } from '$app/navigation';
import UserStore from '$lib/store/UserStore';
import { get } from 'svelte/store';

export async function load() {
	const { store } = UserStore;

	if (get(store).isAuth) {
		await goto('/');
		alert('You are already logged in!');
	}
}

export const ssr = false;
