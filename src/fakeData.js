const data = [
    {
        "id": 1,
        "name": "King's Landing",
        "lat": 3.65,
        "lng": 19.15,
        "type": "city"
    },
    {
        "id": 2,
        "name": "Pyke",
        "lat": 10.75,
        "lng": 7.55,
        "type": "great castle"
    },
    {
        "id": 3,
        "name": "Karhold",
        "lat": 28.75,
        "lng": 23,
        "type": "minor castle"
    },
    {
        "id": 4,
        "name": "Duskendale",
        "lat": 4.3,
        "lng": 20.15,
        "type": "town"
    },
    {
        "id": 5,
        "name": "Mole's Town",
        "lat": 33,
        "lng": 18.5,
        "type": "village"
    },
    {
        "id": 6,
        "name": "Mormont Keep",
        "lat": 31.5,
        "lng": 10.5,
        "type": "holdfast"
    },
    {
        "id": 7,
        "name": "Clegane's Keep",
        "lat": 4.8,
        "lng": 8,
        "type": "keep"
    },
    {
        "id": 8,
        "name": "The Wall",
        "lat": 35,
        "lng": 18.5,
        "type": "landmark"
    },
    {
        "id": 9,
        "name": "Moat Cailin",
        "lat": 18.75,
        "lng": 15,
        "type": "ruin"
    }

]

export const types = [...new Set(data.map(loc => loc.type))]

export default data;