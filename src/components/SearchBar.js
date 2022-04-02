import { Divider, Input } from "antd";
import { useState } from "react";

function SearchBar({filterFoodList}) {
    const [searchInput, setSearchInput] = useState("")
    const handleChange = (e) => {
        console.log(e)
        setSearchInput(e.target.value)
        filterFoodList(e.target.value)
    }
    return (
        <div>
            <Divider>Search</Divider>
            <label>Search:</label>
            <Input value={searchInput} type="text" name="search" onChange={handleChange} />
        </div>
    )
}

export default SearchBar