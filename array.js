const products = [
  { name: "apple", brand: "applea", price: 30000, color: "black", country: "usa" },
  { name: "vivo", brand: "chin", price: 34000, color: "blue", country: "china" },
  { name: "xoumi", brand: "tawn", price: 90000, color: "red", country: "tawayan" },
  {
    name: "sumsung", brand: "handsom", price: 50000, color: "red", country: "italy"
  },
  {
    name:"symphony",brand:"sym",price:59999,color:"yellow",country:"germany"
  },
  {name:"techno",brand:"heavy",price:45599,color:"green",country:"india"}

]
const result=products.map(product=>product.brand)
console.log(result)