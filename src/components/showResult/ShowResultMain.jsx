import ShowResultHeader from "./ShowResultHeader"
import Tabs from "../global/Tabs"

export default function ShowResulMain({ mallName, mallState }) {
    return (
        <>
            <ShowResultHeader mallName={mallName} mallState={mallState} />
            <Tabs />
        </>
    )
}