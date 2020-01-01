mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsMTk5NDEwIiwiYSI6ImNpc2kzOWp3dTAwMmMydG9jZmpxNDFrYTcifQ._wumd3i7W-X-sNAH_wPhjw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 14,
    center: [-75.628217, 6.17202]
});

function loadMap() {
    map.on('load', function () {
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-75.628217, 6.17202]
                            },
                            properties: {
                                storeId: '0001',
                                icon: 'shop'
                            }
                        }
                    ]
                }
            },
            'layout': {
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field': '{storeId}',
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'
            }
        });
    });
}

loadMap();