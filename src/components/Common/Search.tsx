import SearchIcon from "../../assets/SearchIcon"
import Button from "./Button"
import Input from "./Input"

const Search = () => {
    return (
        <div className="relative max-w-[200px]">
            <Input
                placeholder="Find a channel..."
                maxWidth="max-w-[200px]"
                minWidth="min-w-[200px]"
            />
            <Button className="absolute top-1/2 right-2 -translate-y-1/2">
                <SearchIcon />
            </Button>
        </div>
    )
}
export default Search
