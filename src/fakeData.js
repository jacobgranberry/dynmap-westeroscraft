const data = [
    {
        "id": 1,
        "name": "King's Landing",
        "lat": 3.65,
        "lng": 19.15,
        "type": "cities"
    },
    {
        "id": 2,
        "name": "Pyke",
        "lat": 10.75,
        "lng": 7.55,
        "type": "great castles"
    },
    {
        "id": 3,
        "name": "Karhold",
        "lat": 28.75,
        "lng": 23,
        "type": "minor castles"
    },
    {
        "id": 4,
        "name": "Duskendale",
        "lat": 4.3,
        "lng": 20.15,
        "type": "towns"
    },
    {
        "id": 5,
        "name": "Mole's Town",
        "lat": 33,
        "lng": 18.5,
        "type": "villages"
    },
    {
        "id": 6,
        "name": "Mormont Keep",
        "lat": 31.5,
        "lng": 10.5,
        "type": "holdfasts"
    },
    {
        "id": 7,
        "name": "Clegane's Keep",
        "lat": 4.8,
        "lng": 8,
        "type": "keeps"
    },
    {
        "id": 8,
        "name": "The Wall",
        "lat": 35,
        "lng": 18.5,
        "type": "landmarks"
    },
    {
        "id": 9,
        "name": "Moat Cailin",
        "lat": 18.75,
        "lng": 15,
        "type": "ruins"
    }

]

export const types = [...new Set(data.map(loc => loc.type))]

export default data;