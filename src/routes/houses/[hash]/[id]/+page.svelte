<script>
    import { fade, slide } from 'svelte/transition';
    import { api } from '$lib/api.js';

    // tools
    import Charsequencer from '/src/tools/Charsequencer.svelte';
    import TypeTemplate from '/src/tools/TypeTemplate.svelte';
    import Wordsequencer from '/src/tools/Wordsequencer.svelte';
    import Wordfinder from '/src/tools/Wordfinder.svelte';

    const tools = { Charsequencer, Wordsequencer, Wordfinder };

    export let form;
    export let data;
   
    const house = data.house;
    let riddle = data.riddle;
    let template_on = false;
    let tool;
   
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

    async function getTool(toolname) {
        if (toolname === 'template') {
            template_on = true;
        } else {
            toolname = toolname.charAt(0).toUpperCase() + toolname.slice(1);
            // won't work in build !?
            //tool = (await import('../../../../tools/'+ toolname +'.svelte')).default;
            tool = tools[toolname];
            if ( ! tool) return;
        }
        clue_open = false;
    }


    function getTemplatePars(content) {
        return JSON.parse(content);
    }
    
    let clue_open = false;

</script>


<div class="esc_center" style="{ createStyles() }">

    {#if tool}
        <div  class="toolcontainer" transition:slide>
            <svelte:component this={tool} on:dismiss={ () => tool = null }>
                <p>some slotted content</p>
            </svelte:component>
        </div>
    {/if}

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
                                {#if clue.tool }
                                    <!-- svelte-ignore a11y-invalid-attribute -->
                                    <a href="#" on:click|preventDefault={ getTool(clue.tool) } class="tool">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                      </svg>
                                    </a>
                                {/if}
                            </div>
                        {:else}
                            {#if clue.active}
                                <button on:click={ () => api.getClue(house.hash,riddle.id,resetClues) } class="small">Anzeigen</button>
                                Kosten: <span class="round inactive">{ clue.cost }</span>
                            {:else}
                                <button class="small inactive">?</button>
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

        <div id="content" transition:fade>
            {#if riddle.type === 'text'}
                <div class="text_content">
                    { @html riddle.content }
                </div>
            {/if}
            {#if riddle.type === 'template'}
                <TypeTemplate params={ getTemplatePars(riddle.content) } house={ data.house.hash } on={ template_on } />
            {/if}
        </div>
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
        z-index:10;
    }
    .esc_center {
        background-size: cover;
        h2 {
            background-color:rgba(0,0,0,.5);
            max-width:500px;
            padding:10px;
            border-radius: 0 20px;
            margin: auto;
        }
    }

    .content {
        width:500px;
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
    .tool {
        display:block;
        width:30px;
        margin:10px auto 0;
        color:white;
        &:hover {
            color:#CC0000;
        }
    }
    .toolcontainer {
        background-color:rgba(255,255,255,0.9);
        position:relative;
        max-width:800px;
        margin: 0 auto;
        padding:20px;
        color:black;
        border-radius: 0 0 0 10px;
    }

</style>

