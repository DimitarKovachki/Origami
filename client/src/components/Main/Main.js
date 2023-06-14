import Post from "../Post/Post";


function Main({ posts }) {
    if(posts[0] === undefined) {
        posts[0] = {};
        posts[0].content = "No Post for this List Item";
        posts[0].author = "Error";
    }

    return (
        <main className="app-main" >
            <div className="main-wrapper">
                {posts.map(p =>
                    <Post
                        key={p.id}
                        content={p.content}
                        author={p.author}
                    />
                )}
            </div>
        </main>
    )
}

export default Main;