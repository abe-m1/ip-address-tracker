const Search = ({ searchResults }) => {
  console.log('searcREs', searchResults);
  return (
    <div className="result-box">
      <div className="box">
        <p className="title">IP Address</p>
        <p className="result">{searchResults.ip}</p>
      </div>
      <div className="box">
        <p className="title">Location</p>
        <p className="result">
          {searchResults.location && searchResults.location.city}
        </p>
      </div>
      <div className="box">
        <p className="title">Timezone</p>
        <p className="result">
          {searchResults.location && searchResults.location.timezone}
        </p>
      </div>
      <div className="box">
        <p className="title">ISP</p>
        <p className="result">{searchResults.isp}</p>
      </div>
    </div>
  );
};

export default Search;
