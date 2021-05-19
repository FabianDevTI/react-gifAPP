import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategory('')
    category.length && setCategories(categories => [category, ...categories])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control my-2"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
