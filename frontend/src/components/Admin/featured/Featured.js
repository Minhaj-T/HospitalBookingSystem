import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured({ statics, TotalAppointments }) {
  console.log('1212121212', statics, TotalAppointments);
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Appointment Statistics</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={(
                (statics?.completedAppointments / TotalAppointments) *
                100
              ).toFixed(2)}
              text={(
                (statics?.completedAppointments / TotalAppointments) *
                100
              ).toFixed(2)}
              strokeWidth={5}
            />
          </div>
          <p className="title">Total Appointment</p>
          <p className="amount">{TotalAppointments}</p>
          <p className="desc">
            Previous transactions processing. Last payments may not be included.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Completed</div>
              <div className="itemResult positive ">
                <div className="resultAmount">
                  {statics?.completedAppointments}
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Pending</div>
              <div className="itemResult warning">
                <div className="resultAmount">
                  {statics?.PendingAppointments}
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Canceled</div>
              <div className="itemResult negative">
                <div className="resultAmount">
                  {statics?.canceledAppointments}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
