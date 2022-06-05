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

function PostItem({
    index,
    img,
    title,
    description,
    published
}){
    
    return (
        <div className="post-list">
            <div className="post-item">
                <h1>{index}</h1>
                <img src={img} alt="" />
                <h2 className="Post-title">{title}
                </h2>
                <p className="Post-desc">{description}</p>
                <p className="post-published">{published}</p>
            </div>
        </div>
    )
}
function PostList(){
    return courses.map(function(course,index){
        return <PostItem
            index={index}
            img = {course.img}
            title = {course.title}
            description = {course.description}
            published = {course.published}
        />
    })
}
const app = (
    <React.Fragment>
        <PostList/>
    </React.Fragment>
)
ReactDOM.render(app,document.getElementById('root'))