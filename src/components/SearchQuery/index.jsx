import React from 'react'
import { useStateValue } from '../../state'
import { fetchResults, updateQuery } from '../../state/actions'
import { Input, Icon } from 'semantic-ui-react'

import './styles.css'

const SearchQuery = () => {

    const [{ query, options, results }, dispatch] = useStateValue();

    const handleQueryChange = ({ target }) => {
        dispatch(updateQuery({ [target.name]: target.value }))
    }

    const handleSubmit = () => fetchResults(dispatch, query, options)

    return (
        <div className={`SearchQuery ${results.results || results.isFetching ? 'with-results' : ''}`}>
            <Input
                fluid
                name='title'
                value={query.title}
                size='large'
                onChange={handleQueryChange}
                icon={<Icon
                    name={'search'}
                    inverted 
                    circular 
                    link
                    onClick={handleSubmit } 
                    />}
                placeholder='Search for a comic...'
            />
        </div>
    )
}

export default SearchQuery
