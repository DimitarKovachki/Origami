const CreatePost = () => {

    const onCreatePostSubmit = (e) => {
        e.preventDefault();

        const data = {
            author: e.target.author.value,
            content: e.target.content.value
        }

        const handleClick = () => {
            window.location.replace('/');
        };

        return fetch('http://localhost:4000/origami', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(
            handleClick
        )
    }

    return (
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={onCreatePostSubmit}>
                <label htmlFor="author">Author</label>
                <input type="text" name="author" placeholder="Mitko" />

                <label htmlFor="content">Content</label>
                <input type="text" name="content" placeholder="Some text" />

                <input type="submit" value={'Submit'} />
            </form>
        </div>
    )
}

export default CreatePost;