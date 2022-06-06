const courses = [
    {
      id: 7,
      title: 'Kiến Thức Nhập Môn IT',
      slug: 'lessons-for-newbie',
      description:
        'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.',
      image: 'courses/7.png',
      icon: 'courses/7/6200b81f52d83.png',
      video_type: 'youtube',
      video: 'M62l1xA5Eu8',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 64091,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png',
      video_url: 'https://www.youtube.com/watch?v=M62l1xA5Eu8',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
    {
      id: 2,
      title: 'HTML, CSS từ Zero đến Hero',
      slug: 'html-css',
      description:
        'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.',
      image: 'courses/2.png',
      icon: 'courses/2/6200aecea81de.png',
      video_type: 'youtube',
      video: 'R6plN3FvzFY',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 110611,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: true,
      user_progress: 100,
      last_completed_at: '2022-04-15 11:08:57',
      image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/2/6200aecea81de.png',
      video_url: 'https://www.youtube.com/watch?v=R6plN3FvzFY',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
    {
      id: 3,
      title: 'Responsive Với Grid System',
      slug: 'responsive-web-design',
      description:
        'Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.',
      image: 'courses/3.png',
      icon: 'courses/3/6200afe1240bb.png',
      video_type: 'youtube',
      video: 'uz5LIP85J5Y',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 23116,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png',
      video_url: 'https://www.youtube.com/watch?v=uz5LIP85J5Y',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
    {
      id: 1,
      title: 'Lập Trình JavaScript Cơ Bản',
      slug: 'javascript-co-ban',
      description:
        'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.',
      image: 'courses/1.png',
      icon: 'courses/1/6200ad9d8a2d8.png',
      video_type: 'youtube',
      video: '0SJE9dYdpps',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 70154,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: true,
      user_progress: 100,
      last_completed_at: '2022-05-07 18:25:33',
      image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png',
      video_url: 'https://www.youtube.com/watch?v=0SJE9dYdpps',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
    {
      id: 12,
      title: 'Lập Trình JavaScript Nâng Cao',
      slug: 'javascript-nang-cao',
      description:
        'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',
      image: 'courses/12.png',
      icon: 'courses/12/6200af2620118.png',
      video_type: 'youtube',
      video: 'MGhw6XliFgo',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 15599,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/12/6200af2620118.png',
      video_url: 'https://www.youtube.com/watch?v=MGhw6XliFgo',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
    {
      id: 14,
      title: 'Làm việc với Terminal & Ubuntu',
      slug: 'windows-terminal-wsl',
      description:
        'Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.',
      image: 'courses/14/624faac11d109.png',
      icon: 'courses/14/624faac2ee23d.png',
      video_type: 'youtube',
      video: '7ppRSaGT1uw',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 3150,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png',
      video_url: 'https://www.youtube.com/watch?v=7ppRSaGT1uw',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
    {
      id: 13,
      title: 'Xây Dựng Website với ReactJS',
      slug: 'reactjs',
      description:
        'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
      image: 'courses/13/13.png',
      icon: 'courses/13/6200af9262b30.png',
      video_type: 'youtube',
      video: 'x0fSBAgBrOQ',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 25461,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: true,
      user_progress: 24,
      last_completed_at: '2022-05-11 17:28:41',
      image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/13/6200af9262b30.png',
      video_url: 'https://www.youtube.com/watch?v=x0fSBAgBrOQ',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
    {
      id: 6,
      title: 'Node & ExpressJS',
      slug: 'nodejs',
      description:
        'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.',
      image: 'courses/6.png',
      icon: 'courses/6/6200afb926038.png',
      video_type: 'youtube',
      video: 'z2f7RHgvddc',
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 19210,
      is_pro: false,
      is_selling: false,
      published_at: '2020-02-10T14:23:13.000000Z',
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
      icon_url:
        'https://files.fullstack.edu.vn/f8-prod/courses/6/6200afb926038.png',
      video_url: 'https://www.youtube.com/watch?v=z2f7RHgvddc',
      is_coming_soon: false,
      is_pre_order: false,
      is_published: true,
    },
];


function PostItem({course,onClick}){
  return (
    <div className="post-item">
      <h1 onClick = {()=>onClick(course)} >{course.title}</h1>
      <img src={course.image_url}></img>
      <p>{course.description}</p>
      <p>{course.students_count}</p>
    </div>
  )
}


function App() {
  const handleonClick = (course) => {
    console.log(course.title)
  }

  return ( 
  <div id="wrapper">
      {courses.map((course) =>(
          <PostItem
              key={course.id}
              course={course}
              onClick ={handleonClick}
          />
      ))}
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))



