import React from 'react';
import { IoIosSearch, IoIosKey } from 'react-icons/io';
import { FaBan } from 'react-icons/fa';
import './Users.css';

const Users = () => {
  const tableInfo = [
    {
      id: 1,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 2,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 3,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 4,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 5,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 6,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 7,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 8,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 9,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
    {
      id: 10,
      username: 'acostam331',
      email: 'acostam331@gmail.com',
      phone: '+503 7657 5652',
      points: 600,
    },
  ];

  return (
    <section className="users-container">
      <div className="table-container">
        <div className="users-title-container px-4">
          <p className="title">Users on Recycluster</p>
          <div className="search-container">
            <input
              type="text"
              className="search-input px-4"
              placeholder="Search"
            />
            <button className="search-button">
              <IoIosSearch className="search-icon" />
            </button>
          </div>
        </div>
        <div className="users-table-container px-4">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>email</th>
                <th>Phone</th>
                <th>Points</th>
                <th className="ban-cell">Ban</th>
                <th className="restore-cell">Restore</th>
              </tr>
            </thead>
            <tbody>
              {tableInfo.map((info) => {
                const { id, username, email, phone, points } = info;

                return (
                  <tr key={id}>
                    <th>{id}</th>
                    <th>{username}</th>
                    <th>{email}</th>
                    <th>{phone}</th>
                    <th>{points}</th>
                    <th className="button-cell">
                      <button>
                        <FaBan />
                      </button>
                    </th>
                    <th className="button-cell">
                      <button>
                        <IoIosKey />
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
            <button className="pagination-item mx-1">3</button>
            <button className="pagination-item mx-1">4</button>
            <button className="pagination-item mx-1">5</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
