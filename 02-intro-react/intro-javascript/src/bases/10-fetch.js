const API_KEY = 'HlONrQzplpcQOhIIQU4ZEf5heQ8BScWc'

const peticionGiphy = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
// peticionGiphy.then(res => {
    //necesitamos ver lo que venga en el body de la res para eso converitmos el resultado a un JSON igual el resultado es una promesa por eso usamos THEN
    // res.json().then(data => {
    //     console.log(data)
    // })
// }).catch(console.warn)

//segunda forma de hacerlo mas limpio promesas en cadena
peticionGiphy.then(res => res.json()).then(({data}) => {
    const {url} = data.images.original
    //creamos un elemento directamente con js 
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
}).catch(console.warn)