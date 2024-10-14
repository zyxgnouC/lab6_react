import React from 'react'
import prd1 from "../../assets/imgs/product1.jpg"
import prd2 from "../../assets/imgs/product2.jpg"
import prd3 from "../../assets/imgs/product3.jpg"
import prd4 from "../../assets/imgs/product4.jpg"
import { Link } from 'react-router-dom'
export default function Products({handleAddToCart}) {
    const products = [
        {
            id: 1,prdName:"Đồng hồ Orient Small Bambino", price: 6868000, prdImage: prd1, description:"Chất liệu mặt kính là kính cứng, có độ cứng và độ chịu lực tốt khi bị va đập, dễ dàng đánh bóng khi bị trầy xước nhẹ."
        },
        {
            id: 2,prdName:"Đồng hồ Orient Mako Solar", price: 7005000, prdImage: prd2, description:"Chất liệu mặt kính là kính Sapphire, độ bóng bắt mắt, chống trầy xước bền bỉ, có độ cứng và độ chịu lực cao cùng với khả năng chống ăn mòn tốt."
        },
        {
            id: 3,prdName:"Đồng hồ Citizen", price: 7038000, prdImage: prd3, description:"Chất liệu mặt kính là kính khoáng (Mineral), có độ cứng và độ chịu lực tốt khi bị va đập, dễ dàng đánh bóng khi bị trầy xước nhẹ."
        },
        {
            id: 4,prdName:"Đồng hồ Orient Mako Solar", price: 8000000, prdImage: prd4, description:"Chất liệu mặt kính là kính Sapphire, độ bóng bắt mắt, chống trầy xước bền bỉ, có độ cứng và độ chịu lực cao cùng với khả năng chống ăn mòn tốt."
        },

    ]
  return (
    <section className='container mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-10'>Danh sách đồng hồ</h2>
        <div className="grid grid-cols-4 space-x-5">
            {
                products.map((product) => {
                  return(
                    <div key={product.id} className='bg-white shadow-md rounded-lg'>
                      <img src={product.prdImage} alt={product.prdName} className='w-100 h-100 object-cover' />
                      <h3 className='text-lg font-semibold'>{product.prdName}</h3>
                      <p className='font-medium text-2xl'>{product.price.toLocaleString()} VNĐ</p>                     
                      <Link to={`/detail/${product.id}`} state={{product}} className='w-full block text-center bg-blue-400 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>
                      <button onClick={() => { handleAddToCart(product) }} className='w-full block bg-green-400 text-white py-2 rounded-lg mb-2'>Thêm vào giỏ hàng</button>                                         
                    </div>
                  )
                })
            }

        </div>
    </section>
  )
}
