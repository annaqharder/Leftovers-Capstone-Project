function VisitSearch({searchQuery, setSearchQuery, filterBy, setFilterBy, sortBy, setSortBy}) {

    function handleSearchChange(event){
        setSearchQuery(event.target.value)
    }

    function handleFilterChange(event) {
        setFilterBy(event.target.value)
    }

    function handleSortByPriceChange(e) {
        setSortBy(e.target.value);
    }

    function handleSortChange(event) {
        setSortBy(event.target.value);
    }

    return (
        <div>
            <div>
                <div> Search: </div>
                    <input
                        id="searchbar"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
            </div>

            <div>
                <label>Sort By:</label>
                <select onChange={handleSortByPriceChange}>
                <option></option>
                <option value="lowest">Lowest Rating</option>
                <option value="highest">Highest Rating</option>
                </select>
            </div>

            <div>
                <label>Sort By:</label>
                <select onChange={handleSortByPriceChange}>
                <option></option>
                <option value="highest">Most Recent</option>
                <option value="lowest">Least Recent</option>
                </select>
            </div>


            <div>
                <div> Filter by:</div>
                <label>
                    <input
                    type="radio"
                    value="Date"
                    name="sort"
                    checked={sortBy === "Date"}
                    onChange={handleSortChange}
                    />
                    Date
                </label>
                <label>
                    <input
                    type="radio"
                    value="Occasion"
                    name="sort"
                    checked={sortBy === "Occasion"}
                    onChange={handleSortChange}
                    />
                    Occasion
                </label>
            </div>

        </div>
    );
}

export default VisitSearch;