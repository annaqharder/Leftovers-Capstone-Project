import React, {useState, useContext} from 'react';


function EaterySearch({searchQuery, setSearchQuery, filterBy, setFilterBy, sortBy, setSortBy}) {

    function handleSearchChange(event){
        setSearchQuery(event.target.value)
    }

    function handleFilterChange(event) {
        setFilterBy(event.target.value)
    }

    function handleSortChange(event) {
        setSortBy(event.target.value);
    }


    return (
        <>
            <div>
                <div> Search for Restaurant Name or Location: </div>
                    <input
                        id="searchbar"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
            </div>

            {/* <div className="filter-container">
                <label>
                    <strong> Filter by Category : </strong>
                    <select onChange={handleFilterChange} value={filterBy} id="filterbar">
                    <option>All</option>
                        <option value="American">American</option>
                        <option value="Asian">Asian</option>
                        <option value="Egyptian">Egyptian</option>
                        <option value="European Paintings">European Paintings</option>
                    </select>
                </label>
            </div> */}

            <div>
            <div> Sort by:</div>
            <label>
                <input
                type="radio"
                value="Alphabetically"
                name="sort"
                checked={sortBy === "Alphabetically"}
                onChange={handleSortChange}
                />
                Alphabetically
            </label>
            <label>
                <input
                type="radio"
                value="Country"
                name="sort"
                checked={sortBy === "Country"}
                onChange={handleSortChange}
                />
                Neighborhood
            </label>
            </div>
        </>)
    ;
}

export default EaterySearch;