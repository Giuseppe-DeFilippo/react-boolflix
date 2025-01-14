//searchbar con barra di ricerca e un button
import { useState } from "react";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";


export default function SearchBarComponent() {
    const { search } = useContext(GlobalContext);
    const [searchValue, setSearchValue] = useState("");

    const searchOnClick = () => {
        search(searchValue);
    };

    return (
        <>
            <div className="">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}

                />

                <button className="btn btn-danger" onClick={searchOnClick}>Search</button>
            </div>
        </>
    )
};

