import React from 'react';
import './Complaints.css';
import { IoIosPaper } from 'react-icons/io';

const Complaints = ({
  isComplaint,
  setIsComplaint,
  setIsComplaints,
  setComplaintId,
}) => {
  const tableInfo = [
    {
      id: 1,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 2,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 3,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 4,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 5,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 6,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 7,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 8,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 9,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
    {
      id: 10,
      reason: 'Not related to recycling',
      reporting: 'acostam331',
      frequency: 6,
      date: '6/6/2022',
    },
  ];

  return (
    <div className="complaints-container">
      <div className="table-container">
        <div className="complaints-title-container px-4">
          <p className="title">Complaints on Recycluster</p>
        </div>
        <div className="complaints-table-container px-4">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Reason</th>
                <th>Reporting user</th>
                <th>Frequency</th>
                <th>Creation date</th>
                <th className="review-cell">Review</th>
              </tr>
            </thead>
            <tbody>
              {tableInfo.map((info) => {
                const { id, reason, reporting, frequency, date } = info;

                return (
                  <tr key={id}>
                    <th>{id}</th>
                    <th>{reason}</th>
                    <th>{reporting}</th>
                    <th>{frequency}</th>
                    <th>{date}</th>
                    <th className="button-cell">
                      <button
                        onClick={() => {
                          setIsComplaint(true);
                          setIsComplaints(false);
                          setComplaintId(id);
                        }}
                      >
                        <IoIosPaper />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination-container my-4">
            <button className="pagination-item-active mx-1">1</button>
            <button className="pagination-item mx-1">2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
