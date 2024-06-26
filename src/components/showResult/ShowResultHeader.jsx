export default function ShowResultHeader({ mallName, mallState }) {
    return (
        <div className="flex flex-col mt-7">
            <h1 className="text-2xl font-bold">{mallName}</h1>
            <h1 className="text-gray-600">{mallState}</h1>
        </div>
    )
}