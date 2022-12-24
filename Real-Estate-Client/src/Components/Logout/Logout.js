import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);
  const handleLogout = () => {
    setCookie("jwt", "");
    console.log(cookies)
    navigate("/");
  };
  return (
    <>
      <button id="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
export default Logout;
