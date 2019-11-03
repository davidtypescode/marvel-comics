import React from 'react'
import { useStateValue } from '../../state'
import { Item, Loader } from 'semantic-ui-react'
import './styles.css'

const ComicDetail = () => {
    const [{ comic }] = useStateValue()
    const detail = comic.comic
    let image = detail.images && detail.images.length > 0 ? detail.images[0] : false

    return (
        <div className='ComicDetail'>
            {comic.isFetching && <Loader active />}
            {!comic.isFetching && detail &&
                <Item.Group>
                    <Item>
                        {image && <Item.Image src={`${image.path}/portrait_incredible.${image.extension}`} />}
                        <Item.Content>
                            <Item.Header>{detail.title}</Item.Header>
                            {detail.issueNumber > 0 && <Item.Meta>Issue No. {detail.issueNumber}</Item.Meta>}
                            <Item.Description>{detail.description}</Item.Description>

                        </Item.Content>
                    </Item>
                </Item.Group>}
        </div>
    )
}

export default ComicDetail
