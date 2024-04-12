<script>
    export let form;
</script>

<div class="esc_center" style="background-color:black;">

    <h2>Create Escape House</h2>
    
    <form method="POST">
        <label>
            Name of the house
            <input name="name" autocomplete="off" value="{form?.name || ''}" autofocus />
        </label>
        <label>
            Number of partecipants
            <input name="number" value="{form?.number || ''}" />
        </label>
        <label>
            Slug for house
            <input name="hash" value="{form?.hash || ''}" />
        </label>
        <button>Send</button>
    </form>

    {#if form?.incorrect}
        <p class="error">Incorrect Parameters: {@html form?.incorrect_parameter}</p>
    {/if}

    {#if form?.success === true}
        <h3>Access Keys for {form.name}</h3>
        <p>
            {#each form.keys as key}
                { key }<br>
            {/each}
        </p>
    {/if}
</div>

