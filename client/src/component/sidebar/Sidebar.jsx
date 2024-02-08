import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  // const [profile,setProfile]=useState();
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Post your blog in our app</span>
        {/* <img className="sideImg" src={PF+user.profilePic} alt="" /> */}
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
        Are you passionate about blog and hungry for engaging content? Look no further! blog is your go-to destination for informative, inspirational, entertaining articles that cater to your interests.
        </p>
      </div>
   
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
