from keras.layers import Conv2D, Dense, Dropout, Flatten
from keras.models import Sequential
from keras.preprocessing.image import ImageDataGenerator
import cv2
from glob import glob
from matplotlib import pyplot as plt
from numpy import floor
import random

data_augmentor = ImageDataGenerator(samplewise_center=True, samplewise_std_normalization=True, validation_split=0.1)
train_generator = data_augmentor.flow_from_directory("data/train/asl_alphabet_train", target_size=(64, 64), batch_size=64, shuffle=True, subset="training")
val_generator = data_augmentor.flow_from_directory("data/train/asl_alphabet_train", target_size=(64, 64), batch_size=64, subset="validation")

my_model = Sequential()
my_model.add(Conv2D(64, kernel_size=4, strides=1, activation='relu', input_shape=(64, 64, 3)))
my_model.add(Conv2D(64, kernel_size=4, strides=2, activation='relu'))
my_model.add(Dropout(0.5))
my_model.add(Conv2D(128, kernel_size=4, strides=1, activation='relu'))
my_model.add(Conv2D(128, kernel_size=4, strides=2, activation='relu'))
my_model.add(Dropout(0.5))
my_model.add(Conv2D(256, kernel_size=4, strides=1, activation='relu'))
my_model.add(Conv2D(256, kernel_size=4, strides=2, activation='relu'))
my_model.add(Flatten())
my_model.add(Dropout(0.5))
my_model.add(Dense(512, activation='relu'))
my_model.add(Dense(29, activation='softmax'))

my_model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=["accuracy"])

my_model.fit_generator(train_generator, epochs=5, validation_data=val_generator)
my_model.save('model.h5')