import React, { useState } from 'react';

const Header = ({ submitSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    submitSearch(searchTerm);
  };
  return (
    <header className="header">
      <p>IP Address Tracker</p>
      <form>
        <input onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </header>
  );
};

export default Header;
