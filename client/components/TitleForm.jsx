import React, { useState } from 'react'

export default TitleForm = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="url"
        value={url}
        onChange={e=>setUrl(e.target.value)}
        placeholder="URL"
      />
      <input 
        type="submit" 
        value="Get Title"
        disabled={loading}
      />
    </form>
  )
}