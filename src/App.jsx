import { useState } from "react"


function App() {
  let [item, setitem]=  useState({
    name : "Mighty Zinger",
    price : 450,
    disc : "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
    qty: 0
  })
  const addtocart= ()=>{
    let newitem= {...item}
    newitem.qty++
    setitem(newitem)
  }
  const minus= ()=>{
    let newitem= {...item}
    newitem.qty--
    setitem(newitem)

  }

  
 

  return (
    <>
<div>
 
  {/* As a heading */}
  <nav className="navbar bg-body-tertiary">
    <div className="container ">
      <span className="navbar-brand mb-0 h1">Cart={item.qty } / price={item.price * item.qty}</span>
    </div>
  </nav>
</div>





    <div className="container">
    <div className="card" style={{width: '18rem'}}>
  <img src="https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png" className="card-img-top" alt="https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png" />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.disc}</p>
    <h3>Price={item.price}</h3>
    <a disabled={item.qty===1} href="#" className="btn btn-primary " onClick={addtocart}>Add to cart</a>
    <div style={{margin:10}} className="btn btn-info " onClick={addtocart}>+</div>
    <button disabled={item.qty===0} type="button" class="btn btn-info" onClick={minus}>-</button>
  </div>
</div>
</div>

    </>
  )
}

export default App
