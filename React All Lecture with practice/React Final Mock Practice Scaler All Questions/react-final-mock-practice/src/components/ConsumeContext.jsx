import React, { useContext } from 'react'
import ProductsContext from '../ContextApi/ProductsContext'

// !consume the context 3rd step 


const ConsumeContext = () => {

    let {productsData , setProductsData} = useContext(ProductsContext);

    // now this productsData is comming from Global state that I have achieved using the contextAPI

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>title</th>
                    <th>price</th>
                    <th>category</th>
                </tr>
            </thead>

            <tbody>
                {productsData.map((currentProduct , index) => {
                    return (
                        <tr key={index}>
                            <td>{currentProduct.id}</td>
                            <td><img src={currentProduct.image} alt="" className='table-image'/></td>
                            <td>{currentProduct.title}</td>
                            <td>{currentProduct.price}</td>
                            <td>{currentProduct.category}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ConsumeContext