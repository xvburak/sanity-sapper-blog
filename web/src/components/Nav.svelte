<script>
	export let segment;
</script>


<nav class="mx-auto mb-12 text-2xl">
	<ul class="flex p-4">
		<li><a class='{segment === undefined ? "" : ""}' href='.'>Srba Projekt</a>,&nbsp;</li>
		<li><a class='{segment === "about" ? "underline" : ""}' href='about'>O nás</a>,&nbsp;</li>
		<li><a rel=prefetch class='{segment === "projects" ? "underline" : ""}' href='projects'>Projekty</a></li>
	</ul>
</nav>