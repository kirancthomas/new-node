var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/prodect-helpers')


/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [{
    name: "IPHONE 15 PRO MAX",
    category: "Mobile",
    description: "all new iphone 15 series",
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312",
      
  },
  {
    name: "IPHONE 15 PLUS",
    category: "Mobile",
    description: "all new iphone 15 series",
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290559"

  },
  {
    name: "IPHONE 14 ",
    category: "Mobile",
    description: "all new iphone 14 series",
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290654"

  },
  {
    name: "IPHONE 13 ",
    category: "Mobile",
    description: "all new iphone 13 series",
    image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1692912410963"

  },
]

  res.render('admin/view-products',{admin:true,products})
});

router.get('/add-product',(function(req,res){
  res.render('admin/add-product')

}));

router.post('/add-product',(req,res)=>{
  let detail=req.body;
  console.log(detail);

  let image= req.files.image;
  console.log(image);
  
  


  productHelper.addProuct(detail,(result)=>{
    image.mv('../public/images'+'.jpg',(err,data)=>{
      if(!err){
        res.render('admin/add-product')

      }else{console.log(err)}
    })
    
  })

})

module.exports = router;
