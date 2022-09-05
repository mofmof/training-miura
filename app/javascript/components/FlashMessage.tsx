import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const FlashMessage = () => {
  const location = useLocation();
  let locationState = location.state as { msg: string | null };
  const flashMsg = useRef(locationState?.msg);
  const navigate = useNavigate();
  const locationPath = location.pathname;

  useEffect(() => {
    if (!flashMsg.current) return;
    const interval = setInterval(() => {
      navigate(locationPath, {});
      flashMsg.current = null;
      if (!flashMsg.current) clearInterval(interval);
    }, 2000);
  }, []);

  return <p>{flashMsg.current}</p>;
};

export default FlashMessage;
