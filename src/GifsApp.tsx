import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { GifList } from "./gifs/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {

  const { gifs, handleTermClicked, handleSearch, previusTerms } = useGifs()

  return (
    <>
      {/* header */}
      <CustomHeader tittle="buscador de gifs" description="mis gifs" />

      {/* search */}

      <SearchBar placeholder="Buscar Gifs" onQuery={handleSearch} />

      {/* busquedas previas */}

      <PreviousSearches
        searches={previusTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* gifs */}

      <GifList gifs={gifs} />
    </>
  );
};


