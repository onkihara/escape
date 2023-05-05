<script>
    export let form;
</script>

<div class="esc_center">

    <h2>Escape Setup</h2>
    
    <form method="POST">
        <label>
            Passphrase for setup
            <input name="passphrase" autocomplete="off" value="{form?.passphrase || ''}" autofocus />
        </label>
        <label>
            Root Access Key
            <input name="root_key" value="{form?.root_key || ''}" />
        </label>
        <button>Send</button>
    </form>

    {#if form?.incorrect}
        <p class="error">Incorrect Parameters: {form?.incorrect_parameter}!</p>
    {/if}

</div>


