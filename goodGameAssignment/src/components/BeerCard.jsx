import React from 'react';

const BeerCard = ({ key, beer }) => {

    return (
        <div className="w-full sm:max-w-xs md:max-w-xs lg:max-w-xs xl:max-w-xs bg-gray-50  border border-gray-200 rounded-lg shadow  m-auto my-4 py-4 " id={key}>
            <div className="flex flex-col items-center pb-2">
                <img
                    className="w-28 h-28 object-contain mb-3 bg-white p-3 rounded-full shadow-lg"
                    src={beer.image_url}
                    alt="Beer image"
                />
                <h5 className="mb-1 text-xl font-medium overflow-hidden  text-gray-900 whitespace-nowrap box-border px-4 w-full truncate">
                    {beer.name}
                </h5>
                <span className="text-sm text-gray-500 ">{beer.tagline}</span>
            </div>
        </div>


    );
};

export default BeerCard;



