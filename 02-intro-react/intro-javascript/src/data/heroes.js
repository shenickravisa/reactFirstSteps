export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Joker',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Aquaman',
        owner: 'DC'
    }
]

const owners = ['DC', 'Marvel']
export {
    owners,
    heroes as default
}


// export default => significa que esto se exporta por defecto
//las que no estan por defecto se tienen que importar con {}