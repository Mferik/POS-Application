const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();

//! faturaları oluşturma
router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Fatura başarıyla eklendi.");
  } catch (error) {
    res.status(500).json(error);
  }
});

//! faturaları getirme

router.get("/get-all", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills)
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;
