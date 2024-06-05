import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        {/* <span className="headerTitleLg">Bloggy</span> */}
      </div>
      <div className="blog">

        <div className="textBlog">
          A personal blog is your canvas to express yourself, so have fun with it.
        </div>
        <img
          className="headerImg"
          //  src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          src="blog.jpg"
          // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          
        />
      </div>

    </div>
  );
}
//src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"