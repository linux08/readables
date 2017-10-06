import Axios from 'axios'

const BASE_URL = 'http://localhost:5001/'

export const vote = (id, option) => {
    return Axios.post(BASE_URL +'posts/' + id, {
        option: `${option}`
    }, {
            headers: { 'Authorization': 'abimbola120@yahoo.com' }
        })
        .then(res => res)
}



export const fetchPostInCategory = (category) => {
    return Axios.get(BASE_URL + category + '/posts', {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const fetchCategoryOfAPost = () => {
    return Axios.get(BASE_URL + 'posts', {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res.json)
}

export const FetchCategory = () => {
    return Axios.get(BASE_URL + 'categories', {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res).catch(err => console.log(err))
}

export const deleteSingleComment = (comment) => {
    return Axios.delete(BASE_URL + 'comments/:id', comment, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const updateDetailsOnComment = (comment) => {
    return Axios.put(BASE_URL + 'comments/:id', comment, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const updateVoteOnComment = (comment) => {
    return Axios.put(BASE_URL + 'comments/:id', comment, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const fetchDetailsForSinglePost = (id) => {
    return Axios.put(BASE_URL + 'posts/' + id + '/comments', id, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const createComment = (comment) => {
    return Axios.put(BASE_URL + 'comments', comment, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const fetchCommentSinglePost = (id) => {
    return Axios.get(BASE_URL + 'posts/' + id + '/comments', {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const deleteSinglePost = (post) => {
    return Axios.delete(BASE_URL + 'posts/' + post + '/comments', post, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const updateSinglePost = (post) => {
    return Axios.put(BASE_URL + 'posts/' + post + '/comments', post, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const fetchSinglePosts = () => {
    return Axios.put(BASE_URL + 'posts/', {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const createPost = (post) => {
    return Axios.post(BASE_URL + 'posts/', post, {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
}

export const fetchPosts = () => {
    return Axios.get(BASE_URL + 'posts', {
        headers: { 'Authorization': 'abimbola120@yahoo.com' }
    })
        .then(res => res)
        .catch(err => console.log(err))
}
