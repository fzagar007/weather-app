import { ChangeEvent } from "react";

type Props = {
    term: string
    radius: string
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    RadiusChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
};

const Search = ({
    term,
    radius,
    onInputChange,
    handleClick,
    RadiusChange,

}: Props): JSX.Element => {

    return (
        <div className='search'>
            <input className='search-bar'
                type="text"
                value={term}
                placeholder='Search'
                onChange={onInputChange}
            />
            <input className='radius'
                type="text"
                value={radius}
                placeholder='Radius'
                onChange={RadiusChange}
            />
            <button onClick={handleClick}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"></path><path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    );
}

export default Search;
