import React from 'react';
import styles from "./CreatePost.module.css";


const CreatePost = () => {
  return (
    <div className="create-post">
      <h1 className="title">Musik Samspil</h1>
      <h2 className="subtitle">Opret opslag</h2>
      <p className="instruction">
        Vælg det ensemble som opslaget skal oprettes på vegne af.<br />
        Hvis du er ved at starte en ny ensemble kan du oprette den.
      </p>

      <div className="form-group">
        <label htmlFor="ensemble">Mine ensembler</label>
        <select id="ensemble" className="ensemble-select">
          <option value="">Vælg ensemble</option>
        </select>
      </div>

      <button className="new-ensemble-button">Ny ensemble</button>
      <button className="submit-button">Videre</button>
    </div>
  );
};

export default CreatePost;
