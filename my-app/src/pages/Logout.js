import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 상태 변경
    setIsLoggedIn(false);

    // 토큰 삭제
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // 로그인 페이지로 리디렉션
    navigate("/");
  }, [navigate, setIsLoggedIn]);

  return null;
};

export default Logout;
