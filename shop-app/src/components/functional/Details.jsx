import { useNavigate } from "react-router-dom";

const Details = ({product}) => {
    //used to change page after customer successfully adds item to cart
    const navigate = useNavigate();

    //if a cart already exists, use it. else, cart is an empty array
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(cart)
    //used to test if the item is in the cart later
    const productInView = cart.filter(item => item.id === product.id)

    function addToCart(){
        //if the product is already in cart, do this
        var qty = document.getElementById("qty").value
        if(qty === "" || qty==="0"){
            alert("Enter a value greater than 0!")
            return
        }
        if(productInView.length > 0){
            cart.forEach(element => {
                if(element.id === product.id){
                    element.qty = Number(element.qty) + Number(qty)
                }
            });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Quantity Added to Cart")
            navigate('/list')
        }
        //else, do this
        else{
            cart.push({id: product.id, name: product.name, price: product.price, qty: Number(document.getElementById("qty").value)})
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Item Added to Cart")
            navigate('/list')
        }
    }
    return(
        <div>
            <div className="Details_Image_Container">
                <img src={product.image} alt={product.name}></img>
            </div>
            <div className="Details_Item_Details">
                <h3>{product.name}</h3>
                <p>Price: {product.price} </p>
                <p>Description: {product.description} </p>
                <div className="Details_Add_To_Cart">
                    <input type="number" id="qty" min="1"></input>
                    <button id="add_to_cart" onClick={()=>addToCart()}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Details;