const parastyled = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px'
}

const Post = ({ post }) => {
    return (
        <div>
            <h1>Id: {post.id}</h1>
            <h2 style={{ backgroundColor: 'yellow', padding: '5px' }}>Title: {post.title}</h2>
            <p style={parastyled}>{post.body}</p>
        </div>
    )
}
export default Post