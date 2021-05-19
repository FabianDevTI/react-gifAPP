import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-4">
          <h2>GifExpertApp</h2>
          <hr />
          <AddCategory setCategories={setCategories} />
        </div>
      </div>
      <div className="row my-2">
        {
          categories.map(category => (
            <GifGrid key={category} category={category} />
          ))
        }
      </div>
    </div>
  )
}

export default GifExpertApp
