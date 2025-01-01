import React from 'react'
import SuggestionCard from './SuggestionCard'
import { suggestionCards } from '../../HomeSuggestionData'

function SuggestionCards() {
    return (
        <div className='suggestion-cards'>
            {suggestionCards.map((item, index) => (
                <SuggestionCard key={index} item={item} />
            ))}
        </div>
    )
}

export default SuggestionCards