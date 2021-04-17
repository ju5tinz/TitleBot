import React, { useState } from 'react'
import { getTitle } from '../lib/getTitle'

export default TitleForm = ({ addToList }) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await getTitle(url);
      const data = await response.json();

      if (response.status === 500) {
        setError(data.message);
      } else {
        addToList(data.formattedUrl, data.title);
      }
    } catch (err) {
      setError(err);
    } finally {
      setUrl("");
      setLoading(false);
    }
  }

  return(
    <>
      {error && <div className="row alert alert-danger">Error: {error}</div>}
      <div className="row align-items-center h-50">
        <div className="col-6" id="form-container">
          <form onSubmit={handleSubmit} className="d-flex justify-content-between">
            <input 
              type="text" 
              name="url"
              value={url}
              onChange={e=>setUrl(e.target.value)}
              placeholder="URL"
              className="col-10 px-2 mx-2 url-input"
            />
            <input 
              type="submit" 
              value="Get Title"
              disabled={loading}
              className="col-2 url-submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}