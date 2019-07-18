import sqlite from 'sqlite'
import SQL from 'sql-template-strings';
// const test = async () => {
//   const db = await sqlite.open('./db.sqlite');
//   /**
//    * Create the table
//    **/ 
//   await db.run(`CREATE TABLE contacts (contact_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email text NOT NULL UNIQUE);`);
//   const stmt = await db.prepare(SQL`INSERT INTO contacts (name, email) VALUES (?, ?)`);
//   let i = 0;
//   while(i<10){
//     await stmt.run(`person ${i}`,`person${i}@server.com`);
//     i++
//   }
//   await stmt.finalize();
//   const rows = await db.all("SELECT contact_id AS id, name, email FROM contacts")
//   rows.forEach( ({ id, name, email }) => console.log(`[id:${id}] - ${name} - ${email}`) )
// }

// export default { test }





  /** finally, we close the statement **/
 

const initializeDatabase = async () => {

  const db = await sqlite.open('./db.sqlite');

/**
   * retrieves the contacts from the database
   */
  const getContactsList = async () => {
    const rows = await db.all("SELECT contact_id AS id, name, email FROM contacts")
    return rows
  }

  const controller = {
    getContactsList
  }

  return controller;
}

export default initializeDatabase;
