function SearchBar({ search, setSearch }) {

  return (

    <input
      type="text"
      placeholder="Search complaints by location..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
      w-full
      p-4
      rounded-xl
      bg-slate-900
      border
      border-slate-700
      "
    />

  );
}

export default SearchBar;