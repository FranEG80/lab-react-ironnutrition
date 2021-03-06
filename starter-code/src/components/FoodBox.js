import React from 'react';

const FoodBox = ({data}) => (


  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img alt="" src={data.image} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{data.name}</strong> <br />
            <small>{data.calories} cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder={data.quantity}
            />
          </div>
          <div className="control">
            <button className="button is-info">
              +
      </button>
          </div>
        </div>
      </div>
    </article>
  </div>

);

export default FoodBox