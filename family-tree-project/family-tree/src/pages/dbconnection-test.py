import psycopg2

con = psycopg2.connect(
    host="devfamilytree.crnyien9vpqj.us-east-2.rds.amazonaws.com",
    database="postgres",
    user="postgres",
    password="familytree"
)


cur = con.cursor()

cur.execute("select fname, mname, lname from Members")
rows = cur.fetchall()

for r in rows:
    print(f"First Name {r[0]} Middle Name {r[1]} Last Name {r[2]}")


#always close the cursor
cur.close()

#always close the connection
con.close()
