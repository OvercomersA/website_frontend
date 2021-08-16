import './css/blog.css'

const Blog = ()=>{
    return (
        <div className="blogSection container">
            <h2 className="headTitle">Overcomers Arena blog</h2>
            <div className="blog">
                <div className="featuredContent">
                    <div className="blogImage">
                        <img src="./images/blog/bible.jpg" alt=""/>
                    </div>
                    <div className="blogSummary">
                        <h3 className="blogTitle">
                            The Overcomers
                        </h3>
                        <small>jul 26, 2021 | Pastor Rhoda</small>
                    </div>
                </div>

                <div className="blogItem">
                    <div className="blogImage">
                        <img src="./images/blog/cross.jpg" alt=""/>
                    </div>
                    <div className="blogSummary">
                        <h3 className="blogTitle">
                        The heartbeat of a ready writer
                        </h3>
                        <small>jul 26, 2021 | Pastor Rhoda</small>
                    </div>
                </div>

                <div className="blogItem">
                    <div className="blogImage">
                        <img src="./images/blog/choir.jpg" alt=""/>
                    </div>
                    <div className="blogSummary">
                        <h3 className="blogTitle">
                        The heartbeat of a ready writer
                        </h3>
                        <small>jul 26, 2021 | Pastor Rhoda</small>
                    </div>
                </div>

                <div className="blogItem">
                    <div className="blogImage">
                        <img src="./images/blog/cross.jpg" alt=""/>
                    </div>
                    <div className="blogSummary">
                        <h3 className="blogTitle">
                        The heartbeat of a ready writer
                        </h3>
                        <small>jul 26, 2021 | Pastor Rhoda</small>
                    </div>
                </div>

                <div className="blogItem">
                    <div className="blogImage">
                        <img src="./images/blog/holycommunion.jpg" alt=""/>
                    </div>
                    <div className="blogSummary">
                        <h3 className="blogTitle">
                        The heartbeat of a ready writer
                        </h3>
                        <small>jul 26, 2021 | Pastor Rhoda</small>
                    </div>
                </div>

            </div>
         </div>
    )
}

export default Blog