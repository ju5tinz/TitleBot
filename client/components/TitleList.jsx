import React from 'react'

export default TitleList = ({ list }) => {
  console.log(list)

  return(
    <>
      {list.length > 0 &&
        <div>
          <div className="d-flex justify-content-center list-main-item">
            <div><a target="_blank" href={list[0].url}>{list[0].title}</a></div>
          </div>

          <div>
            {list.slice(1).map((e, index) =>
              <div key={index} className="d-flex justify-content-center list-sec-item">
                <div><a target="_blank" href={e.url}>{e.title}</a></div>
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
}