import React from 'react'
import BeerCard from './BeerCard'

function BeerList({ beersData }) {

    return (
        <div className="flex-wrap  justify-center grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  px-8">
            {
                beersData.map((beer) => {
                    return <BeerCard key={beer.id} beer={beer} />

                })
            }
        </div>
    )
}

export default BeerList