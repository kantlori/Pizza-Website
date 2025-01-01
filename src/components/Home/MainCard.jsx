import React from 'react'
import OrderButton from './OrderButton'
import { mainCard } from '../../HomeSuggestionData'

function MainCard() {

    const { name, image, header } = mainCard

    return (
        <div className='main-card' style={{ backgroundImage: `url(${image})` }}>
            <h3>{header}</h3>
            <h4>{name}</h4>
            <OrderButton />
        </div>
    )
}

export default MainCard