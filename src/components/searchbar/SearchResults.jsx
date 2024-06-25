import React from "react";

export default function SearchResults({ filteredMalls }) {
    return (
        <div className="flex flex-col gap-10 bg-[#1D1D1D] h-auto p-5 w-full z-10 mt-3 rounded-xl max-h-96 overflow-y-auto">
            {filteredMalls.length === 0 && (
                <p className="text-white">No malls found.</p>
            )}
            {filteredMalls.map((mall) => (
                <div className="flex flex-row gap-5 items-center transition-all hover:ml-5" key={mall.id}>
                    <img
                        src={`https://placehold.co/150`}
                        className="w-[50px] h-[50px] bg-black rounded-md"
                        alt={`${mall["mall-name"]} logo`}
                    />
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-white">{mall["mall-name"]}</h1>
                        <h4 className="text-sm text-gray-400">{mall["mall-state"]}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}
