<script>

	class MyMenu extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.innerHTML = `
			<style>
				/* CSS-styling til webkomponenten */
				</style>
				<ul>
					<li><a href="#">Item 1</a></li>
					<li><a href="#">Item 2</a></li>
					<li><a href="#">Item 3</a></li>
					</ul>
					`;
				}
			}
			
			customElements.define('my-menu', MyMenu);
</script>