import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import GridItem from '../GridItem/GridItem';
import { getStats } from '../../../../services/AdminServices';
import './Stats.css';

const Stats = ({ token }) => {
  const gridTitles = [
    {
      id: 1,
      title: 'Daily posts',
      amount: 5,
    },
    {
      id: 2,
      title: 'Weekly posts',
      amount: 15,
    },
    {
      id: 3,
      title: 'All time posts',
      amount: 200,
    },
    {
      id: 4,
      title: 'Daily finished projects',
      amount: 1,
    },

    {
      id: 5,
      title: 'Weekly finished projects',
      amount: 6,
    },
    {
      id: 6,
      title: 'All time finished projects',
      amount: 32,
    },
  ];
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const tempData = await getStats(token);
      if (tempData.status === 200) {
        setData(tempData);
        setIsLoading(false);
      }
    };

    getData();
  }, [token]);

  return (
    <section className="stats">
      <div className="stats-element">
        <div className="stats-element-grid py-6">
          {gridTitles.map((item) => {
            const { id, title, amount } = item;
            return <GridItem key={id} title={title} amount={amount} />;
          })}
        </div>
      </div>
      <div className="stats-element">
        <div className="chart-element charts">
          <Chart token={token} />
        </div>
        <div className="chart-element">
          <p>Calendar (Pending)</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
