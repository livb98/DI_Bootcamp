import { createClient } from 'pexels';
import { useState } from 'react';

const client = createClient('KFFRfvL9D18OxXsao0KC2WfF4c0YFAehDITqyX9ucZFLpnQ9DhUwMBEf');

const SearchImages = () => {
    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState('');

    const searchData = async () => {
        try {
            const response = await fetch(`https://api.pexels.com/v1/search/?page=1&per_page=24&query=${query}`, {
                headers: {
                    Authorization: 'KFFRfvL9D18OxXsao0KC2WfF4c0YFAehDITqyX9ucZFLpnQ9DhUwMBEf'
                }
            });

            const data = await response.json();
            const photos = data.photos.map(photo => photo.src.tiny);
            setSearch(photos);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = () => {
        if (query.trim() !== '') {
            searchData();
        }
    };

    return (
        <div>
            <div>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {search.map((item, i) => (
                    <div key={i}>
                        <img src={item} alt={`Image ${i}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchImages;
