export default class Cache {
  public static set(key: string, data: object | string | boolean | number) {
    localStorage.setItem(key, JSON.stringify(data))
    return data
  }
  public static get(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }
  public static remove(key: string) {
    localStorage.removeItem(key)
  }
  public static has(key: string) {
    return localStorage.getItem(key) !== null
  }
}
