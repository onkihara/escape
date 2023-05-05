<script>
    import { torch } from '$lib/torch.js';

    import room_0_bg from '$lib/assets/dsb-vault/room_0_bg.png';
    import room_1_bg from '$lib/assets/dsb-vault/room_1_bg.png';
    import room_2_bg from '$lib/assets/dsb-vault/room_2_bg.png';
    import room_3_bg from '$lib/assets/dsb-vault/room_3_bg.png';
    import room_4_bg from '$lib/assets/dsb-vault/room_4_bg.jpg';
    import room_5_bg from '$lib/assets/dsb-vault/room_5_bg.jpg';
    import qr_3 from '$lib/assets/dsb-vault/qr_3.png';

    export let form;
    export let data;

    const items = {
        room_0 : { description : false, input : false },
        room_1 : { switch : true },
        room_2 : { description : false, input : false },
        room_3 : { description : true, input : true, switch : true },
        room_4 : { description : false, input : false },
        room_5 : { description : false, input : false },
    };

    function checkInput(event, room, solution) {
       if (event.target.value === solution) {
            items[room].input = true;

       }
    }

    function checkClicked(event,target_id, room) {
        const target = document.getElementById(target_id);
        var rect = target.getBoundingClientRect();
        var pos = torch.getPosition(event);
        if (pos.y >= rect.top && pos.y <= rect.bottom && pos.x >= rect.left && pos.x <= rect.right) {
            items[room].switch = ! items[room].switch;
        }
    }

    function rand_position(x,y) {
        const positions = [['top', 'left'],['top', 'right'],['bottom','left'],['bottom','right']];
        let pos = positions[Math.floor(Math.random() * positions.length)];
        return pos[0] + ':' + y + 'px;' + pos[1] + ':' + x + 'px;';
    }

</script>


