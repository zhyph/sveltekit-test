import { writable } from 'svelte/store';

export interface User {
	id: string;
	username: string;
	isAuth: boolean;
}

const UserStore = writable<User>({
	id: '',
	username: '',
	isAuth: false
});

export default {
	store: UserStore,
	login: (user: User) => {
		UserStore.set(user);
	}
};
