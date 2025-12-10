import React from "react";

const Header = (props) => {



    const callSearch = (e) => {
        props.onSearch(e.target.value)
    };



    return (
        <header>
            {/* {console.log(props)} */}
            <aside className='app-header-controls'>
            <input 
            className="search" 
            type="text" 
            placeholder="type here to search" 
            value={props.searchText}
            onChange={callSearch}
            />
            </aside>
        </header>
    )

}






export default Header; 