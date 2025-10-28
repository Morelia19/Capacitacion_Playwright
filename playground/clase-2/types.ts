export type Role="admin" | "editor" | "viewer" | "colaborador";

/**Interface de usuario 
 * 
 * **Details**
 * 
 * Esta interfaz se usará para generar el objeto Usuario
 * */
export interface User {
    id: string;
    username: string;
    role: Role;
}


/**Interface de credenciales de inicio de sesión
 * 
 * **Details**
 * 
 * Esta interfaz se usará para generar el objeto Credenciales
 * */
export interface Credentials {
    username: string;
    password: string;
}

/**Interface de resultado 
 * 
 * **Details**
 * 
 * Esta interfaz se usará para generar el resultado dinámico
 * */
export interface Result <T> {
    ok: boolean;
    data?: T;
    message?: string;
}