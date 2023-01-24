import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../ProductContext'


function ProductCard(props) {
    const  context = useContext(ProductContext)
    const addToCart = context.productApi.addToCart

  return (
<div className="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
        <div className="card">
            <img src={props.thumbnail} alt="" width={200}  height={200} className='card-img-top' />

            <div className="card-body text-center ">
                <h4 className="text-success text-capitalize">{props.title}</h4>
                <h6 className="text-warning">&#8377; {props.price}</h6>
                <details>
                    <summary className="text-primary">Product Description</summary>
                    <p className="card-text text-justify text-secondary">{props.description}</p>
                </details>
                </div>

                <div className="card-footer">
                    <NavLink to={`/product/${props.id}`} className="btn btn-sm btn-outline-primary" title="product details"> 
                    <i className='bi bi-info-circle-fill'></i>
                    </NavLink>
                    <button onClick={() => addToCart(props)} className="btn btn-outline-success btn-sm float-end" title='add to cart'>
                        <i className="bi bi-cart"></i>
                    </button>
                   </div>  
        </div>
    </div> 

     )

}

export default ProductCard