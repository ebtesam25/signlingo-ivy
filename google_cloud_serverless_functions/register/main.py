import pymysql
import uuid
import bcrypt
import json

endpoint = "35.192.132.106"
username = "root"
password = "password6969"

database_name = "signlingo"

connection = pymysql.connect(endpoint, user=username, passwd=password, db= database_name)

cursor = connection.cursor()

def register(email, password):
    cursor.execute("SELECT * from users where email = \"" + email + "\"")
    results = list(cursor.fetchall())
    if results == []:
        
        hashp = str(bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()))
        userid = str(uuid.uuid1())
        command = "insert into users (id, email, pwd, level_1, level_2, level_3) values (\"" + userid + "\", \"" + email + "\", \"" + hashp[2:len(hashp) - 1] + "\", 0, 0, 0)"

        cursor.execute(command)
        connection.commit()
        return {"status": "success"}
    else:
        return {"status":"failed", "error":"This email already exists."}

def hello_world(request):
    request_json = request.get_json()
    return register(request_json["email"], request_json["password"])
