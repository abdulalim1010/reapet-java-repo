const products = [
  { name: "apple", brand: "applea", price: 30000, color: "black", country: "usa" },
  { name: "vivo", brand: "applea", price: 34000, color: "blue", country: "china" },
  { name: "xoumi", brand: "tawn", price: 90000, color: "red", country: "tawayan" },
  {
    name: "sumsung", brand: "handsom", price: 50000, color: "red", country: "italy"
  },
  {
    name:"symphony",brand:"sym",price:59999,color:"yellow",country:"germany"
  },
  {name:"techno",brand:"heavy",price:45599,color:"green",country:"india"}

]
/* const result=products.filter(product=>product.brand)
console.log(result)
const result=products.find(product=>product.brand==="applea")
console.log(result) */
/* const result=products.filter(product=>product.brand==="applea")
console.log(result) */
products.forEach(product=>console.log(product.country))