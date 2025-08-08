import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdGpsFixed } from "react-icons/md";

const Search = ({ setQuery, setUnits }) => {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city.trim() !== "") {
        setQuery({ q: city }); // Pass the city to the parent state handler
        setCity(""); // Clear the input field
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                setQuery({ lat: latitude, lon: longitude }); // Pass the latitude and longitude to the parent state handler
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    alert("Unable to fetch location. Please enable location services.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearchClick();
        }
    };

    return (
    <div className="flex flex-row w-3/4 items-center justify-center my-6 mx-auto">
        <div className="flex items-center justify-center space-x-4">
        <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Search city..."
            className="text-gray-500 text-xl font-light py-2 px-4 w-full shadow-lg rounded-full border-none outline-none capitalize placeholder:lowercase"
        />
        <div className="py-2 px-2 bg-white rounded-full">
            <FiSearch
                size={28}
                className="text-gray-600 cursor-pointer hover:scale-110 transition ease-out"
                onClick={handleSearchClick}
            />
        </div>
        <MdGpsFixed
            size={40}
            className="cursor-pointer hover:scale-110 transition ease-out"
            onClick={handleLocationClick}
        />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
        <button
            className="text-2xl cursor-pointer hover:scale-110 transition ease-out"
            onClick={() => setUnits("metric")}
        >
            &deg;C
        </button>
        <p className="text-2xl mx-1 font-medium">|</p>
        <button
            className="text-2xl cursor-pointer hover:scale-110 transition ease-out"
            onClick={() => setUnits("imperial")}
        >
            &deg;F
        </button>
        </div>
    </div>
    );
};

export default Search;
