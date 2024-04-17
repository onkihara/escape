<script>
   
    export let form;
    export let data;
   
    const house = data.house;
    const riddle = data.riddle;

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

</script>


<div class="esc_center" style="{ createStyles() }">

    <div class="backtomenu">
        <a href="/houses/{house.hash}" title="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
        </a>
    </div>

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
                    <p class="error">Nice try - but wrong ...</p>
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
        color:black;
        background-color:rgba(255,255,255,.85);
        border-radius: 0 10px;
        &:hover {
            background-color:white;
        }
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
</style>

