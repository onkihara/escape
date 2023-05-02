<script>
    export let form;
    console.log(form)
</script>

<div class="esc_center">

    <h2>Escape Setup</h2>
    
    <form method="POST">
        <label>
            Passphrase for setup
            <input name="passphrase" autocomplete="off" value="{form?.passphrase || ''}" autofocus />
        </label>
        <label>
            Number of partecipants
            <input name="number" value="{form?.number || ''}" />
        </label>
        <label>
            Hash for escape event
            <input name="hash" value="{form?.hash || ''}" />
        </label>
        <button>Send</button>
    </form>

    {#if form?.incorrect}
        <p class="error">Incorrect Parameters: {form?.incorrect_parameter}!</p>
    {/if}

</div>

<style lang="scss">
    .esc_center {
        display:flex;
        flex-direction:column;
        text-align:center;
        align-self:center;
        label {
            display:block;
            margin-top:20px;
            input {
                display:block;
                width:200px;
                height:40px;
                margin:auto;
                text-align:center;
            }
        }
        button {
            width:80px;
            height:40px;
            margin-top:25px;
        }
    }
    .error {
        color: red;
    }
</style>
