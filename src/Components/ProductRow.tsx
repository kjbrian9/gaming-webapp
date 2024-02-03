import Product from "./Producttest2";
import "../Styles.css/ProductRow.css";

function ProductRow() {
  return (
    <div className="product-row__div">
      <Product
        name="Ultra keyboard"
        description="CL206 wired computer keyboard
        is super easy to use, it works instantly with any USB devices, no driver 
        needed, no need to worry about interference that breaks your connection."
        price="399"
      ></Product>
      <Product
        name="Ultra keyboard"
        description="CL206 wired computer keyboard
        is super easy to use, it works instantly with any USB devices, no driver 
        needed, no need to worry about interference that breaks your connection."
        price="399"
      ></Product>
      <Product
        name="Ultra keyboard"
        description="CL206 wired computer keyboard
        is super easy to use, it works instantly with any USB devices, no driver 
        needed, no need to worry about interference that breaks your connection."
        price="399"
      ></Product>
    </div>
  );
}

export default ProductRow;
