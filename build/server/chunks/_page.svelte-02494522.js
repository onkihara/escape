import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from './index2-f58250d6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="esc_center" style="background-color:black;"><h2>Create Escape House</h2>
    
    <form method="POST"><label>Name of the house
            <input name="name" autocomplete="off"${add_attribute("value", form?.name || "", 0)} autofocus></label>
        <label>Number of partecipants
            <input name="number"${add_attribute("value", form?.number || "", 0)}></label>
        <label>Slug for house
            <input name="hash"${add_attribute("value", form?.hash || "", 0)}></label>
        <button>Send</button></form>

    ${form?.incorrect ? `<p class="error">Incorrect Parameters: <!-- HTML_TAG_START -->${form?.incorrect_parameter}<!-- HTML_TAG_END --></p>` : ``}

    ${form?.success === true ? `<h3>Access Keys for ${escape(form.name)}</h3>
        <p>${each(form.keys, (key) => {
    return `${escape(key)}<br>`;
  })}</p>` : ``}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-02494522.js.map
