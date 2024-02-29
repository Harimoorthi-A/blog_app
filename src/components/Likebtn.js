import React, { useState } from 'react'
import './Likebtn.css';
import { Heart } from 'react-feather';

function Likebtn() {

   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);

   return (
      <div>
         <button
            className={`like-button ${liked ? 'liked' : ''}`}
            onClick={() => {
               setLikes(1);
               setLiked(true);
            }}
         >
            <Heart />
            {likes}
         </button>
      </div>
   )
}

export default Likebtn