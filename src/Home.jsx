import { useState, useEffect } from "react";

import Header from "./components/header/Headers";

import Searchbar from "./components/searchbar/Searchbar";
import SearchResults from "./components/searchbar/SearchResults";

import Malls from "./data/malls.json";


export default function Home() {
    /*const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        let themeMode = localStorage.getItem("themeMode");

        // If theme mode is false
        if (!themeMode) {
            const themeMode = "light";
            setDarkMode(false);
            localStorage.setItem("themeMode", themeMode);
        }
        setDarkMode(themeMode === "dark" ? true : false);
    })*/

    const [filteredMalls, setFilteredMalls] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isShowingMallText, setIsShowingMallText] = useState(true);

    function onChangeInput(e) {

        // Hide the Choose mall text
        setIsShowingMallText(false);

        const value = e.target.value.trim().toLowerCase();
        setInputValue(value);

        if (value === "") {
            setFilteredMalls();
            setIsShowingMallText(true);
        } else {
            const filtered = Malls.filter(mall =>
                mall["mall-name"].toLowerCase().includes(value) ||
                mall["mall-state"].toLowerCase().includes(value)
            );
            setFilteredMalls(filtered);
        }
    }

    return (
        <>
            <Header />
            <div className="max-w-[1200px] mx-auto mt-10 px-5">
                <Searchbar placeholder={"Search malls here..."} value={inputValue} onChange={onChangeInput} />
                {inputValue && <SearchResults filteredMalls={filteredMalls} />}
                {isShowingMallText && <h1 className="font-bold text-2xl text-center mt-10">No mall has been selected. Please search for one.</h1>}

            </div>
        </>
    );
}