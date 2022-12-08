import { goto } from '$app/navigation';
import UserStore from '$lib/store/UserStore';
import type { Load } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const load: Load = async (param) => {
	const { store } = UserStore;

	if (!get(store).isAuth && param.route.id !== '/login') {
		await goto('/login');
	}
};

export const ssr = false;
