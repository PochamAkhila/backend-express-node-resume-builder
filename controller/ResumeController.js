const ResumeModels = require("../model/ResumeModel");

const getData = async function (req, res, next) {
    try {
        const data = await ResumeModels.find({});
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

const getSingleData = async function (req, res, next) {
    try {
        // id = req.params.id;
        const data = await ResumeModels.findById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(err);
    }
};

const createData = async function (req, res, next) {
    try {
        const data = new ResumeModels(req.body);
        const createData = await data.save();
        res.status(200).send(createData);
    } catch (err) {
        res.status(400).send(err);
    }
};

const updateData = async function (req, res, next) {
    try {
        const data = await ResumeModels.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!data) {
            return res.status(404).send();
        }
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
};

const deleteData = async function (req, res, next) {
    try {
        const data = await ResumeModels.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).send();
        }
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { getData, getSingleData, createData, updateData, deleteData };
