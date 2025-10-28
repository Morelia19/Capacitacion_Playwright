import { Credentials, Result, Role, User } from "./types";
import { randomUUID } from "crypto";

export const login = async(cred: Credentials): Promise<Result<User>> => {
    const {username, password} = cred;

    if(password !== "ContraseñaPermitida"){
        return {
            ok: false,
            message: 'Credenciales inválidas'
        }
    }

    await new Promise<void>(r => setTimeout(r, 5000));

    const role: Role = username.startsWith("adm") ? "admin" : username.startsWith("ed") ? "editor" : "viewer";

    const user: User = {
        id: randomUUID(),
        username,
        role
    }

    return {
        ok: true,
        data: user
    }
    
}

export const formatUser = (u:User): string => `[${u.role}] ${u.username} (${u.id})`;