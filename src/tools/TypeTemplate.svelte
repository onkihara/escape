<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export let params;
    export let house;
    export let on = false;

    $: on, init();

    const background_src = '/assets/'+house+'/'+params.background.url;
    let template_src = '';
    let template_style = '';
    let rotation_degrees = 0;
    if (params.template) {
        template_src = '/assets/'+house+'/'+params.template.url;
        template_style = params.template.style + 'background-image:url('+template_src+');background-size:contain';
        rotation_degrees = parseInt(params.template.rotation) || 0;
    }

    function init() {
        if ( ! on) return;
        setTimeout(() => {
            let bg = document.getElementById('background');
            let tp = document.getElementById('template');
            let ratio = bg.offsetWidth / params.background.width;
            tp.style.width = (params.template.width * ratio) + 'px';
            tp.style.height = (params.template.height * ratio) + 'px'; 
            tp.style.transform = 'rotate('+rotation_degrees+'deg)';                    
        },500);
    }

    onMount(() => {
        if (on) {
            init();
        }
    });

    function dragStart(event) {
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragStop);
        event.target.style.left = event.target.offsetLeft + 'px';
        event.target.style.top = event.target.offsetTop + 'px';   
    };
    
    function drag(event) {
        let top = parseInt(event.target.style.top);
        let left = parseInt(event.target.style.left);
        event.target.style.left = (left + event.movementX) + 'px';
        event.target.style.top = (top + event.movementY) + 'px';
    }

    // drop the event.target, remove unneeded handlers
    function dragStop() {
        document.removeEventListener('mousemove', drag);
    };

    function rotate() {
        rotation_degrees = rotation_degrees + 90;
        let tp = document.getElementById('template');
        tp.style.transform = 'rotate('+rotation_degrees+'deg)';
    }
   

</script>


<div>
 
    <div class="template_content" style="">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img id="background" class="background_img" src="{ background_src }" />
        {#if on}
            <!-- svelte-ignore a11y-missing-attribute -->
            <div id="template" style="{ template_style }" class="template" on:mousedown={ dragStart } transition:fade>
                <a href="#" on:click|preventDefault={ rotate } class="rotate"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" /></svg></a>
            </div>
        {/if}
    </div>

</div>


<style lang="scss">

    .template_content {
        position: relative;
        .background_img {
            width:100%;
            height:auto;
        }
        .template {
            top:30px;
            left:30px;
            position:absolute;
            transition-duration: 1s;
            transition-property: transform;
        }
        .rotate {
            position:absolute;
            color:black;
            width:20px;
            height:20px;
            top:5px;
            right:5px;
        }
    }

</style>