import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Travel
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            TRAVEL VLOG
          </Link>
           </span>
           
        <hr />
        <span className="postDate">9 hour ago</span>
      </div>
      <p className="postDesc">
      A travel blog is a website that features content about travel experiences, 
      destinations, tips, and more. A travel blogger is someone who creates and 
      maintains a travel blog, often sharing their own stories, photos, and
       recommendations with their audience. A travel blog can be a way to 
       express your passion for travel, inspire others to explore the world,
        and earn money from various sources such as advertising, affiliate
         marketing, sponsored posts, and products
        
     
      </p>
    </div>
  );
}
