import mysql from 'mysql';

export class ConnectionBDVoter {
    host = 'localhost';
    user = 'root';
    password = 'matafurros9000';
    database = 'voting';

    conn = mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database
    })

    connect() {
        this.conn.connect((e) => {
            if (e) { console.error(e); }
            else { console.log('Se connecto a la base de datos ' + this.database) }
        })
    }

    desconnect() {
        this.conn.end( (e) => {
            if (e) { console.error(e); }
            else { console.log('Se desconnecto a la base de datos' + this.database) }
        })
    }
  
    getAllUsers() {
        const instrucSQL = 'SELECT * FROM voter;'

        this.conn.query(instrucSQL, (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
            }
            return results;
        })
    }
  
    checkUser(email, password) {  

        const users = this.getAllUsers();

        const checkUser = users.find(object => 
            object.voter_email === email 
            && object.voter_password === password);
              
        if (checkUser !== undefined) {
            return true;
        }
    }
}

