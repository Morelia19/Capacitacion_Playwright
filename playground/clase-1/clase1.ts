/**
 * Calcula el total de elementos activos
 * 
 * **Details**
 * 
 * @params items - Lista de elementos evaluados
 * @returns Número de elementos activos o `0` si la lista está vacía
 * 
 * **Usage**
 * @example
 * 
 * ```ts
 * const total = contarActivos(["a","b"]);
 * console.log(total); // 2
 * ```
 */

export function contarActivos(items: string[]): number {
    return items.length || 0;
}

/**
 * Normaliza un nombre propio
 * @param nombre - cadena de entrada
 * @returns Cadena con primera letra en mayúscula y resto en minúscula
 * @throws Error - si `nombre` es vacío o solo espacios
 * @example
 * 
 * ```ts
 * normalizarNombre("juAn"); // "Juan"
 * ```
 */

export function normalizarNombre(nombre: string): string {
    const limpio = nombre.trim();
    if(!limpio || limpio.length === 0 ) throw new Error("El nombre no puede ser vacío")
    return (limpio.at(0) ?? "").toUpperCase() + limpio.slice(1).toLowerCase();
}

const nombre = "Morelia GONzaLes"

console.log(`Ingresaste ${contarActivos(nombre.split(" "))} nombres`)
console.log("Mi primer archivo TS, soy ",normalizarNombre(nombre))