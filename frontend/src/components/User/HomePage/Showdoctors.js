import './showdoctors.scss';
import { TiStar } from "react-icons/ti";
import { FaMapMarkerAlt, FaClock, FaMoneyBillAlt } from 'react-icons/fa';
import { FcInspection } from "react-icons/fc";


function Showdoctors({ fullData }) {
  return (
    <>
      <div class="container">
        <div class="faders">
          <div class="left"></div>
          <div class="right"></div>
        </div>

        <div class="items">
          {fullData?.doctor &&
            fullData?.doctor.map((row) => (
              <div class="entry">
                <div class="item">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src={row.profile_image}
                        />
                      </a>
                      <a class="fav-btn">
                        {' '}
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">Dr.{row['name']}</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality" >
                        {row['degree']}
                      </p>
                      <div class="rating">
                        <TiStar color='yellow'/>
                        <TiStar color='yellow'/>
                        <TiStar color='yellow'/>
                        <TiStar color='yellow'/>
                        <TiStar color='yellow'/>
                      </div>
                      <ul class="available-info"> 
                        <li>
                          {' '}
                          <FcInspection/> {row.specialization}
                        </li>
                        <li>
                          {' '}
                          <FaMapMarkerAlt/>  {row['city']},{row['state']}
                        </li>
                        <li>
                          {' '}
                          <FaMoneyBillAlt/> ₹300 - ₹1000{' '}
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          {' '}
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          {' '}
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      
    </>
  );
}

export default Showdoctors;
