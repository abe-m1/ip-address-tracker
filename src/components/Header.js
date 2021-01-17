import React, { useState } from 'react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const submitSearch = (data) => {
    console.log('DATA', data);
  };
  return (
    <header className="header">
      <p>IP Address Tracker</p>
      <form>
        <input onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={submitSearch}>Submit</button>
      </form>
    </header>
  );
};

export default Header;
