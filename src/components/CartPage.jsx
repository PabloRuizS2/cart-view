import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/cartContext'
import { IoIosClose } from 'react-icons/io'
import { RiDeleteBin2Line } from 'react-icons/ri'

function CartPage() {
  const { cartItems, removeProduct, clearCart } = useContext(CartContext)

  return (
    <>
      <div className="greeting">Cart</div>
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>producto</th>
                  <th>cantidad</th>
                  <th>precio por unidad</th>
                  <th>precio total</th>
                  <th>borrar</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ id, title, image, price, quantity }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <div className="productTd">
                          {title}
                          <img src={image} alt={title} />
                        </div>
                      </td>
                      <td>{quantity}</td>
                      <td>${price}</td>
                      <td>
                        <span> ${price * quantity}</span>
                      </td>
                      <td>
                        <button
                          className="remove-item"
                          onClick={() => removeProduct(id)}
                        >
                          <IoIosClose />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              {cartItems.length > 1 ? (
                <tr>
                  <td colspan="3">Total</td>
                  <td>
                    $
                    {cartItems.reduce((acc, curr) => {
                      return acc + curr.price * curr.quantity
                    }, 0)}
                  </td>
                  <td>
                    <button
                      onClick={() => clearCart()}
                      className="empty-cart-btn"
                    >
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              ) : (
                ''
              )}
            </table>
            <div className="add-to-cart">
              <button>
                <span className="button_top">Finalizar compra</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="empty-msg">el carrito esta vacio</div>
            <Link to="/">
              <button className="shopping-btn">Volver a la tienda</button>
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default CartPage
