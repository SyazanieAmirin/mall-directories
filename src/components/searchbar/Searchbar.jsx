export default function Searchbar({ placeholder, onChange, value }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="bg-black px-3 py-2 rounded-full text-white w-full"
        />
    )
}