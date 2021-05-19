import React from 'react'

const GifCard = ({ id, url, title }) => {
  return (
    <div key={id} className="card animate__animated animate__fadeIn" style={{ "width": "18rem" }}>
      <img src={url} className="card-img-top" alt="..." style={{ 'maxHeight': '150px' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}

export default GifCard
