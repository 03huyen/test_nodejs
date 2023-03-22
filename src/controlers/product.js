import axios from "axios";

import Product from "../models/product";

export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json({
            message: "Tao sp thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(201).json(products)
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const update = async (req, res) => {
    try {
        const product = await Product.findOneAndRemove({ _id: req.params.id }, req.body, { new: true });
        return res.json({
            message: "Cap nhap thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id });
        return res.json({
            message: "Xoa thanh cong",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};