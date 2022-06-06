const courses = [
    {
        img:"https://files.fullstack.edu.vn/f8-prod/blog_posts/791/615ddae5c5b7d.jpg",
        title : "Học như thế nào là phù hợp ?",
        description : "Bạn đã có kiến thức lập trình chưa",
        published : "một ngày trước",
    },
    {
        img:"https://files.fullstack.edu.vn/f8-prod/blog_posts/791/615ddae5c5b7d.jpg",
        title : "Ok",
        description : "Bạn đã có kiến thức lập trình chưa",
        published : "một ngày trước",
    },
    {
        img:"https://files.fullstack.edu.vn/f8-prod/blog_posts/791/615ddae5c5b7d.jpg",
        title : "Học như thế nào là phù hợp ?",
        description : "Bạn đã có kiến thức lập trình chưa",
        published : "một ngày trước",
    }
]

function PostItem({course,index}){
    
    return (
        <div className="post-list">
            <div className="post-item">
                <h1>{index}</h1>
                <h2 className="Post-title">{course.title}
                <img src={course.img} alt="" />
                </h2>
                <p className="Post-desc">{course.description}</p>
                <p className="post-published">{course.published}</p>
            </div>
        </div>
    )
}

const app = (
    <React.Fragment>
        {courses.map((course,index) =>(
            <PostItem
                index = {index}
                course={course}
            />
        ))}
    </React.Fragment>
)
ReactDOM.render(app,document.getElementById('root'))