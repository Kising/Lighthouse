/** Returns shuffled batches, exhausting the pool before repeating any item. */
export function nextCauseBatch(items, remaining, count=6, random=Math.random) {
  let pool = [...remaining];
  if (!pool.length) {
    pool = [...items];
    for (let i=pool.length-1; i>0; i--) {
      const j=Math.floor(random()*(i+1));
      [pool[i],pool[j]]=[pool[j],pool[i]];
    }
  }
  return {batch:pool.slice(0,count), remaining:pool.slice(count)};
}
