import { GiftList } from './gifs/GiftList';
import { PreviousSearches } from './gifs/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { useState } from 'react';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import { Gif } from './gifs/interfaces/gif.interface';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

    const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();

    return (
        (
            <>
                {/* Header */}
                <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />
                {/* SearchBar */}
                <SearchBar onQuery={handleSearch} placeholder="Busca lo que quieras" />
                {/* PreviousSearches */}
                <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />
                <GiftList gifs={gifs} />


            </>
        )
    )
}
