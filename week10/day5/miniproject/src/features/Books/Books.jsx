import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ReactionButton from "./reactionButton";
import { useBookSelector, useStatusSelector,useFetchPost } from "./bookHooks";


const PostList = (props) => {
    const postslist = useBookSelector()
    const postsstatus = useStatusSelector()
    const callFetchPost = useFetchPost()
    // const postsstatus = useSelector(status)
    // const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(fetchPosts())
        callFetchPost()
    }, [])

    if (postsstatus === 'loading') return <h2>Loading . . .</h2>
    if (postsstatus === 'failed') return <h2>Something went wrong . . .</h2>


    return (
        <>
        <h2>PostList: </h2>
        <section>
            {postslist.map(post => {
                return (<>
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </article>   
                        <ReactionButton post= {post}/>                     
                        </>)
                })}
        </section>
        </>
    )
}

export default PostList