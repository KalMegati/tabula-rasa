// displays number of times a Character has been liked

import React, { useState } from 'react';

const Likes = () => {

    // state = {
    //     likes: 0
    // }

    const [likes, setLikes] = useState(0)

    const [follows, setFollows] = useState([])

    const handleClick = () => {
        setLikes(likes+1)
    }

    return (
      <div>
          <button onClick={handleClick} >
              {likes}
          </button>
      </div>

    );

}

export default Likes