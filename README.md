# Pichrome-8
#### Video Demo:  https://youtu.be/CBAvP3gXNV4
#### Description:

Pichrome-8 is a Chrome Extension.
When activated, by clicking on the extension icon, the user is presented with a card that automatically load a web player based game engine for Pico-8 console game.
The game cartridge is extracted by randomly select one of the first 500 featured carts, sorted by rating.
While the cart list is hardcoded into the extension, the extension store no game cartridge for copyright reasons, and they're actually loaded upon an http's request.

Pichrome-8 allow to play directly on the extension, using your keyboard and mouse (when supported by the game) and it allow the user to have a direct link to the game cartridge by a dedicated button.

### Why I made it?
I really like Pico-8 but there are so many games and it is very difficult to explore them using the inbuild splore section of the game engine.
I wanted something easy to use, always available, to discover new game without the hussle of "choosing" one.
This way, I could start a game in a second and, if I like the game and want to explore the code, I can download the cartridge in a second.

## File description:

### featured+meta_picodownload.py
I built this python scripts to handle the retrieve of a list of cartridge from the official Pico-8 API and to extract information I needed to build the web player (such as the ID of the game).
Pico-8 API can listen an HTTP request and respond with a png image that store up to 32 game carts and all the games metadata as RGBA encoded pixel.
The script allow the user to ask for a certain number of pages (so 32 games for page), ordered by ratings, and ask in loop the http server to respon with the png image.
Then, the script allow to handle the response by extractin the game carts and saving them, and by retrievin and encoding the metadata and save them in a csv file.

### manifest.json
This is the manifest file that Google require to create and run a Chrome extension. I build it following the new guidelines for the v3 of Google manifest.
This file simply store the information Chrome need to run the Extension and to set the proper icon, name, version and permission

### pop.html
This is the html structure that build the Chrome Extension card and the bootstrap style needed.
I wanted to keep it simple, so it simply based on a container with the frame for the web player and a simple anchor link styled like a button.

### scripts.js
This file host the core scripts of the Chrome extensions.
I hard encoded an the cartridges list produced by my python script and set some constants for the http Pico-8 repository.
Then I set the script to dinamically extract a random number from 1 to the max number of carts listed and to build bot the webplayer and the download button dinamically using the sorted game ID.

### Other files:
The folder contains other useful file like javascript and jquery library (couldn't use cdn version for chrome extension limitation) and the png of various size for the icon.

## Design choices:
The first draft of my extension was a bit more complicated, including a title and some description, the possibility to insert a custom game ID to load and a number of game information displayed under the web player.
I then decided to keep it simple, remove all this useless add-on and focus on the much simplier user experience possible.
One click, one game. No need to choose anything. If you don't like the game, just click out of the extension. If you like it, just download it. Easy enough.

## Future devolpment:
The only thing I'm not really happy is that I had to hard encode my game cartridge ID list into the javascript itself.
The number of games is quite high, but I wanted to have an uptodate game list without the need to actually re-run the python scripts and update the extension every month or so.
The problem is that I really could not manage to handle such a "complex" code using only javascript, and I could not be able even to store the csv file in a server and retrieve it dinamically upon the extension run becouse of CORS policy blockin request from other server domain.

In future, I would like to build a smarter application (Maybe on Heroku?) that could actually automatically run the python scripts every week, update the csv, and set the chrome extension to dinamically build the cart id list from that hosted csv file.


