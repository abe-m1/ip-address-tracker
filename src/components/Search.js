const Search = ({ searchResults }) => {
  console.log('searcREs', searchResults);
  return (
    <div className="search-box">
      <div>
        <p>IP Address</p>
        <p>{searchResults.ip}</p>
      </div>
      <div>
        <p>Location</p>
        <p>{searchResults.location.city}</p>
      </div>
      <div>
        <p>Timezone</p>
        <p>{searchResults.location.timezone}</p>
      </div>
      <div>
        <p>ISP</p>
        <p>{searchResults.isp}</p>
      </div>
    </div>
  );
};

export default Search;
