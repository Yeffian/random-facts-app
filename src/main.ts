import App from './App.svelte';

const app: App = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;