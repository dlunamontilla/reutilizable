
/**
 * 
 * @param {Object<string, string|number>} object Debe pasar como parámetro un objeto. En este
 * debe especificar el nombre del campo que será tratada como ID. En caso de no hacerlo el
 * nombre predeterminado será «id». También debe elegir el nombre del campo a modificar y el
 * valor que se asignará a dicho campo.
 * 
 * @param { number } id Debe pasar un id numérico como parámetro. 
 * @returns { void }
 */
Array.prototype.updateData = function (object, id) {
    const { nameId = 'id', field, value } = object;
    if (!Array.isArray(this)) return;

    if (nameId == field) {
        console.warn("El ID no puede ser el mismo que el nombre del campo a actualizar");
        return;
    }

    for (const row of this) {
        if (Number(row[nameId]) === id) {
            if (field in row) row[field] = value;
            break;
        }
    }
}

export { };