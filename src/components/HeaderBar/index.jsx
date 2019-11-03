import React from 'react'
import { useStateValue } from '../../state'
import { Button, Icon, Header } from 'semantic-ui-react'

import './styles.css'

export default ({ withBackButton }) => {
    const [{ results }, dispatch] = useStateValue()

    const returnToSearch = () => dispatch({
        type: 'CHANGE_VIEW',
        view: 'search'
    })

    return (
        <Header
            textAlign='center'
            className={`HeaderBar ${results.isFetching || results.results ? 'with-results' : ''}`}
            size='huge'
            inverted
            dividing
            as='div'>
            {withBackButton &&
                <Button
                    className="HeaderBar__back_button"
                    floated='left'
                    animated='fade'
                    inverted
                    onClick={returnToSearch}>
                    <Button.Content visible>Back</Button.Content>
                    <Button.Content hidden><Icon name='arrow left' /></Button.Content>
                </Button>
            }
            <Header.Content className='HeaderBar__content'>Marvel Comics</Header.Content>
        </Header>
    )
}
