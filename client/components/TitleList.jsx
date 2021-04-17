import React from 'react'

export default TitleList = ({ list }) => {
  return(
    <>
      {list.length > 0 &&
        <div>
          <div>
            <div className="d-flex justify-content-center align-items-center list-main-item">
              <div className="url-text">{list[0].url}</div>
              <div className="mx-3">-</div>
              <div>{list[0].title}</div>
            </div>
          </div>

          <div>
            {list.slice(1).map(e =>
              <div className="d-flex justify-content-center list-sec-item">
                <div className="url-text">{e.url}</div>
                <div className="mx-2">-</div>
                <div>{e.title}</div>
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
}