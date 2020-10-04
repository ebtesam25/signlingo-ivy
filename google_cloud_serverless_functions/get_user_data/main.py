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

def get_data(userid):
    try:
        cursor.execute("SELECT * from users where id like \"" + userid + "\"")
        k = list(cursor.fetchall()[0])
        
        return {"status":"success", "data":k}
        
    except :
        return {"status":"failed", "error":"that email does not exist."}

def hello_world(request):
    request_json = request.get_json()
    return get_data(request_json["userid"])
