import Post from "../Post/Post";


function Main({ posts }) {
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