import './App.css';
import { IoIosArrowDown } from 'react-icons/io';
import Stats from '../Components/Stats/Stats';
import { useState, useEffect } from 'react';
import Users from '../Components/Users/Users';
import Complaints from '../Components/Complaints/Complaints';
import Complaint from '../Components/Complaint/Complaint';

function App() {
  const [isStats, setIsStats] = useState(true);
  const [isComplaints, setIsComplaints] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [isComplaint, setIsComplaint] = useState(false);
  const [complaintId, setComplaintId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, []);

  return (
    <div className="app">
      <header className="app-header px-6">
        <div></div>
        <p>Recycluster</p>
        <button>
          <IoIosArrowDown />
        </button>
      </header>
      <div className="main">
        <nav className="app-nav px-6">
          <button
            className={isStats ? 'nav-item-active my-2' : 'nav-item my-2'}
            onClick={() => {
              setIsStats(true);
              setIsComplaints(false);
              setIsComplaint(false);
              setComplaintId(null);
              setIsUsers(false);
            }}
          >
            Stats
          </button>
          <button
            className={
              isComplaints | isComplaint
                ? 'nav-item-active my-2'
                : 'nav-item my-2'
            }
            onClick={() => {
              setIsStats(false);
              setIsComplaints(true);
              setIsComplaint(false);
              setComplaintId(null);
              setIsUsers(false);
            }}
          >
            Complaints
          </button>
          <button
            className={isUsers ? 'nav-item-active my-2' : 'nav-item my-2'}
            onClick={() => {
              setIsStats(false);
              setIsComplaints(false);
              setIsComplaint(false);
              setComplaintId(null);
              setIsUsers(true);
            }}
          >
            Users
          </button>
        </nav>
        <div className="content">
          {isStats ? <Stats token={token} /> : ''}
          {isComplaints ? (
            <Complaints
              isComplaint={isComplaint}
              setIsComplaint={setIsComplaint}
              setIsComplaints={setIsComplaints}
              setComplaintId={setComplaintId}
            />
          ) : (
            ''
          )}
          {isComplaint ? (
            <Complaint
              complaintId={complaintId}
              setComplaintId={setComplaintId}
              setIsComplaint={setIsComplaint}
              setIsComplaints={setIsComplaints}
            />
          ) : (
            ''
          )}
          {isUsers ? <Users /> : ''}
        </div>
      </div>
      <button
        onClick={() => {
          window.localStorage.removeItem('token');
          window.location.reload();
        }}
      >
        salir
      </button>
    </div>
  );
}

export default App;
