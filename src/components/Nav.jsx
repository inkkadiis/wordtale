import { Book, Home, Left, Search } from "./Icon";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const iconSize = 38;
  const iconStrokeWidth = 2;
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 경로가 일치하면 주황색으로 바꿈
  const getIconClass = (path) =>
    location.pathname === path ? "text-point" : "text-sub";

  return (
    <nav className="nav-shadow h-16 px-8 py-4 bg-white rounded-full outline -outline-offset-1 outline-borderColor inline-flex justify-start items-center gap-6">
      <button className={getIconClass("/back")} onClick={() => navigate(-1)}>
        <Left size={iconSize} strokeWidth={iconStrokeWidth} />
      </button>
      <button
        className={getIconClass("/word")}
        onClick={() => navigate("word")}
      >
        <Home size={iconSize} strokeWidth={iconStrokeWidth} />
      </button>
      <button
        className={getIconClass("/search")}
        onClick={() => navigate("search")}
      >
        <Search size={iconSize} strokeWidth={iconStrokeWidth} />
      </button>
      <button
        className={getIconClass("/library")}
        onClick={() => navigate("library")}
      >
        <Book size={iconSize} strokeWidth={iconStrokeWidth} />
      </button>
    </nav>
  );
}
