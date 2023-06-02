import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.posts.map( post => <Post message = {post.message} />) 

    return (
        <div className = {classes.postsBlock}>
            My posts
            <div>
                New post
            </div>
            <div className = {classes.posts}>
               {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;