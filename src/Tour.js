import { useState } from 'react';

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };
  const notInterestedHandler = () => {
    removeTour(id);
  };

  return (
    <article className='single-tour'>
      <img
        src={image}
        alt={name}
      />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={readMoreHandler}>
              {readMore ? 'Show less' : 'Read more'}
            </button>
          </p>
          <button
            className='delete-btn'
            onClick={notInterestedHandler}
          >
            Not interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
