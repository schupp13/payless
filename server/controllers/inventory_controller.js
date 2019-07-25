getInventory = (req, res, next) =>{
  const db = req.app.get('db');
  db.get_inventory().then(response =>{
    res.status(200).send(response)
  })
console.log("getInventory working")

}

module.exports = {
  getInventory
}