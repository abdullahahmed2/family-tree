import psycopg2

con = psycopg2.connect(
    host="devfamilytree.crnyien9vpqj.us-east-2.rds.amazonaws.com",
    database="postgres",
    user="postgres",
    password="familytree"
)


cur = con.cursor()

cur.execute("select fname, mname, lname from members")
rows = cur.fetchall()

for r in rows:
    print(f"Full name: {r[0]} {r[1]} {r[2]}")


#always close the cursor
cur.close()

#always close the connection
con.close()