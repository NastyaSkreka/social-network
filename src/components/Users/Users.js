
const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageCount)

    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    
    return  <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p}
                                onClick = {(e) => {
                                props.onPageChanged(p)
                                }} >{p}</span>
                })
            }
        </div>
        {
           props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                       { u.followed 
                       ? <button onClick={ () => { props.unfollow(u.id) }}>unfollow</button>
                        : <button onClick={ () => { props.follow(u.id) }}>follow</button> }
                    </div>
                </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                </span>
           </div>) 
        }
    </div> 
}

export default Users;