import ShowResultHeader from "./ShowResultHeader";
import Tabs from "../global/Tabs";
import ShowResultList from "./ShowResultList";
import Malls from "../../data/malls.json";
import { useState, useEffect } from "react";

export default function ShowResulMain({ mallName, mallState }) {

    const [mallID, setMallID] = useState();

    useEffect(() => {
        // This to find the mall name/state based on the arg, if found it'll retrieve the ID
        const mall = Malls.find(mall => mall["mall-name"] === mallName && mall["mall-state"] === mallState);
        if (mall) {
            setMallID(mall.id);
        }
    }, [mallName, mallState]); // This argument is for when the mall name or state changes

    return (
        <>
            <ShowResultHeader mallName={mallName} mallState={mallState} />
            <Tabs />
            <ShowResultList mallIDArg={mallID} />
        </>
    )
}