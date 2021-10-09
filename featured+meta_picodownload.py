import requests
import os, sys, time
import csv
from os.path import exists
from PIL import Image
from io import BytesIO
import numpy as np
import pandas as pd

CART_DOWNLOAD_DIR = os.path.dirname(__file__) + "/p8_carts"
DOWNLOAD_URL = "https://www.lexaloffle.com/bbs/get_cart.php?cat=7&play_src=2&lid="

def save_cart(cart_info, data):
    # Remove invalid filepath characters
    filename = "".join(x for x in cart_info[1] if x.isalnum())

    # If two carts have the same title add on the carts unique name.
    if exists(CART_DOWNLOAD_DIR + "//" + filename + ".p8.png"):
        filename += "." + cart_info[3]

    # Write cart data to file
    with open(CART_DOWNLOAD_DIR + "//" + filename + ".p8.png","wb") as cd:
        cd.write(data)

def get_cart_listing(sub, start_index):
    # Search cart listings 32 at a time.
        print("Searching carts " + str(32*start_index) + " to " + str((32*start_index)+31) + "...")
        r = requests.get("https://www.lexaloffle.com/bbs/cpost_lister3.php?max=32&start_index=" + str(32*start_index) + "&cat=7&sub=" + str(sub) + "&version=000202cw&cfil=0&orderby=rating")
        return r.content

def parse_cart_info(pixels):
    # Cart listing image is 32 carts in a 4 x 8 grid
    # Metadata about each cart is in the 8 pixel rows under each cart, RGB encoded
    cart_info = []
    for row in range (1, 5):
        for col in range (0, 8):
            cart_data = []
            for y in range (128*row + (8*(row-1)), (128*row) + 8 + (8*(row-1))):
                line = ""
                for x in range (128*col, (128*col) + 128):
                    rgba = pixels[x,y]
                    line += chr(rgba) # decrypt pixel RGB to a character
                cart_data.append(line.replace("\x00","")) # Clean-up empty characters
            cart_info.append(cart_data)
    return cart_info

def download_cart(cart_info):
    dc = requests.get(DOWNLOAD_URL + cart_info[3])
    save_cart(cart_info, dc.content)

def main():
    # Make download directory for all the carts if it doesn't exist
    # Open csv file
    file = open("carts_data.csv", "a")
    writer = csv.writer(file)

    # Check for cmdline argument or use default page-lengt
    if len(sys.argv) != 2:
        PAGES = 10
    else:
        PAGES = int(sys.argv[1])

    if not os.path.isdir(CART_DOWNLOAD_DIR):
        os.mkdir(CART_DOWNLOAD_DIR)
    for sub in [2,3,4,8]:
        print("Sub: " + str(sub))
        for p in range(0, PAGES):
            print("Page: " + str(p+1) + " of " + str(PAGES))
            cart_listing_bytes = get_cart_listing(sub, p)
            if len(cart_listing_bytes) <= 1064:
                break
            cart_listing_image = Image.open(BytesIO(cart_listing_bytes))
            cart_pixels = cart_listing_image.load()
            cart_listing_info = parse_cart_info(cart_pixels)
            for i in range(len(cart_listing_info)):
                if cart_listing_info[i][3]:
                    print("Downloading cart "  + str(32*p+i) + "..." + cart_listing_info[i][1])
                    download_cart(cart_listing_info[i])
                    
                    #Write pid for every carts downloaded
                    writer.writerow([cart_listing_info[i][3]])

            print("Waiting 2 secs...")
            time.sleep(2) # Trying not to kill the BBS
    print("Cart downloads complete.")
    file.close()

    # Transpose the csv
    df = pd.read_csv('carts_data.csv')

    df2 = df.T

    df2.to_csv('carts_data.csv')


if __name__ == "__main__":
    main()