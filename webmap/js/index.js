import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import TileWMS from 'ol/source/TileWMS';

// Map
const osm = new TileLayer({
    source: new OSM(),
    title: 'OSM',
});

const ortho = new TileLayer({
    source: new TileWMS({
        url: 'http://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2018/MapServer/WMSServer',
        params: {'LAYERS': '0', 'TILED': true},
    }),
    title: 'SPW Ortho 2018',
});

const vectorTiles = new TileLayer({
    source: new XYZ({
        url: './contours/{z}/{x}/{y}.pbf',
    }),

    title: 'contours',
});

const map = new Map({
    target: 'map',
    layers: [ortho, osm, vectorTiles],
    view: new View({
        center: [622124,6402800],
        zoom: 12
    })
});
