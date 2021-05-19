import React from 'react'
import { useFetch } from '../hooks/useFetch'
import GifCard from './GifGridCard'
import Loader from './UI/Loader';

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])

  const { data: images, loading } = useFetch(category);

  return (
    <>
      {/* <h4>{category}</h4> */}
      <div className="row">
        {
          loading
            ?
            <Loader />
            :
            images.map(image => (
              <div className="col-3" key={image.id}>
                <GifCard {...image} />
              </div>
            ))
        }
      </div>

    </>
  )
}

export default GifGrid
