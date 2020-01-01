mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsMTk5NDEwIiwiYSI6ImNpc2kzOWp3dTAwMmMydG9jZmpxNDFrYTcifQ._wumd3i7W-X-sNAH_wPhjw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 14,
    center: [-75.628217, 6.17202]
});

async function getStores() {
    const res = await fetch('/api/v1/stores');
    const data = await res.json();
    const stores = data.data.map(store => {
        return {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [store.location.coordinates[0], store.location.coordinates[1]]
            },
            properties: {
                storeId: store.storeId,
                icon: 'shop'
            }
        }
    });
    loadMap(stores);
}

function loadMap(stores) {
    map.on('load', function () {
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': stores
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

getStores();