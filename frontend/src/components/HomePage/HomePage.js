import "./HomePage.css";
import "./home.css";
import shape10 from "../../images/shapes-shape-10.png";
import shape6 from "../../images/shapes-shape-6.png";
import shape7 from "../../images/shapes-shape-7.png";
import shape8 from "../../images/shapes-shape-8.png";
import bannerChecked from "../../images/img-banner-check.png";
import mainBanner from "../../images/img-banner-img.png";

function HomePage() {
  return (
    <>
      <div className="main-wrapper">
        {/* Main Banner */}
        <div className="home-one-banner" style={{paddingTop:'50px'}}>
          <div className="bg-shapes">
            <img
              src={shape10}
              className="shape-01 aos"
              alt="img"
              data-aos="fade-right"
            />
            <img
              src={shape7}
              className="shape-03 aos"
              alt="img"
              data-aos="zoom-out"
            />
            <img
              src={shape8}
              className="shape-04 aos"
              alt="img"
              data-aos="fade-left"
            />
            <img
              src={shape6}
              className="shape-02 aos"
              alt="img"
              data-aos="fade-down"
            />
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 banner-left aos"
                data-aos="fade-up"
              >
                <div className="banner-info">
                  <h2>Search Doctor,</h2>
                  <h2>
                    <span>Make an Appointment</span>
                  </h2>
                </div>
                <div className="banner-details">
                  <h4>
                    <img src={bannerChecked} className="me-2" alt="" />
                    Instant Operation &amp; Appointment
                  </h4>
                  <h4>
                    <img src={bannerChecked} className="me-2" alt="" />
                    100% Expert Doctors
                  </h4>
                  <p>
                    Discover the best doctors, clinic &amp; hospital the city
                    nearest to you.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                <img src={mainBanner} className="img-fluid dr-img" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Category-sections */}
        <section className="section section-category">
          <div className="container">
            <div className="section-header text-center">
              <h2>Browse by Specialities</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/1.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Urology</h4>
                    <span>21 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/2.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Neurology</h4>
                    <span>18 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/3.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Orthopedic</h4>
                    <span>17 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/4.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Cardiologist</h4>
                    <span>12 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/5.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Dentist</h4>
                    <span>07 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/1.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Urology</h4>
                    <span>16 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/4.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Cardiologist</h4>
                    <span>18 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src="assets/img/category/3.png" alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Neurology</h4>
                    <span>22 Doctors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
