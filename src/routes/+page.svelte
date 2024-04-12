<script>
	import login_bg from '$lib/assets/dsb-vault/login.png';
	import { goto } from "$app/navigation";
    export let form;
    export let data;
</script>

<div class="esc_center">

	<div class="esc_center" style="background-image:url({login_bg});">

	    <h2>Escape!</h2>

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

