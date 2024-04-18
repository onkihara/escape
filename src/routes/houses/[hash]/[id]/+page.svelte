<script>
    import { fade, slide } from 'svelte/transition';
    import { api } from '$lib/api.js';
   
    export let form;
    export let data;
   
    const house = data.house;
    let riddle = data.riddle;

    function createStyles() {
        const styles = riddle.styles;
        let res = '';
        for (const style in styles) {
            res += style+':';
            if (style === 'background-image') {
                res += 'url(/assets/'+data.house.hash+'/'+styles[style]+')';
            } else {
                res += styles[style];
            }
            res += ';';
        }
        return res;
    } 

    function resetClues(clues) {
        riddle.clues = clues;
        riddle = riddle;
    }

    let clue_open = false;

</script>


<div class="esc_center" style="{ createStyles() }">

    <div class="backtomenu">
        <a href="/houses/{house.hash}" title="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
        </a>
    </div>

    {#if riddle.clues.length > 0 }

        <div class="cluesmenu">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#" title="Hinweise" on:click|preventDefault="{ () => clue_open = !clue_open }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>              
            </a>
        </div>

        {#if clue_open }
            <div class="cluemenucontent" transition:slide>
                {#each riddle.clues as clue }
                    <div class="clue" transition:fade>
                        {#if clue.open}
                            <div class="cluetext">
                                <div>{ clue.text }</div>
                                <div class="cost">Kosten: { clue.cost }</div>
                            </div>
                        {:else}
                            {#if clue.active}
                                <button on:click={ () => api.getClue(house.hash,riddle.id,resetClues) } class="small">Anzeigen</button>
                                Kosten: <span class="round inactive">{ clue.cost }</span>
                            {:else}
                                <button class="small inactive">Noch nicht verfügbar</button>
                                Kosten: <span class="round inactive">{clue.cost}</span>
                            {/if}
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}

    {/if}

    {#if riddle.name}
        <h2>{ riddle.name }</h2>
    {/if}

    <div class="content">

        { @html riddle.content }

        {#if riddle.task}
            <h2>{ riddle.task }</h2>
        {/if}

        {#if riddle.input}
            <form method="POST">
                {#if riddle.input.type == 'text'}
                <label>
                    { riddle.input.label || ''}
                    <input name="solution" autocomplete="off" value="" />
                </label>
                {/if}
                
                {#if riddle.input.type == 'textarea'}
                <label>
                    { riddle.input.label || ''}
                    <textarea name="solution" autocomplete="off" value="{form?.solution ?? ''}" />
                </label>
                {/if}
                {#if form?.match === false}
                    <p class="error">Gut gemeint, aber leider falsch ...</p>
                {/if}
                <button>Check</button>
            </form>
        {/if}
    
    </div>

</div>



<style lang="scss">
    .backtomenu {
        width:30px;
        height:30px;
        position:absolute;
        top:20px;
        left:20px;
        padding:5px;
        background-color:rgba(255,255,255,.85);
        border-radius: 0 10px;
        &:hover {
            background-color:white;
        }
    }
    .cluesmenu {
        width:30px;
        height:30px;
        position:absolute;
        top:20px;
        left:80px;
        padding:5px;
        background-color:#CC0000;
        border-radius: 0 10px;
        &:hover {
            background-color:black;
        }
    }
    .cluemenucontent {
        position:absolute;
        text-align:left;
        top:60px;
        left:80px;
        width:200px;
        padding:20px;
        color:black;
        background-color:rgba(255,255,255,0.9);
        border-radius: 0 20px;
    }
    .esc_center {
        background-size: cover;
    }
    .content {
        max-width:500px;
        margin:auto;
        padding: 20px;
        background:rgba(0,0,0,.5);
        border-radius: 0 30px;
    }
    .small {
        height: auto;
        padding:8px;
        border-radius:5px;
        margin: 5px 0;
        &.inactive {
            background-color:grey;
            cursor:initial;
        }
    }
    .round {
        float:right;
        display:flex;
        align-items:center;
        justify-content: center;
        width:28px;
        height:28px;
        color:white;
        background-color:#CC0000;
        font-size:.8em;
        border-radius:14px;
        &.inactive {
            background-color:grey;
        }
    }
    .clue {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .cluetext {
        margin: 10px 0;
        width:100%;
        padding:10px;
        color:white;
        background-color:grey;
        .cost {
            margin-top:10px;
        }
    }
</style>

