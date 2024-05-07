import { c as create_ssr_component, b as subscribe } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@media(max-width: 1250px){body{background-repeat:repeat-y !important}}@media(max-width: 480px){.content{width:95% !important;padding:10px !important}.template_content .background_img{width:100% !important}}@font-face{font-family:"Source Code Pro", monospace;font-optical-sizing:auto;font-style:normal;font-weight:400;src:url("../assets/SourceCodePro-Regular.ttf") format("ttf")}html,body{margin:0;width:100%;height:100%;color:white;background-color:black;font-family:"Source Code Pro", monospace}.esc_center{display:flex;flex-direction:column;text-align:center;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:center}.esc_center h1{max-width:80%;margin-right:auto;margin-left:auto}.esc_center .content{text-align:left}.esc_center form{text-align:center}.esc_center label{display:block;margin-top:20px}.esc_center label input{display:block;width:200px;height:40px;margin:20px auto 50px;padding:10px;text-align:center;font-size:1.2em;border-radius:7px;border-color:#C00;background-color:black;color:white}.esc_center label textarea{display:block;width:300px;height:100px;margin:20px auto 20px;padding:10px;font-size:1.2em;border-radius:7px;border-color:#C00;background-color:black;color:white}.esc_center .esc_description{color:white;max-width:80%;margin:auto;background-color:rgba(0, 0, 0, 0.6);padding:15px;border-radius:5px}.esc_center button{width:80px;height:40px;margin-top:10px;background-color:#C00;border:none;color:white;border-radius:0 10px;cursor:pointer;font-family:"Source Code Pro", monospace}.highlight{color:#CC0000;font-weight:bold}a.closer{width:25px;height:25px;position:absolute;top:5px;right:5px;cursor:pointer;color:black}a.closer:hover{color:#CC0000}.error{color:red}@keyframes fade-in{from{opacity:0}}@keyframes fade-out{to{opacity:0}}@keyframes slide-from-right{from{transform:translateX(30px)}}@keyframes slide-to-left{to{transform:translateX(-30px)}}:root::view-transition-old(root){animation:500ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left}:root::view-transition-new(root){animation:810ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
