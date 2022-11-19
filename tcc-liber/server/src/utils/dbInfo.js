export const db = {
    server: 'DESKTOP-7C99J2K',
    port: 1433,
    user:'sa',
    password:'0192',
    database:'LiberT', 
    options:{
        enableArithAbort: true,
        encrypt: false, 
        trustServerCertificate: true
    },
    connectionTimeout: 1500, 
    pool:{
        max:100, 
        min:0,  
        idleTimeoutMillis:30000
    },
}   