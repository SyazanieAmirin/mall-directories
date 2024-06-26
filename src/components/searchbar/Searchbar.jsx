export default function Searchbar({ placeholder, onChange, value, onFocus }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            className="bg-black px-3 py-2 rounded-full text-white w-full"
        />
    )
}