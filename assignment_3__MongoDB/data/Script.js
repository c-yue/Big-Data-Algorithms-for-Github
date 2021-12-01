db.getCollection("openfoodfacts").find({});

db.openfoodfacts.distinct("product_name").length;

db.openfoodfacts.count("code");
db.openfoodfacts.distinct("code").length;






db.getCollection("openfoodfacts").distinct("code").length

db.getCollection("openfoodfacts").find(
    {$or:[{"product_name" : /^.*Sharon\x{2019}s.*$/i},
        {"product_name" : /^.*sorbet.*$/i},
        {"product_name" : /^.*dutch chocolate.*$/i}]
    },
    {"code":"$code","product_name":"$product_name"})


db.openfoodfacts.find({_id:"0009073102079"},{rev:1});
   
db.openfoodfacts.find({"nutriments.sodium_100g": {$exists: true}},
    {"code":"$code","product_name":"$product_name","sodium_100g":"$nutriments.sodium_100g"});
    
db.openfoodfacts.find({"nutrition_grades_tags": {$eq: "c"}},
    {"code":"$code","product_name":"$product_name","nutrition_grades_tags":"$nutrition_grades_tags"});

db.openfoodfacts.distinct("creator").length;

db.openfoodfacts.aggregate([
     {"$group" : { 
             "_id" : {"creator" : "$creator"}, 
             "COUNT(code)" : {"$sum" : NumberInt(1)}}}, 
     {"$match" : {"COUNT(code)" : {"$gt" : NumberLong(1)}}}
     ]
).itcount();

db.openfoodfacts.find({}, 
    {"code" : "$code", "product_name" : "$product_name", "last_modified_t" : "$last_modified_t"})
    .sort({"last_modified_t" : NumberInt(-1)}).limit(1);

db.openfoodfacts.find({"ingredients_n": 1},
    {"code" : "$code", "product_name" : "$product_name", "ingredients_n" : "$ingredients_n"});

db.openfoodfacts.find({"ingredients_n": {$gte:20}},
    {"code" : "$code", "product_name" : "$product_name", "ingredients_n" : "$ingredients_n"});

db.openfoodfacts.find({"_keywords": "dessert"}).count();

db.openfoodfacts.find({"_keywords": "chocolate"}).count();

db.openfoodfacts.find({"$and": [{"_keywords": "dessert"},{"_keywords": "chocolate"}]}).count();

db.openfoodfacts.find({"$or": [{"_keywords": "dessert"},{"_keywords": "chocolate"}]}).count();

db.openfoodfacts.find({}).forEach(function(categories){
    db.openfoodfacts.update({"new_att_category": 0}, {$set: {"categories": parseInt(tmp.categories)}});
});


db.openfoodfacts.find({"$and": [{"nutriscore_grade": "f"},{"ingredients_from_palm_oil_n": {$gte:1}}]}).count();
db.openfoodfacts.find({"$and": [{ "ingredients_from_palm_oil_n": {$gte:1}},{"nutriscore_grade": /.*f.*/i}]}).count()


