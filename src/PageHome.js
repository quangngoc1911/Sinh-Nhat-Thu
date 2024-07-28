import React from "react";
import "./App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

function PageHome() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="buttons">
        <Link to="/" className="btn btn-bir">
          Sinh nhật
        </Link>
        <Link to="/dongthoigian" className="btn btn-timeline">
          Dòng thời gian
        </Link>
        <Link to="/anhembe" className="btn btn-gallery">
          Ảnh em bé
        </Link>
      </div>
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default PageHome;
