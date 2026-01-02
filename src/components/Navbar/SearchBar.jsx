const SearchBar = ({ items = [], onSearch }) => {
  const [query, setQuery] = useState("");

  const filteredItems =
    query.trim() === ""
      ? []
      : items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSelect = (name) => {
    setQuery(name);
    onSearch(name);
  };

  return (
    <div className="relative w-120 hidden md:block">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Find your fav treat..."
        className="h-10 border-2 w-full rounded-full px-3 py-1.5 outline-none
                   focus:ring-2 focus:ring-[#cc9319c0]"
      />

      <button
        className="absolute h-10 top-1/2 -translate-y-1/2 right-0
                   flex items-center justify-center w-12
                   border-2 border-amber-800 bg-amber-600 rounded-full
                   hover:bg-amber-500 hover:border-amber-600 transition"
      >
        <FaSearch />
      </button>

      {/* 🔽 Dropdown */}
      {query && (
        <div className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-md z-50">
          {filteredItems.length > 0 ? (
            filteredItems.slice(0, 6).map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.name)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {item.name}
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No items found</p>
          )}
        </div>
      )}
    </div>
  );
};
