import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../../components/card';
// import { createPagination } from '../../utils/createPagination';
import axios from 'axios';
import { toast } from 'react-toastify';

const Announcements = () => {
  const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const getTopAnnouncements = useCallback(() => {
    axios
      .get('https://api.frossh.uz/api/announcement/get-by-filter')
      .then(({ data }) => {
        setData(data?.result?.top);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || 'Xatolik!');
      });
  }, []);
  useEffect(() => {
    return () => {
      getTopAnnouncements();
    };
  }, [getTopAnnouncements]);
  return (
    <div className="container">
      <h2 className="title">{'Top E’lonlar'}</h2>
      <div className={`cards-container ${data?.length / 4 ? 'justify-between' : ''}`}>
        {data.map((item) => (
          <Card key={item?.id} item={item} />
        ))}
      </div>
      {/* <div className="paginations">
        {?.links?.map((item) => (
          <button
            dangerouslySetInnerHTML={{ __html: item?.label?.replace(/\b(Previous|Next)\b/g, '')?.trim() }}
            key={item?.label}
            onClick={() => setCurrentPage(item === '...' ? currentPage : item)}
            className={item?.active ? 'active' : undefined}
            disabled={!item?.url}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Announcements;
