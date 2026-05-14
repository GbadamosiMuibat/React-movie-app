function Search({SearchTerm, setSearchTerm}) {


    return (  
      <div className="search">
        <div>
            <img src="./search.svg" alt="Search-icon" />
            <input
                type="text"
                placeholder="Search for a movie..."
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>
    );
}

export default Search;