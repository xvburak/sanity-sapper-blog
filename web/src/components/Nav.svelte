<script>
	export let segment;
</script>


<nav class="mb-12 text-2xl">
	<ul class="flex p-4">
		<li><a class='{segment === undefined ? "" : ""}' href='.'>Srba Projekt</a>,&nbsp;</li>
		<li><a class='{segment === "about" ? "" : ""}' href='about'>O nás</a>,&nbsp;</li>
		<li><a rel=prefetch class='{segment === "projects" ? "" : ""}' href='projects'>Projekty</a></li>
	</ul>
</nav>
