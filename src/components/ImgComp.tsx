interface Iporps{
    imgUrl:string,
    alt:string,
    className?:string
}

const ImgComp = ({imgUrl,alt,className}:Iporps) => {
  return (
   <>
   <img src={imgUrl} alt={alt} className={className} />
   </> 
  )
}

export default ImgComp