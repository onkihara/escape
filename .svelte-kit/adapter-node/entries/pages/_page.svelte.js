import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.esc_center.svelte-1nol035.svelte-1nol035{background-image:url("/assets/login.png");justify-content:center;align-items:center}.esc_center.svelte-1nol035 .login.svelte-1nol035{color:black;padding:50px;max-width:800px;background-color:rgba(255, 255, 255, 0.8);border-radius:0 30px}.esc_center.svelte-1nol035 .login input.svelte-1nol035{background:black}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="esc_center svelte-1nol035"><div class="login svelte-1nol035"><h2>Code Jugglers Entry</h2>

	    <form method="POST"><label><input type="password" name="access_key" autocomplete="off"${add_attribute("value", form?.access_key || "", 0)} autofocus class="svelte-1nol035"></label></form></div>

    ${form?.incorrect ? `<p class="error">${escape(form?.incorrect_parameter)}!</p>` : ``}

</div>`;
});
export {
  Page as default
};
