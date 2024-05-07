import { r as redirect } from "../../../chunks/index.js";
async function load({ cookies }) {
  if (cookies.get("access_key")) {
    await cookies.delete("access_key", { path: "/" });
  }
  throw redirect(302, "/");
}
export {
  load
};
