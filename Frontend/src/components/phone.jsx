export const Phone = ({image,description,price,color})=>{
    return (
        
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} />
            </div>
            <div id = "desc">{description}</div>
            <div id = "price">₹{price}</div>
            <div id = "color">{color}</div>
       </div>
        
  )
}