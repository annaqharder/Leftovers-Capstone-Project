function VisitSearch({searchQuery, setSearchQuery, sortBy, setSortBy}) {

    function handleSearchChange(event){
        setSearchQuery(event.target.value)
    }

    function handleSortByPriceChange(e) {
        setSortBy(e.target.value);
    }

    function handleSortChange(event) {
        setSortBy(event.target.value);
    }

    return (
        <div class="bg-stone-100 bg-opacity-70 border border-stone-300 rounded p-8 shadow-xl ml-2 mt-3">
            <div class="flex p-3">
                <div class="font-sans font-family:'Raleway' text-xl my-2 mr-3"> Search: </div>
                    <input
                        class="px-6 text-lg border border-solid focus:text-gray-700 rounded"
                        id="searchbar"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
            </div>

            <div class="p-3">
                <label class="font-sans font-family:'Raleway' text-xl mr-3 my-2">Sort By:</label>
                <select
                    onChange={handleSortByPriceChange}
                    class="px-6 py-1 text-lg border border-solid focus:text-gray-700 rounded"
                    >
                <option></option>
                <option value="lowest">Lowest Rating</option>
                <option value="highest">Highest Rating</option>
                </select>
            </div>

            <div class="flex p-3">
                <div class="font-sans font-family:'Raleway' text-xl mr-1 my-2"> Filter by:</div>
                <label class="font-sans font-family:'Raleway' text-lg m-2">
                    <input
                        class="mr-1"
                        type="radio"
                        value="Date"
                        name="sort"
                        checked={sortBy === "Date"}
                        onChange={handleSortChange}
                    />
                    Date
                </label>
                <label class="font-sans font-family:'Raleway' text-lg m-2">
                    <input
                        class="mr-1"
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