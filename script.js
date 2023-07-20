// const handleResponce = () => {
//     fetch('https://swapi.dev/api/people/1/')
//         .then(responce => responce.json())
//         .then(data => {
//             fetch("https://swapi.dev/api/vehicles/14/")
//                 .then(responce => responce.json())
//                 .then(vehicles => {
//                     fetch("https://swapi.dev/api/starships/12/")
//                         .then(responce => responce.json())
//                         .then(starships => alert(`Hello ${data.name}, you are ${data.birth_year}, your ${vehicles.name}, your ${starships.name}`))
//                 })
//         })
//         .catch(error => console.log(error))
// }
//
// handleResponce()
