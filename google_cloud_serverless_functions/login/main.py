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

def login(email, password):
    try:
        cursor.execute("SELECT * from users where email = \"" + email + "\"")
        k = list(cursor.fetchall())[0]
        pwd = k[2]
        x = str(bcrypt.hashpw(password.encode('utf-8'), pwd.encode('utf-8')))
        x = x[2:len(x) - 1]
        if x == pwd:
            return {"status":"success", "userid": str(k[0])}
        else:
            return {"status":"failed", "error":"wrong credentials"}
        
    except :
        return {"status":"failed", "error":"that email does not exist."}

def hello_world(request):
    request_json = request.get_json()
    return login(request_json["email"], request_json["password"])
