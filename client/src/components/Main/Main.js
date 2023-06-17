import Post from "../Post/Post";
import useCounter from "../hooks/useCounter";

function Main({ posts }) {
    if (posts[0] === undefined) {
        posts[0] = {};
        posts[0].id = 1;
        posts[0].content = "No Post for this List Item";
        posts[0].author = "Error";
    }
    const [counter, addMoreCounter] = useCounter();
    return (
        <main className="app-main" >
            <div>
                <span>Counter : {counter}</span>
                <div>
                    <button onClick={addMoreCounter}>Add more!</button>
                </div>
            </div>
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