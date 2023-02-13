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
        <section>
            <div>
                <div class="text-2xl mb-2 font-bold"> Search:  </div>
                    <input
                        class="px-4 py-3 text-xl border border-solid focus:text-gray-700"
                        placeholder='Name or Location'
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
            <div class="text-2xl pt-4 font-bold"> Sort by:</div>
                <label class="text-xl">
                    <input
                    class="mr-1 mb-3"
                    type="radio"
                    value="Alphabetically"
                    name="sort"
                    checked={sortBy === "Alphabetically"}
                    onChange={handleSortChange}
                    />
                    Alphabetically
                </label>
                <br></br>
                <label class="text-xl">
                    <input
                    class="mr-1"
                    type="radio"
                    value="Neighborhood"
                    name="sort"
                    checked={sortBy === "Neighborhood"}
                    onChange={handleSortChange}
                    />
                    Neighborhood
                </label>
            </div>
        </section>)
    ;
}

export default EaterySearch;