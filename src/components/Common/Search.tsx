import { useEffect, useState, type FormEvent } from "react"
import SearchIcon from "../../assets/SearchIcon"
import Button from "./Button"
import Input from "./Input"
import type { TChannel } from "../../types/Channel"
import { searchChannel } from "../../services/searchChannel"
import ChannelResults from "../Channel/ChannelResults"

const Search = () => {
    const [query, setQuery] = useState("")
    const [channelResults, setChannelResults] = useState<
        TChannel[] | undefined
    >([])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const results = await searchChannel(query)

        setChannelResults(results)
    }

    useEffect(() => {
        if (query === "") {
            setChannelResults([])
        }
    }, [query])

    return (
        <div>
            <form onSubmit={handleSubmit} className="relative max-w-[200px]">
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Find a channel..."
                    maxWidth="max-w-[200px]"
                    minWidth="min-w-[200px]"
                />
                <Button className="absolute top-1/2 right-2 -translate-y-1/2">
                    <SearchIcon />
                </Button>
            </form>
            {channelResults && channelResults.length > 0 && (
                <ChannelResults channelResults={channelResults} />
            )}
        </div>
    )
}
export default Search
