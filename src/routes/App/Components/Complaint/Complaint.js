import React from 'react';
import './Complaint.css';
import stock from '../../../../assets/stock.jpg';

const Complaint = ({
  complaintId,
  setComplaintId,
  setIsComplaint,
  setIsComplaints,
}) => {
  return (
    <section className="complaint-container">
      <div className="complaint-card">
        <div className="complaint-title-container px-4">
          <p className="title">
            Individual complaint for complaint id: {complaintId}
          </p>
        </div>
        <div className="complaint-info-container px-4">
          <p className="title-text">titulo</p>
          <img src={stock} alt="stock" className="image-preview" />
          <p className="title-text">Description</p>
          <p className="content-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
            aliquam molestiae consectetur veritatis officia similique reiciendis
            temporibus nihil eius sed, quaerat suscipit in alias beatae?
            Perspiciatis tenetur tempora quo nihil!
          </p>
          <p className="title-text">Reporting user</p>
          <p className="content-text">acostam331</p>
        </div>
        <div className="buttons-container">
          <button className="button-structure remove-button">Ban user</button>
          <button className="button-structure remove-button">Ban post</button>
          <button
            className="button-structure dismiss-button"
            onClick={() => {
              setIsComplaint(false);
              setIsComplaints(true);
              setComplaintId(null);
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </section>
  );
};

export default Complaint;
