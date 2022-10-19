const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

const cartRoute = require('./src/routes/cartRoute');
const categoryRoute = require('./src/routes/categoryRoute');
const colorRoute = require('./src/routes/colorRoute');
const countryFabricationRoute = require('./src/routes/countryFabricationRoute');
const marqueRoute = require('./src/routes/marqueRoute');
const productRoute = require('./src/routes/productRoute');
const sizeRoute = require('./src/routes/sizeRoute');
//const subCategoryRoute = require('./src/routes/subCategoryRoute');


require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err));

app.listen(process.env.PORT, ()=>{
    console.log("app running");
});

app.use("/cart/",cartRoute);
app.use("/category/",categoryRoute);
app.use("/color/",colorRoute);
app.use("/countryfabrication/",countryFabricationRoute);
app.use("/marque/",marqueRoute);
app.use("/product/",productRoute);
app.use("/size/",sizeRoute);
//app.use("/subcategory/",subCategoryRoute);