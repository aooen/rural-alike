export function entries<K extends string | number | symbol, V>(obj: Record<K, V>): Array<[K, V]> {
  return Object.entries<V>(obj) as Array<[K, V]>
}

export function init<K extends string | number | symbol, V>(this: Record<K, V>, obj: Record<K, V>) {
  entries(obj).map(([key, value]) => {
    this[key] = value
  })
}
