
addProduct = (req,res)=>{
  const db = req.app.get('db');
  let {url, name, price} = req.body;
  console.log(url + name + price)
  db.add_product([url, name, price]).then(response =>{res.sendStatus(200)}).catch(err=>{console.log(err)})
}

getSingleProduct=(req, res, next) =>{
  console.log('single product working')
res.send('single product working');
}

deleteProduct = (req,res, next) =>{
  console.log('delete product working');
  res.send('delete product working')
}


editProduct = (req, res, next) =>{
  console.log('edit product working');
  res.send('edit product working')
}


module.exports={
  addProduct,
  getSingleProduct,
  deleteProduct,
  editProduct
}