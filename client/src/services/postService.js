import api from './api';

export const getAll = () => {
    return fetch(api.posts).then(res => res.json()).catch(error => console.log(`Error handler ${error}`))
}

// export const createOne = (data) => {
//     return fetch(api, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data)
//     })
// }