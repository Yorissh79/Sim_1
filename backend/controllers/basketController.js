import basketModel from "../models/basketModel.js";

const getBasket = async (req, res) => {
    const basket = await basketModel.find()
    res.json(basket)
}

const postBasket = async (req, res) => {
    const {name, image, price} = req.body
    const basket = {name, image, price}
    await basketModel.create(basket)
    res.json("geldi")
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await basketModel.findByIdAndDelete(id)
    res.json("silindi")
}

export { getBasket, postBasket, deleteBasket }