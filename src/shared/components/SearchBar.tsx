import  { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }};
    
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}

          onKeyDown={handleKeydown}
        />
        <button>Buscar</button>
      </div>
    );
  
};
