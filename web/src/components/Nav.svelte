<script>
	export let segment;
</script>


<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Srba Projekt</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>O nás</a></li>
		<li><a rel=prefetch class='{segment === "projects" ? "selected" : ""}' href='projects'>Projekty</a></li>
	</ul>
</nav>