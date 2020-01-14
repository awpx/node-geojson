const Store = require('../db/StoresSchema');
const { mongo } = require('mongoose');

//@desc GET all strores data in db
//@route GET /api/v1/stores
//@access public

exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' })
  }

};

//@desc Add(POST) a store to db
//@route GET /api/v1/stores
//@access public

exports.addStores = async (req, res, next) => {
  try {
    //save the data to db and return the data
    const store = await Store.create(req.body);

    return res.status(200).json({
      success: true,
      data: store
    })

  } catch (error) {
    console.error(error);
    if(error.code === 11000) {
      return res.status(400).json({ error: 'This store already exist' })
    }

    res.status(500).json({ error: 'Server error' })
  }

};