type SearchFormProps = {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
};

export default function SearchForm({
  searchQuery,
  setSearchQuery,
}: SearchFormProps) {
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
