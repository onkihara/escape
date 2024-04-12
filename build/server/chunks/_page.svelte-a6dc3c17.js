import { c as create_ssr_component, d as add_attribute, e as escape } from './index3-f58250d6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="esc_center" style="background-color:black;"><h2>Escape Setup</h2>
    
    <form method="POST"><label>Passphrase for setup
            <input name="passphrase" autocomplete="off"${add_attribute("value", form?.passphrase || "", 0)} autofocus></label>
        <label>Root Access Key
            <input name="root_key"${add_attribute("value", form?.root_key || "", 0)}></label>
        <button>Send</button></form>

    ${form?.incorrect ? `<p class="error">Incorrect Parameters: ${escape(form?.incorrect_parameter)}!</p>` : ``}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a6dc3c17.js.map
