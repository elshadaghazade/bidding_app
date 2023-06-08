const express = require('express');
const conn = require('../db/mysql');

const router = express.Router();




router.get('/', async (req, res) => {
    const [rows]  = await conn.query('select * from users');

    let siyahi = '<ul>';

    for(let row of rows) {
        siyahi += `<li>${row.id}. ${row.name} ${row.surname}</li>`;
    }

    siyahi += '</ul>';

    console.log(siyahi);
    
    const content = `<!doctype html>
        <html>
            <head>
                <title>Ana sehife</title>
            </head>
            <body>
                <h1>Welcome</h1>

                ${siyahi}
            </body>
        </html>
    `;


    res.end(content);
});


module.exports = router;