import React, { Component } from "react";
import shoe from "./shoe.png";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="body-landing">
        
        <header className="showcase">
          <div className="content">
            <img
              src={"https://image.ibb.co/ims4Ep/logo.png"}
              className="logo"
              alt="Lion Raincoat"
            />
            <div className="title">Welcome to Lion Raincoat</div>
            <div className="text">
              
            </div>
          </div>
        </header>
        <div className='main'>
        <div className='tone-1'>
        <div className='product-info'>
        <h1>
          YEZZY BOOST 350 V2
        </h1>
        <p>New and improved</p>
        <h2>$230</h2>
        <div className='info-btns'>
        <a href='#' className='btn btn-light'>DISCOVER</a>
        
        </div>
        </div>
        </div>
        <div className='tone-2'>
        <img src={shoe} alt='show'/>
        </div>
        </div>
        {/* Services */}
        <section className="services">
          <div className="container grid-3 center">
            <div>
              <i className="fab fa-youtube fa-3x" />
              <h3>Youtube</h3>
              <p />
            </div>
            <div>
              <i className="fas fa-chalkboard-teacher fa-3x" />
              <h3>Courses</h3>
              <p />
            </div>
            <div>
              <i className="fas fa-briefcase fa-3x" />
              <h3>Freelancing Projects</h3>
              <p />
            </div>
          </div>
        </section>

        {/* < ! -- About -- > */}
        <section className="about bg-light">
          <div className="container">
            <div className="grid-2">
              <div className="center">
                <i className="fas fa-laptop-code fa-10x" />
              </div>
              <div>
              <h3>About Us</h3>
              <p>
                Luôn lấy người tiêu dùng làm trọng tâm để xây dựng chiến lược và
                định nghĩa thương hiệu, Thanh Bình Nguyên với nhãn hiệu Lion đã
                và đang từng bước tiên phong trong lĩnh vực sản xuất áo đi mưa.
                Với phương châm "Chất lượng, uy tín, giá cả hợp lý", suốt 18 năm
                qua, công ty đã không ngừng cải tiến các mẫu mã cùng ứng dụng
                nguồn nguyên liệu cao cấp để tạo ra sản phẩm có chất lượng cao,
                an toàn và phù hợp với xu hướng tiêu dùng hiện đại.
              </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
