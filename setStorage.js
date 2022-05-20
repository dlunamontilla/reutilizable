/**
 * 
 * @param { string } key Es el nombre de item de localStorage, es decir,
 * el equivalente a definirlo así: localStorage.setItem(key, value) o también:
 * localStorage.getItem(key).
 * 
 * @param { Object<string, string|number> } object Es el  objeto que queremos agragar en
 * localStorage.
 * 
 * @returns { void }
 */
function setStorage(key, object) {
    if (!object || typeof key !== "string") return;

    const dataString = localStorage.getItem(key);
    const data = [];

    if (dataString) {
        data.push(...JSON.parse(dataString));
    }

    // const { length } = data;
    // data.push({ id: length + 1, ...object });
    
    data.push(object);

    localStorage.setItem(key, JSON.stringify(data));
    return data;
}