<script>
	export let segment;
</script>


<nav class="max-w-screen-2xl mx-auto mb-12">
	<ul class="flex p-4 justify-between">
		<li><a class='hover:underline {segment === undefined ? "" : ""}' href='.'>Srba Projekt</a></li>
		<div class="flex">
		<li><a class='hover:underline {segment === "about" ? "underline" : ""}' href='about'>O nás</a></li>
		<li><a rel=prefetch class='ml-4 hover:underline {segment === "projects" ? "underline" : ""}' href='projects'>Projekty</a></li>
		</div>
	</ul>
</nav>