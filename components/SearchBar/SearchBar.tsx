"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SearchManufacturer } from "@/components";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
        <button type={"submit"} className={`-ml-3 z-10 ${otherClasses}`}>
            <Image src={"/magnifying-glass.svg"} alt={"magnifying glass"} width={40} height={40} className={"object-contain"}/>
        </button>
    )
}


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(manufacturer === '' && model === '') return alert('Please fill in the search bar');


    }

    const updateSearchParams = (mode: string, manufacturer: string) => {

    }

    return (
        <form className={"searchbar"} onSubmit={handleSearch}>
            <div className={"searchbar__item"}>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManuFacturer={setManufacturer}
                />
                <SearchButton otherClasses={"sm:hidden"}/>
            </div>
            <div className={"searchbar__item"}>
                <Image src={"/model-icon.png"} alt={"model icon"} width={25} height={25} className={"absolute w-[20px] h-[20px] ml-4"}/>
                <input
                    type={"text"}
                    name={"model"}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder={"Tiguan"} // TODO: Change Tiguan to Cayenne and add porsche logo
                    className={"searchbar__input"}
                />
                <SearchButton otherClasses={"sm:hidden"}/>
            </div>
            <SearchButton otherClasses={"max-sm:hidden"}/>
        </form>
    );
};

export default SearchBar;