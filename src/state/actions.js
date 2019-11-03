import axios from 'axios'

const apikey = 'f761a11067d7e29fb1f5c496a7350db3'
const url = 'https://gateway.marvel.com/v1/public/comics'


export const updateQuery = query => {
    return {
        type: 'UPDATE_QUERY',
        query
    }
}

export const updateOptions = options => {
    return {
        type: 'UPDATE_OPTIONS',
        options
    }
}

const requestResults = () => {
    return {
        type: 'REQUEST_RESULTS'
    }
}

const receiveResults = results => {
    return {
        type: 'RECEIVE_RESULTS',
        results
    }
}

const setQueryParams = paramTypes => {
    let params = {}
    Object.keys(paramTypes).forEach(type => {
        if (paramTypes[type]) params[type] = paramTypes[type]
    })

    return params
}

export const fetchResults = (dispatch, params, options = {}) => {

    dispatch(requestResults())

    axios({
        url,
        params: {
            apikey,
            ...setQueryParams(params),
            ...options
        }
    }).then(res => {
        dispatch(receiveResults(res.data.data))
    })
}

const requestComic = id => {
    return {
        type: 'REQUEST_COMIC',
        id
    }
}

const receiveComic = comic => {
    return {
        type: 'RECEIVE_COMIC',
        comic
    }
}

export const fetchComic = (dispatch, id) => {

    dispatch(requestComic())

    axios({
        url: `${url}/${id}`,
        params: {
            apikey
        }
    }).then(res => {
        dispatch(receiveComic(res.data.data.results[0]))
    })
}