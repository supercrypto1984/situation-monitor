<script lang="ts">
	import '../app.css';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="min-h-screen bg-bg text-text-primary">
    <nav class="bg-gray-800 text-white p-4">
        <a href="/" class="mr-4">English</a>
        <a href="/zh">中文</a>
    </nav>
	{@render children()}
</div>
