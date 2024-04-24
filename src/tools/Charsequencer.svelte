<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
let sequence_parameter;
let original_content = '';
const special_chars = ['.',',',';',':','!','?','/','-',"'",'"',' ','(',')'];
const class_highlight_start = "<span class=\"highlight\">";
const class_highlight_end = "</span>";
const re_start = new RegExp(class_highlight_start);
const re_end = new RegExp(class_highlight_end);


function sequence() {
    if (! sequence_parameter) return;
    const seq = sequence_parameter.split(',').map((s) => s.trim());
    let content = parseContent();
    content = splitCharacters(content);
    if (seq.length === 1) {
        content = findCharacterSequence(content,seq[0]);
    } 
    else {
        let i = 0;
        while (i < seq.length) {
            content = findCharacterSequence(content,seq[i++],true);
        }
    }
    setNewContent(content);
}


function splitCharacters(content) {
    let new_content = [];
    for (let i = 0; i < content.length; i++) {
        let r = content[i];
        // html-tag
        if (r.trim()[0] === '<') {
            new_content.push(r);
            continue;
        }
        // special-char or empty after trim
        if (special_chars.indexOf(r.trim()) !== -1 || r.trim() === '') {
            new_content.push(r);
            continue;
        }
        // regular word
        let w = r.match(/.?/g);
        w.forEach( c => {
            if (c.trim() !== '') {
                new_content.push(c);
            }
        });
    };
    return new_content;
}


function findCharacterSequence(content,sequence,onlyfirst = false) {
    let counter = 1;
    for (let i = 0; i < content.length; i++) {
        // skip already processed in further passes
        if (re_start.exec(content[i])) {
            counter++;
            continue;
        }
        // skip html
        if (content[i][0].trim() === '<') {
            continue;
        }
        // skip special chars
        if (content[i].trim() === '' || special_chars.indexOf(content[i].trim()) !== -1) {
            continue;
        }
        // regular match
        if (counter % sequence === 0) {
            content[i] = class_highlight_start+content[i]+class_highlight_end;
            // only first
            if (onlyfirst) {
                break;
            }
        }
        counter++;
    }
    return content;
}

function parseContent() {
    if ( ! original_content) {
        original_content = document.getElementById('content').innerHTML;
    }
    let content = original_content.match(/(<\/?[^>]*>)|([^\s\.,;:\!\?\/<>]+)|([\.,;:\!\?\/\-\s]+)/g);
    return content;
}

function setNewContent(content) {
    let new_content = '';
    for (let i = 0; i < content.length; i++) {
       new_content += content[i];
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
    <a href="#" class="closer" on:click={ dismiss }><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg></a>
    <h3>Buchstabenzähler</h3>
    <label>
        Buchstabenabstand
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

