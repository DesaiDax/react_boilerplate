import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center py-2">
          <Link to={"/"} className="text-3xl">
            logo
          </Link>
          <p>header</p>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/auth/login");
            }}
          >
            logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
