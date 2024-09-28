
import { Iproduct } from "../interfaces";
import { TxtSlicer } from "../utils/functions";
import ImgComp from "./ImgComp";


interface Iprops {
  product:Iproduct
}

const ProductCard = ({product}: Iprops) => {



  return (
    <span className="border rounded-md text-sm p-2   w-72  max-w-sm md:max-w-lg mx-auto" >
      <ImgComp
     
        imgUrl={product.imageUrl}
        alt="car-one" className="rounded-md w-72 h-52 object-cover"/>
      
      <h1 className="my-1">{product.title}</h1>
      <span>
    {TxtSlicer(product.description)}
      </span>

      <div className="flex space-x-1 my-2">
        {/* <span className={`h-5 w-5 rounded-full  + ${product.colors}` } /> */}
        <span className="h-5 w-5 bg-red-700 rounded-full" />
        <span className="h-5 w-5 bg-blue-700 rounded-full" />
        <span className="h-5 w-5 bg-yellow-700 rounded-full" />
      </div>
      <div className="flex justify-between mt-6">
        <span>{product.price}</span>
        <ImgComp className=" w-7 h-7 rounded-full"
          imgUrl={product.imageUrl}
          alt="car-one"
        />
      </div>

    
    </span>
  );
};

export default ProductCard;
