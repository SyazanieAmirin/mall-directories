import { useState } from "react";

export default function Tabs() {
    const [isTabSelected, setIsTabSelected] = useState(0); // Using 0 and 1 to represent tabs

    const handleTabClick = (tabIndex) => {
        setIsTabSelected(tabIndex);
        console.log(tabIndex);
    };

    return (
        <div className="flex flex-row justify-between px-24 lg:px-48 mt-5 bg-black rounded-xl py-3 text-white">
            <h3
                className={isTabSelected === 0 ? "underline cursor-pointer font-bold" : "cursor-pointer"}
                onClick={() => handleTabClick(0)}
            >
                Show List
            </h3>
            <h3
                className={isTabSelected === 1 ? "underline cursor-pointer font-bold" : "cursor-pointer"}
                onClick={() => handleTabClick(1)}
            >
                Search Store
            </h3>
        </div>
    );
}
