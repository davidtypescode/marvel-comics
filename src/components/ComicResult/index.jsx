import React from 'react'
import { Item, Button } from 'semantic-ui-react'
import './styles.css'

export default ({ title, issueNumber, thumbnail, onClick }) => (
    <Item className='ComicResult' as='a' onClick={onClick}>
        <Item.Image size='tiny' src={`${thumbnail.path}/standard_medium.${thumbnail.extension}`} />

        <Item.Content>
            <Item.Header>{title}</Item.Header>
            {issueNumber > 0 && <Item.Meta>Issue No. {issueNumber}</Item.Meta>}
        </Item.Content>
        <Button floated='right'>View Details</Button>
    </Item>
)
