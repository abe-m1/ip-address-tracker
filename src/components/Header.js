import React, { useState } from 'react';

const Header = ({ submitSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    submitSearch(searchTerm).then(() => {
      setSearchTerm('');
    });
  };
  return (
    <header className="header">
      <p className="headline">IP Address Tracker</p>
      <form className="search-form">
        <input
          placeholder="Search for any IP address or domain"
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="submit" onClick={onSubmit} />
      </form>
    </header>
  );
};

export default Header;
