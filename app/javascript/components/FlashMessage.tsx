import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FlashMessage = () => {
  const location = useLocation();
  const locationState = location.state as { msg: string };
  const navigate = useNavigate();

  useEffect(() => {
    if (!locationState) return;
    setTimeout(() => {
      navigate(location.pathname, {});
    }, 2000);
  }, []);

  return <p>{locationState?.msg}</p>;
};

export default FlashMessage;
