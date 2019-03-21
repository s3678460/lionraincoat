import React, { Component } from 'react'
import Product from './Product';

const list_products = [
    {
        id: 1,
        name: "A19 - ÁO MƯA BỘ TÚI A19",
        imageURL: "http://lionraincoat.com.vn/Upload/hungdlv/IMG_6392_600x800-25c0f202.jpg",
        price: 50000,
        size: '3X, 2X, XL',
        thickness: '0.17 - 0.19 m/m',
        material: 'vải POLY/PVC',
        description: 'A19 - ÁO MƯA BỘ TÚI A19'
    },
    {
        id: 2,
        name: "A5 - ÁO MƯA HỘP NHỎ A5",
        imageURL: "http://lionraincoat.com.vn/Upload/hungdlv/A5_HINHLON-ba4864c1.jpg",
        price: 50000,
        size: 'XL, XXL',
        thickness: '0,22 - 0,23 m/m',
        material: 'vải POLY/PVC',
        description: 'A19 - ÁO MƯA BỘ TÚI A19'
    },
    {
        id: 3,
        name: "A0 - ÁO MƯA HỘP LỚN A0",
        imageURL: "http://lionraincoat.com.vn/Upload/hungdlv/A0_HINHLON-1d3b0a7a.jpg",
        price: 50000,
        size: 'XL, XXL',
        thickness: '0,22 - 0,23 m/m',
        material: 'vải POLY/PVC',
        description: 'A19 - ÁO MƯA BỘ TÚI A19'
    },
    {
        id: 4,
        name: "CD1D - CÁNH DƠI MỘT NÓN",
        imageURL: "http://lionraincoat.com.vn/Upload/hungdlv/279A1096%20600x800-cba16640.jpg",
        price: 50000,
        size: 'XL, XXL',
        thickness: '0,22 - 0,23 cm',
        material: 'vải POLY/PVC',
        description: 'A19 - ÁO MƯA BỘ TÚI A19'
    },
    {
        id: 5,
        name: "BỘ HAI LỚP THỂ THAO AG",
        imageURL: "http://lionraincoat.com.vn/Upload/hungdlv/AG_2_600x800-9605d5ea.jpg",
        price: 50000,
        size: 'L, XL, XXL',
        thickness: '0,22 - 0,23 m/m',
        material: 'vải POLY/PVC',
        description: 'BỘ HAI LỚP THỂ THAO AG'
    },
    {
        id: 6,
        name: "A5 - ÁO MƯA HỘP NHỎ A18 - BỘ THỜI TRANG NAM NỮ",
        imageURL: "http://lionraincoat.com.vn/Upload/hungdlv/A18_1_720x960-ab9278d1.jpg",
        price: 50000,
        size: 'L, XL,XXL',
        thickness: '0,22 - 0,23 m/m',
        material: 'vải poly/PVC',
        description: 'Vải: Hoa, Sọc, Chấm Bi'
    }
]

export class ListProducts extends Component {
    render() {
        const listProducts = list_products.map((product, index)=>{
            return <Product key={index} product={product}/>
        })
        return (
            <div>
                <div className="container-fluid listproduct pt-5 pb-5">
                    {listProducts}
                </div>
            </div>
        )
    }
}

export default ListProducts
