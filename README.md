Vector tiles
-----------

Goal: have vector tiles in an OpenLayers map

# Installation

Install tippecanoe and mb-util (on github)

# Prepare vector tiles

Create some mbtiles file:
```
tippecanoe -o contour.mbtiles ./json/contour-extract.geojson
```

Deploy this mbtiles file into a XYZ arborescence
```
mb-util contour.mbtiles ./webmap/contours --image_format=pbf
```

Unzip the tiles
```
utils$ python unzip_pbf.py
```


# OpenLayers showcase

## Making the project was:

npm init

npm install ol

npm install --save-dev parcel-bundler

for dev: npm start  or   parcel index.html
for a build: npm run build

## If you get the project, simply run:

npm install

Note: XYZ tiles are not properly served with the server from parcel. So use the www folder in a apache server.


# issue with the tile:

they should be uncompressed. See https://github.com/mapbox/mbutil/issues/79
