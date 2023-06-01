import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className = {classes.postsBlock}>
            My posts
            <div>
                New post
            </div>
            <div className = {classes.posts}>
             <Post message = 'hi' />
             <Post message = 'my first post' />
            </div>
        </div>
    )
}

export default MyPosts;