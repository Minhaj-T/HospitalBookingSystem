import './home1.css';
import shape10 from '../../../images/shapes-shape-10.png';
import shape6 from '../../../images/shapes-shape-6.png';
import shape7 from '../../../images/shapes-shape-7.png';
import shape8 from '../../../images/shapes-shape-8.png';
import bannerChecked from '../../../images/img-banner-check.png';
import mainBanner from '../../../images/img-banner-img.png';
import { useEffect, useState } from 'react';
import * as api from '../../../api/index';
import Spinner from '../Spinner/Spinner';
import Showdoctors from './Showdoctors';

function HomePage() {
  const [fullData, setFullData] = useState({ loading: false, done: false });

  useEffect(() => {
    !fullData.done && fetchAllSpecialitis();
  }, []);

  //  fetch the all specialties
  const fetchAllSpecialitis = async () => {
    setFullData((prev) => ({ ...prev, loading: true }));
    let { data } = await api.getAllSpecialites();
    let  doctors = await api.getAllDoctors(0,0);
    if (data?.specialties&&doctors?.data) {
      setFullData((prev) => ({
        ...prev,
        ...data,
        ...doctors?.data,
        loading: false,
        done: true,
      }));
    }
  };

  // Loading page
  if (fullData.loading) {
    return <Spinner />;
  }
 console.log(fullData);

  return (
    <>
      <div className="main-wrapper">
        {/* Main Banner */}
        <div className="home-one-banner" style={{ paddingTop: '50px' }}>
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
              {fullData?.specialties &&
              fullData?.specialties.map((row) => (
              <div key={row._id} className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={row.img} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>{row.name}</h4>
                    {/* <span>21 Doctors</span> */}
                  </div>
                </div>
              </div>
              ))} 
            </div>
          </div>
        </section>

    <section class="section section-doctor" style={{backgroundColor:'#f5f5f5'}}>
			<div class="container-fluid">
				<div class="section-header text-center pt-4">
					<h2>Book Our Best Doctor</h2>
					<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="doctor-slider slider">
							{/* Doctor Widget */}
              <Showdoctors fullData={fullData}/>
							{/* Doctor Widget */}
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
