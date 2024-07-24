import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState(null);
  const [text, setText] = useState("");
  const [lang, setLang] = useState("en-US");

  const fetchVoice = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://tts-api-orpin.vercel.app/speak/text=${encodeURIComponent(text)}/lang=${lang}`);
      const url = response.data.response;
      setData(url);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="container">
      <h1 className='text-center font-bold'>Text to speech</h1>
      <form onSubmit={fetchVoice}>
        <div className="form-group">
          <label htmlFor="text">Text to Convert</label>
          <input
            type="text"
            id="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lang">Language</label>
          <select
            id="lang"
            className="form-control"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en-US">English</option>
            <option value="hi-IN">Hindi</option>
            <option value="bn-IN">Bengali</option>
            <option value="ta-IN">Tamil</option>
            <option value="te-IN">Telugu</option>
            <option value="kn-IN">Kannada</option>
            <option value="ml-IN">Malayalam</option>
            <option value="gu-IN">Gujarati</option>
            <option value="mr-IN">Marathi</option>
            <option value="pa-IN">Punjabi</option>
            <option value="or-IN">Oriya</option>
            <option value="as-IN">Assamese</option>
            <option value="ne-IN">Nepali</option>
            <option value="ur">Urdu</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">get Voice</button>
      </form>
      {data && (
        <a className="btn btn-success mt-3" href={data} download="voice.mp3">
          Download the voice
        </a>
      )}
    </div>
  );
}

export default App;
