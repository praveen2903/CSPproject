import NavViewer from './NavViewer'
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import EnlargePic from './EnlargedPic';
import ScrollToTop from 'react-scroll-to-top';
import ReactPaginate from 'react-paginate';
import { useSwipeable } from 'react-swipeable';
import img from '../assets/photo.jpeg'

const Viewer = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageenlarge, setImageEnlarge] = useState('');
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    let unsub;
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'complaints'));
        unsub = onSnapshot(q, (querySnapshot) => {
          const imageList = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            imageList.push(data);
          });
          setImages(imageList);
          setLoading(false);
        });

        return unsub;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => {
      unsub();
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;
  const totalPages = Math.ceil(images?.length / perPage);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
    navigate(`/view/${selectedPage.selected + 1}`);
  };

  const currentProducts = images?.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleImageClick = (imageUrl) => {
    setImageEnlarge(imageUrl);
    toggleEnlargedView();
  };

  function toggleEnlargedView() {
    setEnlarged(!enlarged);
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < totalPages) {
        navigate(`/view/${currentPage + 1}`);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 1) {
        navigate(`/view/${currentPage - 1}`);
      }
    },
  });

  return (
    <div>
      <NavViewer />
      <ScrollToTop smooth color='#f97316' width='35' height='25' />
      {loading ? (
        <div className='flex items-center justify-center'>
          <span className="loading loading-spinner loading-lg text-info"></span>
        </div>
      ) : (
        <div>
          <div className='flex items-center justify-center text-3xl font-bold mb-10'>Complaints</div>
          <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 md:mx-8' {...swipeHandlers}>
            {currentProducts && currentProducts.map((image, index) => (
              <Card
                key={index}
                photoUrL={image.imageUrL || img}
                name={image.name}
                userphoto={image.userphoto}
                title={image.title}
                description={image.description}
                address={image.contact}
                onImageClick={() => handleImageClick(image.imageUrL)}
              />
            ))}
          </div>
        </div>
      )}
      {enlarged && <EnlargePic url={imageenlarge} onClose={toggleEnlargedView} />}
      <div className="m-8 text-xl">
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="flex mt-4 justify-center"
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          pageClassName="px-4 cursor-pointer"
          previousClassName="px-4 cursor-pointer"
          nextClassName="px-4 cursor-pointer"
          breakClassName="px-4"
          activeClassName="bg-blue-500 text-white rounded-full px-4 cursor-pointer" // Active page styling
          disabledClassName="text-gray-500 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default Viewer;
