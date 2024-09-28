import { useState } from "react"
import {productList} from "../data"
import ProductCard from "./ProductCard"
import Button from "./UI/Button"
import MyModal from "./UI/Modal"

const ProductList = () => {
   
   
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }


const plist =productList.map(product=><ProductCard key={product.id} product={product} />

)
  return (

<>
<Button onClick={open} className='bg-blue-700 ' >confirm</Button>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 l:grid-cols-3 xl:grid-cols-4  gap-4 rounded-md '> 

  
   {plist}
   

   </div >

      <MyModal title="edit" isOpen={isOpen} closeModal={closeModal}>
      <div className="flex space-x-2">  
          <Button className="bg-blue-700 w-full">submit</Button>
      <Button onClick={closeModal} className="bg-gray-700 w-full" >cancel</Button></div>
      
      
        </MyModal>
        </>
  )
}

export default ProductList