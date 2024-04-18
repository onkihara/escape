<script>
	import { goto } from "$app/navigation";
    export let form;
    export let data;
</script>

<div class="esc_center">

	<div class="login">

	    <h2>Code Jugglers Entry</h2>

	    <form method="POST">
	        <label>
	            <input type="password" name="access_key" autocomplete="off" value="{form?.access_key || ''}" autofocus />
	        </label>
	    </form>

	</div>

    {#if form?.incorrect}
        <p class="error">{form?.incorrect_parameter}!</p>
    {/if}

</div>

<style lang="scss">

	.esc_center {
		background-image: url('../assets/login.png');
		justify-content: center;
		align-items: center;
		.login {
			color:black;
			padding:50px;
			max-width:800px;
			background-color:rgba(255,255,255,0.8);
			border-radius: 0 30px;
			input {
				background: black;
			}
		}
	}

</style>

