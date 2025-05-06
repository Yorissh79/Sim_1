import productModel from "../models/productModel.js";

const getProduct = async (req, res) => {
    const products = await productModel.find()
    res.json(products)
}

const postProduct = async (req, res) => {
    const {name, image, price} = req.body
    const products = {name, image, price}
    await productModel.create(products)
    res.json("geldi")
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    await productModel.findByIdAndDelete(id)
    res.json("silindi")
}

export { getProduct, postProduct, deleteProduct }