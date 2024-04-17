import { d as db } from './mysql-5a8abac0.js';

async function canPlay(hash, access_key) {
  if (access_key) {
    const data = await db.getPlayer(access_key);
    if (data.player.is_root) {
      return data;
    }
    for (let house in data.houses) {
      if (house.hash === hash) {
        return data;
      }
    }
    return data;
  }
  return false;
}

export { canPlay as c };
//# sourceMappingURL=player-2e38ac50.js.map