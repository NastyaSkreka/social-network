import classes from './MyPosts.module.css'
import Post from './Post/Post';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 11}
]

let postsElement = posts.map( post =>  <Post message = {post.message} />) 

const MyPosts = () => {
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