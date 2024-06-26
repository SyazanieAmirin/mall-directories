import { useState, useEffect } from "react";
import Malls from "./data/malls.json";

import Header from "./components/header/Headers";

import Searchbar from "./components/searchbar/Searchbar";
import SearchResults from "./components/searchbar/SearchResults";

import ShowResultHeader from "./components/showResult/ShowResultHeader";

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
    const [searchBarMallinputValue, setSearchBarMallInputValue] = useState("");
    const [isShowingMallText, setIsShowingMallText] = useState(true);

    const [selectedMallId, setSelectedMallId] = useState(null);
    const [selectedMallName, setSelectedMallName] = useState("");
    const [selectedMallState, setSelectedMallState] = useState("");



    function handleMallClick(id) {
        const selectedMall = Malls.find(mall => mall.id === id);

        if (selectedMall) {
            setSelectedMallName(selectedMall["mall-name"]);
            setSelectedMallId(selectedMall.id);
            setSelectedMallState(selectedMall["mall-state"]);

            console.log("Selected Mall Name: " + selectedMall["mall-name"]);
            console.log("Selected Mall ID: " + selectedMall.id);

            // Reset the searchbar to be no-text. This also automatically close the search result component
            setSearchBarMallInputValue("");
            setIsShowingMallText(false);
        }
    }

    function onChangeInputSearchbarMalls(e) {

        // Hide the Choose mall text (none choose)
        setIsShowingMallText(false);

        const value = e.target.value.trim().toLowerCase();
        setSearchBarMallInputValue(value);

        if (value === "") {
            setFilteredMalls();

            // Only show the Please choose mall text if there's no mall being selected
            if (selectedMallId === null) {
                setIsShowingMallText(true);
            }
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
                <Searchbar placeholder={"Search malls here..."} value={searchBarMallinputValue} onChange={onChangeInputSearchbarMalls} />
                {searchBarMallinputValue && <SearchResults filteredMalls={filteredMalls} onMallClick={handleMallClick} />}

                {isShowingMallText && <h1 className="font-bold text-2xl text-center mt-10">No mall has been selected. Please search for one.</h1>}

                {/*Everything after mall has been selected are below */}
                <ShowResultHeader mallName={selectedMallName} mallState={selectedMallState} />
            </div>
        </>
    );
}
