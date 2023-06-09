import "./Post.css"

function Post({content, author}) {

    return (
        <div className="post">
            <img src="logo/logo.png" alt="" />
            <p className="post-description">
                {content}
            </p>
            <div className="post-footer">
                <span>
                    <small>Author :</small> {author}
                </span>
            </div>
        </div>
    )
}

export default Post;