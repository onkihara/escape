import { c as create_ssr_component, e as escape, d as add_attribute } from './index2-f58250d6.js';

const login_bg = "/_app/immutable/assets/login.e17fdcf4.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="esc_center"><div class="esc_center" style="${"background-image:url(" + escape(login_bg, true) + ");"}"><h2>Code Jugglers Entry</h2>

	    <form method="POST"><label><input type="password" name="access_key" autocomplete="off"${add_attribute("value", form?.access_key || "", 0)} autofocus></label></form></div>

    ${form?.incorrect ? `<p class="error">${escape(form?.incorrect_parameter)}!</p>` : ``}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5421df58.js.map
