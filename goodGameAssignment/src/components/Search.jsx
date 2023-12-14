import React, { useState } from 'react'

function Search({ searchHandle, clearHandle }) {
    const [search, setSearch] = useState('')
    const [searchButton, setSearchButton] = useState(false)


    const searchButtonHandle = () => {
        searchHandle(search)
        if (search != '')
            setSearchButton(true)

    }
    const clearButtonHandle = () => {
        setSearch('')
        setSearchButton(false)
        clearHandle()
    }


    return (

        <div className="flex items-center px-3 ">

            <div className="relative w-full">

                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  block w-full ps-4 p-2 " value={search} placeholder="Search" required onChange={(e) => setSearch(e.target.value)} />

            </div>


            {/* Search button */}
            <button type="submit" onClick={() => searchButtonHandle()} className="inline-flex items-center py-2 px-3 ms-2 text-sm font-medium text-white bg-orange-400 rounded-lg border border-orange-500 hover:bg-orange-600  ">

                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /></svg>
                Search
            </button>

            {/* clear button if user searches anything */}
            {searchButton &&
                <button type="submit" onClick={() => clearButtonHandle()} className="inline-flex items-center py-2 px-3 ms-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800  ">
                    <svg className="w-4 h-4 me-2"

                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ><path d="M21 3L3 21M3 3l18 18" /></svg>
                    Clear
                </button>}



        </div>

    )
}

export default Search