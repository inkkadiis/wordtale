import { Book, Home, Left, Search } from "./Icon";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const iconSize = 24;
  const iconStrokeWidth = 2;
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 경로가 일치하면 주황색으로 바꿈
  const getIconClass = (path) =>
    location.pathname === path ? "text-point" : "text-sub";

  // searchBar용 useState
  const [searchToggle, setSearchToggle] = useState(false);

  return (
    <div className="flex justify-center ">
      <div className="flex gap-3 items-center absolute bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-50">
        <div
          className="h-12 px-4 py-3 bg-white rounded-full outline -outline-offset-1
       outline-borderColor inline-flex justify-start items-center gap-6 nav-shadow "
        >
          <button
            className={getIconClass("/back")}
            onClick={() => navigate(-1)}
          >
            <Left size={iconSize} strokeWidth={iconStrokeWidth} />
          </button>
        </div>
        <div
          className="h-14 px-8 py-4 bg-white rounded-full outline -outline-offset-1
       outline-borderColor inline-flex justify-start items-center gap-6 nav-shadow "
        >
          <button
            className={getIconClass("/word")}
            onClick={() => navigate("word")}
          >
            <Home size={iconSize} strokeWidth={iconStrokeWidth} />
          </button>

          <button
            className={getIconClass("/library")}
            onClick={() => navigate("library")}
          >
            <Book size={iconSize} strokeWidth={iconStrokeWidth} />
          </button>
        </div>
        <div
          className="h-12 px-4 py-3 bg-white rounded-full outline -outline-offset-1
       outline-borderColor inline-flex justify-start items-center gap-6 nav-shadow "
        >
          <button
            className={searchToggle ? "text-point" : "text-sub"}
            onClick={() => setSearchToggle(!searchToggle)}
          >
            <Search size={iconSize} strokeWidth={iconStrokeWidth} />
          </button>
        </div>
      </div>
    </div>
  );
}
