import React from 'react'
import { useStateValue } from '../../state'
import { fetchComic } from '../../state/actions'
import { Loader, Item, Message } from 'semantic-ui-react'
import ComicResult from '../ComicResult'
import './styles.css'

const SearchResults = () => {

    const [{ query, results },dispatch] = useStateValue()

    const handleClick = id => fetchComic(dispatch, id)

    return !results.results && !results.isFetching ? null :

        <div className='SearchResults'>
            {results.isFetching && <Loader inverted active />}

            {results.results.length === 0 &&
                <Message>
                    <Message.Header>No Results for '{query.title}'</Message.Header>
                    <p>Try being more specific. Or just type 'Spider-Man'.</p>
                </Message>
            }
            {results.results.length > 0 &&
                <Item.Group>
                    {results.results.map(result => <ComicResult key={result.id} {...result} onClick={()=>handleClick(result.id)} />)}
                </Item.Group>
            }
        </div>
}

export default SearchResults
