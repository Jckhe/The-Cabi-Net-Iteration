# Welcome to the CABI.NET

## Welcome to your cabinet! To get started:

1. Make a free account on ElephantSQL
2. Create a new instance and copy the URL code
3. Paste the URL code to PG_URI in /server/connectPg.js
4. In your new instance in ElephantSQL, create a usertable: <br>
`CREATE TABLE userTable (
    username VARCHAR(25) NOT NULL PRIMARY KEY
    password VARCHAR(255) NOT NULL,
    CONSTRAINT username_unique UNIQUE (username)
)`
5. And create a spicetable: <br>
`CREATE TABLE spiceTable(
    name VARCHAR(25) NOT NULL,
    remaining INT NOT NULL,
    containerSize VARCHAR(25) NOT NULL,
    assocUser VARCHAR(25) NOT NULL`
)
6. Add an automatically incrementing unique id to spice table: <br>
`ALTER TABLE spiceTable ADD COLUMN id BIGSERIAL PRIMARY KEY`
