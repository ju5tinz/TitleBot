import React from 'react'

export default TitleList = ({ list }) => {
  return(
    <>
      {list.length > 0 &&
        <div>
          <div className="d-flex justify-content-center list-main-item">
            <div><a href={list[0].url}>{list[0].title}</a></div>
          </div>

          <div>
            {list.slice(1).map(e =>
              <div className="d-flex justify-content-center list-sec-item">
                <div><a href={e.url}>{e.title}</a></div>
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
}