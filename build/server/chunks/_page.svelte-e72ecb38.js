import { c as create_ssr_component, e as escape, d as add_attribute } from './index2-f58250d6.js';

const room_0_bg = "/_app/immutable/assets/room_0_bg.76eba521.png";
const room_1_bg = "/_app/immutable/assets/room_1_bg.7d7af2f2.png";
const room_2_bg = "/_app/immutable/assets/room_2_bg.a5fd300d.png";
const room_3_bg = "/_app/immutable/assets/room_3_bg.565c037a.png";
const room_4_bg = "/_app/immutable/assets/room_4_bg.8c4d16cb.jpg";
const room_5_bg = "/_app/immutable/assets/room_5_bg.d691bf93.jpg";
const qr_3 = "/_app/immutable/assets/qr_3.70b07d69.png";
const css = {
  code: '.esc_torch.svelte-ul3w78.svelte-ul3w78{position:absolute;z-index:100;width:100%;height:100%;cursor:none;--cursorX:50vw;--cursorY:50vh}.esc_torch.svelte-ul3w78.svelte-ul3w78:before{content:"";display:block;width:100%;height:100%;position:fixed;pointer-events:none;background:radial-gradient(circle 10vmax at var(--cursorX) var(--cursorY), rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0.95) 100%)}.esc_light.svelte-ul3w78.svelte-ul3w78{background:transparent;color:black;border:0;position:absolute;font-weight:bold}.esc_qr.svelte-ul3w78.svelte-ul3w78{position:absolute;width:100px;height:100px}.esc_qr.svelte-ul3w78 div.svelte-ul3w78{width:100%;height:100%;background-size:cover}',
  map: null
};
function rand_position(x, y) {
  const positions = [["top", "left"], ["top", "right"], ["bottom", "left"], ["bottom", "right"]];
  let pos = positions[Math.floor(Math.random() * positions.length)];
  return pos[0] + ":" + y + "px;" + pos[1] + ":" + x + "px;";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  const items = {
    room_0: { description: false, input: false },
    room_1: { switch: true },
    room_2: { description: false, input: false },
    room_3: {
      description: true,
      input: true,
      switch: true
    },
    room_4: { description: false, input: false },
    room_5: { description: false, input: false }
  };
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `
${data.player.rank === 0 ? `<div class="esc_center" style="${"background-image: url(" + escape(room_0_bg, true) + ")"}"><h1>Welcome to the ${escape(data.house.name)}</h1>
        ${`<p class="esc_description">Du bist in einem geheimen Forschungslabor im Schloss Rechtenthal gefangen genommen worden. Du wachst in einem kleinen Raum auf und bemerkst, dass er voll technischem Gerümpel ist.
            </p>`}
        ${``}
        ${``}</div>` : ``}




${data.player.rank === 1 ? `<div class="${["svelte-ul3w78", "esc_torch"].join(" ").trim()}"></div>
    <div class="esc_center" style="${"background-image: url(" + escape(room_1_bg, true) + ");"}">${`<p class="esc_description">Du beschließt, sofort mit der Suche nach Hinweisen zu beginnen. Zuerst solltest du aber den Lichtschalter finden.
            </p>`}
        ${``}
        ${`<button id="switch_3"${add_attribute("style", rand_position(5, 5), 0)} class="esc_light svelte-ul3w78">Licht</button>`}
        ${!items.description ? `<form method="POST"><label><input name="solution" autocomplete="off" value=""></label>
                <input type="hidden" name="room" value="1"></form>` : ``}</div>` : ``}




${data.player.rank === 2 ? `<div class="esc_center" style="${"background-image: url(" + escape(room_2_bg, true) + ")"}">${`<p class="esc_description">Der dritte Raum ist voller Rätsel und Herausforderungen. Du musst deine Fähigkeiten als DSB nutzen, um das Sicherheitssystem zu hacken und den Code für den Ausgang zu finden.
            </p>`}
        ${``}
       ${``}
        ${``}</div>` : ``}





${data.player.rank === 3 ? `<div class="${["svelte-ul3w78", "esc_torch"].join(" ").trim()}"></div>
    <div class="esc_center" style="${"background-image: url(" + escape(room_3_bg, true) + ")"}">${`<p class="esc_description">Schon wieder im Dunkeln - kein Licht diesmal - und kein Hinweis!
            </p>`}
        ${`<form method="POST"><label id="switch_1" style="margin-bottom:280px;"><input name="solution" autocomplete="off" value=""${add_attribute("this", items.room_3.input, 0)}></label>
                <input type="hidden" name="room" value="3"></form>`}
        ${`<div class="esc_qr svelte-ul3w78"${add_attribute("style", rand_position(2, 2), 0)}><div style="${"background-image:url(" + escape(qr_3, true) + ");"}" class="svelte-ul3w78"></div></div>`}</div>` : ``}




${data.player.rank === 4 ? `<div class="esc_center" style="${"background-image: url(" + escape(room_4_bg, true) + ")"}">${`<p class="esc_description">Du betrittst den letzten Raum und siehst die Rettung schon greifbar nahe. Aber es gibt ein Problem: Die Tür ist mit einem Zahlenschloss gesichert. Zum Glück gibt es einen Hinweis auf die Kombination ...
            </p>`}
        ${``}
        ${``}</div>` : ``}





${data.player.rank === 5 ? `<div class="esc_center" style="${"background-image: url(" + escape(room_5_bg, true) + ")"}"><p class="esc_description">Du rennst aus dem Raum und erreichst rechtzeitig die Ausgangstür, bevor das Labor explodiert. Du entkommst erfolgreich und findest dich schließlich in einem sonnigen Innenhof wieder. Du bist erleichtert, dass du es geschafft hat, aber du weißt auch, dass es noch viele Fragen darüber gibt, wer dich gefangen genommen hat und warum und ob es überhaupt einen Preis für das Entkommen gibt?<br>Geschafft! Gratuliere, du hast das DSB-Verlies rechtzeitig verlassen und gehörst zu den glücklich Überlebenden!
        </p>
        <p class="esc_description">DSB-Vault created with (a little) help form ChatGPT and DALL.E
        </p>
        <p class="esc_description"><a href="/logout" style="color:white;">Logout</a></p></div>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e72ecb38.js.map
