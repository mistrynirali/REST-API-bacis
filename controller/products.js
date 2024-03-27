const products = require("../model/products");


const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query
    const queryObject = {};

    if (company) {
        queryObject.company = company
    }
    if (featured) {
        queryObject.featured = featured
    }

    let apiData = products.find(queryObject)
    if (sort) {
        let sortFix = sort.split(",").join("")
        apiData = apiData.sort(sortFix)
    }
    if (select) { 
    //    let selectFix = select.replace(",", " ")
        let selectFix = select.split(",").join("")
        apiData = apiData.select(selectFix)
    }

    let page= Number(req.query.page) || 1 
    let limit = (req.query.limit) || 5

    let skip = (page-1) * limit

    apiData = apiData.skip(skip).limit(limit)
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    console.log(queryObject);
    const myData = await apiData

    res.status(200).json({ myData, nbHits: myData.length })
};

const getAllProductsTesting = async (req, res) => {
    const myData = await products.find({}).select("name company")
    res.status(200).json({ myData })
};

module.exports = { getAllProducts, getAllProductsTesting }