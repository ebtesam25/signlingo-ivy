import cv2
import tensorflow.keras
from numpy import asarray
import numpy as np
import base64
import io
from imageio import imread
import json

from PIL import ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True

model = tensorflow.keras.models.load_model('keras_model.h5')

start_point = (0, 0)
end_point = (300, 300)
color = (255, 0, 0) 
thickness = 2

classes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', "Nothing", 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


def predict(string):
    try:
        frame = imread(io.BytesIO(base64.b64decode(string)))
    
        if frame.shape[2] == 4:
            frame = frame[:,:,:3]
        image = cv2.resize(frame[0:300, 0:300], (224, 224))
      
        final_data = data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
        data = asarray(image)
        data = data.astype("float32")
        data /= 255.0
        final_data[0] = data
        pred = list(model.predict(final_data)[0])
        return {"status":"success", "prediction":classes[pred.index(max(pred))]}
    except:
        return {"status":"failed"}

def hello_world(request):
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
        return ('', 204, headers)
    
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type':'application/json'
    }

    
    request_json = request.get_json()
    return (predict(request_json["image"]), 200, headers)
