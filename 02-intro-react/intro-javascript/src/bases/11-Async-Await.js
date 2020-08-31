// const getImagen = async () => {
//     return 'https://media0.giphy.com/media/322VRsXW78lY5fJVKY/giphy.gif?cid=bb8d24b5318b9cbf2e585ede440c5c8db207f8446dfc86b4&rid=giphy.gif'
// }
// getImagen().then(console.log)
//async siempre retorna una promesa el async convierte una funcion a una promesa
//await lo transforma a asyncrono y le dice ejecuta esto pero hasta que termine

const getImagen = async () => {
    try {
        const API_KEY = 'HlONrQzplpcQOhIIQU4ZEf5heQ8BScWc'
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
        const { data } = await res.json()
        const { url } = data.images.original
        showImagen(url)
    } catch (err) {
        console.log(err)
    }
}

const showImagen = (url) => {
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
}

getImagen()