import { c as create_ssr_component, e as escape } from './index2-f58250d6.js';

const css = {
  code: ".esc_center.svelte-7ffgu3{background-size:cover}.content.svelte-7ffgu3{max-width:500px;margin:auto;padding:20px;background:rgba(0, 0, 0, 0.5)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  const riddle = data.riddle;
  const bgcolor = riddle.background && riddle.background.color;
  const bgimage = riddle.background && riddle.background.image ? "../assets/" + data.player.house.hash + "/" + riddle.background.image : "";
  const bgpos = riddle.background && riddle.background.position;
  console.log(riddle);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="esc_center  svelte-7ffgu3" style="${escape(bgcolor ? "background-color:" + bgcolor + ";" : "", true) + " " + escape(bgpos ? "background-position:" + bgpos + ";" : "", true) + " background-image: url(" + escape(bgimage, true) + ")"}">${riddle.name ? `<h2>${escape(riddle.name)}</h2>` : ``}

    <div class="content svelte-7ffgu3"><!-- HTML_TAG_START -->${riddle.content}<!-- HTML_TAG_END -->

        ${riddle.task ? `<h2>${escape(riddle.task)}</h2>` : ``}

        ${riddle.input ? `<form method="POST">${riddle.input.type == "text" ? `<label>${escape(riddle.input.label || "")}
                        <input name="solution" autocomplete="off" value=""></label>` : ``}

                ${riddle.input.type == "textarea" ? `<label>${escape(riddle.input.label || "")}
                        <textarea name="solution" autocomplete="off"></textarea></label>` : ``}

                <input type="hidden" name="room" value="0"></form>` : ``}</div>

</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-40fd4c51.js.map
