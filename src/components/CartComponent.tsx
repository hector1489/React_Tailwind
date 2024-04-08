import { useContext } from "react"
import { AppContext } from "../context/GolbalState"
import IRecord from "../interfaces/IRecord"

const CartComponent = () => {
  const contextValue = useContext(AppContext);

  if (!contextValue) {
    return null;
  }

  const { state, removeFromCart } = contextValue;
  const cartItems: Array<IRecord> = state.IsHero.filter(item => item.quantity > 0);

  const handleRemoveFromCart = (itemId: number) => {
    removeFromCart(itemId);
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Count</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Total</th>
            <th>Delele</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.quantity}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
              <td>
                <button className="btn btn-error" onClick={() => handleRemoveFromCart(item.id)}>Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



export default CartComponent

