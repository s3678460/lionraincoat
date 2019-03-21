import React from 'react'

function Product(Props) {
    const {product} = Props;
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={product.imageURL} className="card-img" alt={product.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="text-danger">{product.price} $</p>
                            <p className="card-text">Độ dày: {product.thickness}</p>
                            <p className="card-text">Chất liệu: {product.material}</p>
                            <p className="card-text">Size: {product.size}</p>
                            <button className="btn btn-primary">Mua</button>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
