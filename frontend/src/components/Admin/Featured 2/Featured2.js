import '../featured/featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';

function Featured2({ data }) {
  const [value, setvalue] = useState('');

  useEffect(() => {
    setvalue(data?.[0]);
  }, [data]);
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={((value?.total / 30000) * 100).toFixed(2)}
              text={((value?.total / 30000) * 100).toFixed(2)}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: '#3e98c7',
                textColor: '#fff',
                pathColor: '#fff',
                trailColor: 'transparent',
              })}
            />
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">₹{value?.total ? value?.total : 0}</p>
          <p className="desc">
            Previous transactions processing. Last payments may not be included.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <div className="resultAmount">₹ 12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <div className="resultAmount">₹ 72.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured2;
