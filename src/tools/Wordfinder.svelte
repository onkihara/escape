<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
let search_parameter;
let original_content = '';
const special_chars = ['.',',',';',':','!','?','/','-'];
const escape_chars = ['.','$','^','!','?','/','-'];
const class_highlight_start = '<span class="highlight">';
const class_highlight_end = '</span>';

function find() {
    let content = parseContent(); 
    let f = search_parameter.trim();
    escape_chars.forEach((c) => {
        let re_c = new RegExp('\\'+c,'g');
        f = f.replace(re_c,'\\'+c);
    });
    f = f.replace(/\*/g,'.*');
    console.log('^'+f+'$')
    let re_find = new RegExp('^'+f+'$','i');
    content = findWord(content,re_find);
    setNewContent(content);
}

function findWord(content,finder,onlyfirst = false) {
    const re = new RegExp(class_highlight_start);
    for (let i = 0; i < content.length; i++) {
        if (re.exec(content[i].trim())) {
            continue;
        }
        if (content[i].trim()[0] === '<' || special_chars.indexOf(content[i].trim()) !== -1) {
            continue;
        }
        
        if (finder.exec(content[i])) {
            content[i] = class_highlight_start+content[i]+class_highlight_end;
            if (onlyfirst) break;
        }
    }
    return content;
}

function parseContent() {
    if ( ! original_content) {
        original_content = document.getElementById('content').innerHTML;
    }
    let content = original_content.match(/(<\/?[^>]*>)|([^\s\.,;:\!\?\/<>]+)|([\.,;:\!\?\/\-]+)/g);
    return content;
}

function setNewContent(content) {
    let new_content = '';
    for (let i = 0; i < content.length; i++) {
        if (content[i].match(/^<\//) || special_chars.indexOf(content[i].trim()) !== -1) {
            new_content += content[i];
        } else {
            new_content += ' '+content[i];
        }
    }
    document.getElementById('content').innerHTML = new_content;
}

function dismiss() {
    dispatch('dismiss');
    document.getElementById('content').innerHTML = original_content;
}

</script>

<div class="sequencer">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="closer"  on:click={ dismiss }><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg></a>
    <h3>Wörterfinder</h3>
    <label>
        * als Platzhalter
        <input type="text" bind:value={ search_parameter } />
    </label>
    <button on:click={ find }>Go!</button>
</div>


<style lang="scss">

    .sequencer {
        h3 {
            margin:0;
        }
        label {
            input {
                height:15px;
                font-size:.9em;
                margin:5px;
            }
        }
    }

</style>

