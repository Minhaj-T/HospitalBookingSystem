import React, { useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
import errorGif from "../../../images/404.gif"

function ErrorPage() {
  
  // const { posts } = useSelector((state) => state);
  
  // const dispatch = useDispatch();

  useEffect(() => {
    document.title = "404 - Newsonic"
    // posts.length === 0 && dispatch(getPosts());
  }, []);



  return (
    <>

      <div className="category-content">
          <>
            <div className="container">
              <div className="content-center cat-error">
                <div>
                <p className="text-center cat-error-head">PAGE NOT FOUND</p>
                <p className="text-center mb-0"><img className="cat-error-gif" src={errorGif} alt="" draggable={false}/></p>
                <p className="text-center error-404-desc">We're sorry, we seem to have lost this page, but we don't want to lose you.</p>
                </div>
              </div>
              <span className="cat-continue-head">Continue Reading...</span>
              <div className="d-flex card-scroll mt-3">
                {/* {posts.slice(0, 7).map((val) => {
                  return (
                    <span className="me-2">
                      <LatestCard post={val} width="300px" loadFull={true} />
                    </span>
                  );
                })} */}
              </div>
            </div>
          </>

      </div>
    </>
  );
}

export default ErrorPage;
