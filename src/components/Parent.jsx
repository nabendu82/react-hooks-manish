import { useContext } from "react"
import Child from "./Child"
import { ChannelContext, UserContext } from "../App"

const Parent = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <h1>Parent - {user} - {channel}</h1>
            <Child />
        </div>
    )
}
export default Parent