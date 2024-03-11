import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'contraseñadoclinapp',
    database: 'doclinappdatabase'
})
// Comandos para encender la base de datos en docker
//C:\Users\HP>docker exec -it doclinappsql bash
//bash-4.4# mysql -u root --password
//Enter password:

