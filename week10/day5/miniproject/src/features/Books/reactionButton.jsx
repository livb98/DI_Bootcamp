import { useDispatch } from "react-redux";
import { addreaction } from "./bookSlice";
import {memo} from 'react'

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

const ReactionButton = ({post}) => {
    const dispatch = useDispatch()
    const renderReaction = Object.entries(reactionEmoji).map(([name,emoji])=> {
        return(
            <button
            key={name} 
            className="reactionButton" 
            onClick={()=>dispatch(addreaction({id:post.id, name}))}>
            {emoji} {post.reaction[name]}
            </button>
        )
    })

    return<div>{renderReaction}</div>
}

export default memo(ReactionButton)