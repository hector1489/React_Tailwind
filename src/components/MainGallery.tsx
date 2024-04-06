import { useContext } from "react"
import { AppContext } from "../context/GolbalState"
import IRecord from "../interfaces/IRecord"

const MainGallery = () => {
  const contextValue = useContext(AppContext)

  if (!contextValue) {
    return null
  }

  const { state, setState } = contextValue;
  const galleryData: Array<IRecord> = state.IsHero

  const addToCart = (id: number) => {
    const updatedGalleryData = galleryData.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setState(prevState => ({
      ...prevState,
      IsHero: updatedGalleryData,
    }))
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {galleryData.map((item, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.urlImage} alt={item.title} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm mb-4">{item.description}</p>
            <p className="text-sm mb-4">$ {item.price}</p>
            <div className="card-actions flex justify-end">
              <button onClick={() => addToCart(item.id)} className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


export default MainGallery
