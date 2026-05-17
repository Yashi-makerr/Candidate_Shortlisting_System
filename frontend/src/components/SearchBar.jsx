function SearchBar({ search, setSearch }) {

  return (
    <input
      type="text"
      placeholder="Search by skill..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700"
    />
  );
}

export default SearchBar;