import { useContext } from "react"
import { AppContext } from "../context/GolbalState"
import IRecord from "../interfaces/IRecord"

const MainGallery = () => {
  const contextValue = useContext(AppContext)

  if (!contextValue) {
    return null
  }

  const { state } = contextValue

  const galleryData: Array<IRecord> = state.IsHero

  return (
    <div className="flex space-x-4">
      {galleryData.map((item, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.urlImage} alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <a href={item.link} className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default MainGallery
