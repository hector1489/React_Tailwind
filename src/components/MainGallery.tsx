import { useContext } from "react"
import { AppContext } from "../context/GolbalState"
import IRecord from "../interfaces/IRecord"

const MainGallery = () => {
  const contextValue = useContext(AppContext)

  if (!contextValue) {
    return null
  }

  const { state } = contextValue;
  const galleryData: Array<IRecord> = state.IsHero

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
            <div className="card-actions flex justify-end">
              <a href={item.link} className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainGallery
