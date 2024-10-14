import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart({cartItems, handleCheckout}) {
    const navigate = useNavigate()
  return (
    <section className='p-6 max-w-3xl mx-auto'>
        <h2 className='text-2xl font-bold'>Giỏ hàng của bạn</h2>
        {
            cartItems.length > 0 ?
             <>           
             <div>
             <ul className='border border-gray-300 rounded-lg divide-y divide-gray-200'>
                {
                    cartItems.map((product) => { 
                        return (
                            <li key={product.id} className='flex justify-between p-4'>
                                <span>{product.prdName}</span>
                                <span className='font-bold'>{product.price} VNĐ</span>
                            </li>
                        )
                    })
                }
             </ul>
             <div className="text-end">
             <button onClick={() => {handleCheckout() }} className='mt-5 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md'>Thanh Toán</button>
             </div>
             
            </div>
             </> 
             : 
             <>
                <div className='text-xl'>
                    Giỏ Hàng Của Bạn Hiện Đang Trống!
                    <button onClick={() => { navigate('/') }} className='py-2 text-white bg-green-600 px-4 rounded-lg'>Tiếp tục mua hàng</button>
                </div>
             </>
        }
    </section>
  )
}
