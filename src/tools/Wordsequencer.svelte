<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
let sequence_parameter;
let original_content = '';
const special_chars = ['.',',',';',':','!','?','/','-'];
const class_highlight_start = '<span class="highlight">';
const class_highlight_end = '</span>';

function sequence() {
    const seq = sequence_parameter.split(',').map((s) => s.trim());
    let content = parseContent(); 
    if (seq.length === 1) {
        content = findSequence(content,seq[0]);
    } else {
        let i = 0;
        while (i < seq.length) {
            content = findSequence(content,seq[i++],true);
        }
    }
    setNewContent(content);
}

function findSequence(content,position,onlyfirst = false) {
    let counter = 1;
    const re = new RegExp(class_highlight_start);
    for (let i = 0; i < content.length; i++) {
        if (re.exec(content[i].trim())) {
            counter++;
            continue;
        }
        if (content[i].trim()[0] === '<' || special_chars.indexOf(content[i].trim()) !== -1) {
            continue;
        }
        if (counter % position === 0) {
            content[i] = class_highlight_start+content[i]+class_highlight_end;
            if (onlyfirst) break;
        }
        counter++;
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
    <h3>Wörterzähler</h3>
    <label>
        Wörterabstand
        <input type="text" bind:value={ sequence_parameter } />
    </label>
    <button on:click={ sequence }>Go!</button>
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

