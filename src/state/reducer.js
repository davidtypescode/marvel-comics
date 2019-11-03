export const initialState = {
    view: 'search',
    query: {
        title: '',
    },
    results: {
        isFetching: false,
        results: false
    },
    options: {
        limit: 20,
        offset: 1
    },
    comic: {
        id: false,
        isFetching: false,
        comic: false
    }
}

export const reducer = (state,action) => {
    switch (action.type) {
        case 'CHANGE_VIEW': {
            return {
                ...state,
                view: action.view
            }
        }

        case 'UPDATE_QUERY': {
            return {
                ...state,
                query: {...state.query,...action.query}
            }
        }

        case 'UPDATE_OPTIONS': {
            return {
                ...state,
                options: {...state.options,...action.options}
            }
        }

        case 'REQUEST_RESULTS': {
            return {
                ...state,
                results: {
                    results: false,
                    isFetching: true,

                }
            }
        }

        case 'RECEIVE_RESULTS': {
            return {
                ...state,
                results: {
                    ...state.results,
                    isFetching: false,
                    ...action.results
                }
            }
        }

        case 'CLEAR_RESULTS': {
            return initialState
        }

        case 'REQUEST_COMIC': {
            return {
                ...state,
                view: 'comic',
                comic: {
                    ...state.comic,
                    id: action.id,
                    isFetching: true,
                }
            }
        }

        case 'RECEIVE_COMIC': {
            return {
                ...state,
                comic: {
                    ...state.comic,
                    isFetching: false,
                    comic: action.comic
                }
            }
        }

        default:
            return state
    }
}
