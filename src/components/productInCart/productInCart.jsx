import React, { Component } from 'react';
import "./producInCart.css"

class ProductInCart extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="containerData" >

                   <div>
                        <img className="imagesProductsList" src={"/products/" + this.props.data.product.image} alt=""></img>
                    </div>
                    <div>
                        <h4>{this.props.data.product.title}</h4>
                        <label className="task-title">{this.props.data.product.category}</label>
                    </div>
                    <div>   
                        <label className="task-title">${this.props.data.product.price } </label>
                    </div>
                    <div>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>

            </div>


         );
    }
}
 
export default ProductInCart;