<!-- room 0 -->
{#if data.player.rank === 0}
    <div class="esc_center" style="background-image: url({room_0_bg})">
        <h1>Welcome to the {data.house.name}</h1>
        {#if ! items.room_0.description}
            <p class="esc_description" on:click={() => items.room_0.description = true}>
                Du bist in einem geheimen Forschungslabor im Schloss Rechtenthal gefangen genommen worden. Du wachst in einem kleinen Raum auf und bemerkt, dass er voll technischem Gerümpel ist.
            </p>
        {/if}
        {#if items.room_0.description}
            <p class="esc_description" on:click={() => items.room_0.input = true}>
                 Eine Stimme ertönt aus einem Lautsprecher und erklärt dir die Regeln: "Du hast nur kurze Zeit, um aus Schloss Rechtenthal zu entkommen, bevor das Gebäude sich am Ende der DSB-Tagung selbst zerstört!<br>Versuche Zugang zum internen Netzwerk zu erhalten!"
            </p>
        {/if}
        {#if items.room_0.input}
            <form method="POST">
                <label>
                    <input name="solution" autocomplete="off" value="" />
                </label>
                <input type="hidden" name="room" value="0" />
            </form>
        {/if}
    </div>
{/if}



<!-- room 1 -->
{#if data.player.rank === 1}
    <div class:esc_torch={items.room_1.switch} on:mousemove={torch.update} on:click={(e) => checkClicked(e,'switch_3','room_1')}></div>
    <div class="esc_center" style="background-image: url({room_1_bg});">
        {#if items.room_1.switch}
            <p class="esc_description" on:click={() => items.room_0.input = true}>
                 Du beschließt, sofort mit der Suche nach Hinweisen zu beginnen. Zuerst solltest du aber den Lichtschalter finden.
            </p>
        {/if}
        {#if ! items.room_1.switch}
            <p class="esc_description" on:click={() => items.room_0.input = true}>
                 Schon besser! Jetzt beantworte die <span style="font-weight:bold;">"endgültige Frage nach dem Leben, dem Universum und dem ganzen Rest"</span>!
            </p>
        {/if}
        {#if items.room_1.switch}
            <button id="switch_3" style={rand_position(5,5)} class="esc_light" on:click={() => {items.room_1.switch = false; items.room_1.description = false;}}>Licht</button>
        {/if}
        {#if ! items.description}
            <form method="POST">
                <label>
                    <input name="solution" autocomplete="off" value="" />
                </label>
                <input type="hidden" name="room" value="1" />
            </form>
        {/if}
    </div>
{/if}



<!-- room 2 -->
{#if data.player.rank === 2}
    <div class="esc_center" style="background-image: url({room_2_bg})">
        {#if ! items.room_2.description}
            <p class="esc_description" on:click={() => items.room_2.description = true}>
                Der dritte Raum ist voller Rätsel und Herausforderungen. Du musst deine Fähigkeiten als DSB nutzen, um das Sicherheitssystem zu hacken um den Code für den Ausgang zu finden.
            </p>
        {/if}
        {#if items.room_2.description && ! items.room_2.input}
            <p class="esc_description">
                01010000 01001110 01010010 01010010
                <input autocomplete="off" on:input={(e) => checkInput(e,'room_2','PNRR')} value="" />
            </p>
        {/if}
       {#if items.room_2.input}
            <p class="esc_description">
                Du hast den Schlüssel gefunden! Jetzt sollte er nur noch richtig herum verwendet werden!
            </p>
        {/if}
        {#if items.room_2.input}
            <form method="POST">
                <label>
                    <input name="solution" autocomplete="off" value="" />
                </label>
                <input type="hidden" name="room" value="2" />
            </form>
        {/if}
    </div>
{/if}




<!-- room 3 -->
{#if data.player.rank === 3}
    <div class:esc_torch={items.room_3.switch} on:mousemove={torch.update}  on:click={() => items.room_3.input.focus()}></div>
    <div class="esc_center" style="background-image: url({room_3_bg})">
        {#if items.room_3.description}
            <p class="esc_description">
                Schon wieder im Dunkeln - kein Licht diesmal - und kein Hinweis!
            </p>
        {/if}
        {#if items.room_3.input}
            <form method="POST">
                <label style="margin-bottom:280px;">
                    <input name="solution" autocomplete="off" value="" bind:this={ items.room_3.input} />
                </label>
                <input type="hidden" name="room" value="3" />
            </form>
        {/if}
        {#if items.room_3.description}
            <div class="esc_qr"  style={rand_position(2,2)}>
                <div style="background-image:url({qr_3});"></div>
            </div>
        {/if}
    </div>
{/if}



<!-- room 4 -->
{#if data.player.rank === 4}
    <div class="esc_center" style="background-image: url({room_4_bg})">
        {#if ! items.room_4.description}
            <p class="esc_description" on:click={() => items.room_4.description = true}>
                Du betrittst den letzten Raum und sieht die Rettung schon greifbar nahe. Aber es gibt ein Problem: Die Tür ist mit einem Zahlenschloss gesichert. Zum Glück gibt es einen Hinweis auf die Kombination ...
            </p>
        {/if}
        {#if items.room_4.description}
            <p class="esc_description" on:click={() => items.room_4.input = true}>
                Du wirst εὕρηκα in leetspeak nutzen müssen!
            </p>
        {/if}
        {#if items.room_4.description}
            <form method="POST">
                <label>
                    <input name="solution" autocomplete="off" value="" />
                </label>
                <input type="hidden" name="room" value="4" />
            </form>
        {/if}
    </div>
{/if}




<!-- room 5 -->
{#if data.player.rank === 5}
    <div class="esc_center" style="background-image: url({room_5_bg})">
        <p class="esc_description">
            Du rennst aus dem Raum und erreichst rechtzeitig die Ausgangstür, bevor das Labor explodiert. Du entkommst erfolgreich und findest dich schließlich in einem sonnigen Innenhof wieder. Du bist erleichtert, dass du es geschafft hat, aber du weißt auch, dass es noch viele Fragen darüber gibt, wer dich gefangen genommen hat und warum und ob es überhaupt einen Preis für das Entkommen gibt?<br>Geschafft! Gratuliere, du hast das DSB-Verließ rechtzeitig verlassen und gehörst zu den glücklich Überlebenden!
        </p>
        <p class="esc_description">
            DSB-Vault created with (a little) help form ChatGPT and DALL.E
        </p>
        <p class="esc_description">
            <a href="/logout" style="color:white;">Logout</a>
        </p>
    </div>
{/if}



<style lang="scss">
    /* Flashlight Overlay */
    .esc_torch {
      position:absolute;
      z-index:100;
      width:100%;
      height:100%;
      cursor: none;
      --cursorX: 50vw;
      --cursorY: 50vh;
    }
    .esc_torch:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: fixed;
      pointer-events: none;
      background: radial-gradient(
        circle 10vmax at var(--cursorX) var(--cursorY),
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,.5) 80%,
        rgba(0,0,0,.95) 100%
      )
    }
    .esc_light {
        background:transparent;
        color:black;
        border:0;
        position:absolute;
        font-weight:bold;
    }
    .esc_qr {
        position:absolute;
        width:100px;
        height:100px;
        div {
            width:100%;
            height:100%;
            background-size:cover;
        }

    }
</style>

