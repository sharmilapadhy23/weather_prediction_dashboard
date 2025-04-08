import React from 'react';

const RecentSearches = ({ recentCities, onRecentSearch }) => {
    return (
        <div  className="recent-searches">
            <h2>Recent Searches</h2>
            <ul>
                {recentCities.map((city, index) => (
                    <li key={index} onClick={() => onRecentSearch(city)}>
                        {city}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSearches;