# Reutilizables

## Funciones reutilizables de JavaScript

### Uso del método personalizado de Array **updateData**

Para empezar, si estás trabajando con módulos con **vanillaJS** lo que debe hacer es importarlo:

```js
import { } from "./updateData.js";
```

Si utiliza **React** o **SvelteJS** deben hacerlo desde el componente que van a utilizar.

Si lo haces desde **React**, debe importar así:

```jsx
import { } from "./updateData";
```

Si lo haces desde **SvelteJS** puede hacerlo de esta manera:

```svelte
<script>
    import { } from "./updateData";
</script>
```

Si en cambio, no va a utilizar módulos, debe editar el archivo **updateData.js** y eliminar la expresión `export {};`.

Una vez seguido uno de los pasos anteriores en función del proyecto en el que trabaje solo queda utilizarlo de la forma que sigue más abajo.

Se tiene el siguiente Array de objetos:

```js
const data = [
  {
    id_product: "1",
    name: "<h1>First' S prod</h1>",
    price: 25.03,
    qty: 1,
    total_row: 25.03
  },
  
  {
    id_product: "2",
    name: "prod 2",
    price: 50.36,
    qty: 3,
    total_row: 151.08
  }
];
```

Y se desea modificar el campo `qty` o cualquier otro campo, por ejemplo, `name` solo debe invocar el método `updateData` para lograr dicho objetivo:

```js
const id = 1;

data.updateData({
    nameId: 'id_product',
    field: 'qty',
    value: 30
}, id);
```

Donde `nameId` es el nombre del **ID** (de no especificarlo su nombre por defecto será `id`), `field` es el nombre del campo a modificar (en este caso, fue `qty`) y `value` el valor que se asignará a ese campo o propiedad.

Si el campo `nameId` no lo defines su nombre de identificador sería `id`.

Por ejemplo:

```js
const id = 1;

data.updateData({
    field: 'qty',
    value: 30
}, id);
```