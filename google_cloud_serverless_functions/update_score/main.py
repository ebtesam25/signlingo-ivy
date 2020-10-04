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

def update_score(userid, increment, level):
    try:
        cursor.execute("UPDATE users\nSET level_" + str(level) + " = level_" + str(level) + " + " + str(increment) + "\nWHERE id = \"" + userid + "\"")
        connection.commit()
        return {"status":"success"}
    except:
        {"status":"failed"}

def hello_world(request):
    request_json = request.get_json()
    return update_score(request_json["userid"], request_json["increment"], request_json["level"])
