Assignment 3 MongoDB

Yue CHEN 
B00789515

Provide a simple .txt file containing the number of the exercise, the query and the results given by your queries;

2.1 EXERCISE: UNDERSTANDING DATA
Before starting with the queries look at data and provide a short description of them: the most
common structure of the documents (the most present attributes, nested documents, etc.).

The dataset contains a single table, every row is about infomation of one food. Column code is the key of a product. 
It includes infomation like nutrition, ingradients and so on.


2.2 EXERCISE: QUERYING DATA

1. (1 point) The number of products in the collection.
Query:
db.getCollection("openfoodfacts").distinct("code").length
Result:
4802




2. (1 point) The product that has Sharon’s, sorbet, dutch chocolate as name.
Query:
db.getCollection("openfoodfacts").find(
    {$or:[{"product_name" : /^.*Sharon\x{2019}s.*$/i},{"product_name" : /^.*sorbet.*$/i},{"product_name" : /^.*dutch chocolate.*$/i}]},
    {"code":"$code","product_name":"$product_name"})

Result: There are 7 products that has Sharon’s, sorbet, dutch chocolate as name. Showing below:
{ 
    "_id" : "0009073102048", 
    "code" : "0009073102048", 
    "product_name" : "Sharon's, sorbet, raspberry"
}
{ 
    "_id" : "0009073102079", 
    "code" : "0009073102079", 
    "product_name" : "Sharon's, sorbet, dutch chocolate"
}
{ 
    "_id" : "0009073102130", 
    "code" : "0009073102130", 
    "product_name" : "Sharon's, sorbet, mixed berry"
}
{ 
    "_id" : "0009073102222", 
    "code" : "0009073102222", 
    "product_name" : "Sharon's, sorbet, lemon"
}
{ 
    "_id" : "0009073102314", 
    "code" : "0009073102314", 
    "product_name" : "Sharon's, sorbet, coconut"
}
{ 
    "_id" : "0009073102772", 
    "code" : "0009073102772", 
    "product_name" : "Sorbet"
}
{ 
    "_id" : "0009073102963", 
    "code" : "0009073102963", 
    "product_name" : "Sharon's, sorbet, mango"
}



3. (1 point) How many times the product having 0009073102079 as _id has been modified. Pay attention: how do you match the value of the _id? Think about how to do and how you should have done this match in another context.
Query:
db.openfoodfacts.find({_id:"0009073102079"},{rev:1});

Result: 2 times modified
{ 
    "_id" : "0009073102079", 
    "rev" : NumberInt(2)
}



4. (1 point) The products that have the sodium in the nutriments list.
Query:
db.openfoodfacts.find({"nutriments.sodium_100g": {$exists: true}},
    {"code":"$code","product_name":"$product_name","sodium_100g":"$nutriments.sodium_100g"});

Result: There are 3417 products that have the sodium in the nutriments list. Showing 10 ones below:
{ 
    "_id" : "00", 
    "code" : "00", 
    "product_name" : "lignaform", 
    "sodium_100g" : 0.321056
}
{ 
    "_id" : "000", 
    "code" : "000", 
    "product_name" : "hemp seeds", 
    "sodium_100g" : 0.04
}
{ 
    "_id" : "0000", 
    "code" : "0000", 
    "product_name" : "لبن ندى", 
    "sodium_100g" : 0.04
}
{ 
    "_id" : "00000", 
    "code" : "00000", 
    "product_name" : "Pizza", 
    "sodium_100g" : 0.28300000000000003
}
{ 
    "_id" : "000000", 
    "code" : "000000", 
    "product_name" : "Pure whey isolat", 
    "sodium_100g" : NumberInt(0)
}
{ 
    "_id" : "00000000000", 
    "code" : "00000000000", 
    "product_name" : "Mediterranean Veggie Sandwich", 
    "sodium_100g" : NumberInt(126)
}
{ 
    "_id" : "0000000000000", 
    "code" : "0000000000000", 
    "product_name" : "Chocolat au lait", 
    "sodium_100g" : 0.12
}
{ 
    "_id" : "00000000000003429145", 
    "code" : "00000000000003429145", 
    "product_name" : "L.casei", 
    "sodium_100g" : 0.04
}
{ 
    "_id" : "0000000000017", 
    "code" : "0000000000017", 
    "product_name" : "Vitória crackers", 
    "sodium_100g" : 0.5599999999999999
}
{ 
    "_id" : "000000000003327986", 
    "code" : "000000000003327986", 
    "product_name" : "Filetes de pollo empanado", 
    "sodium_100g" : 0.44000000000000006
}



5. (1 point) The products that have the nutriscore_grade equal c.
Query:
db.openfoodfacts.find({"nutrition_grades_tags": {$eq: "c"}},
    {"code":"$code","product_name":"$product_name","nutrition_grades_tags":"$nutrition_grades_tags"});

Result: There are 287 products that have the nutriscore_grade equal c. Showing 10 ones below:
{ 
    "_id" : "00", 
    "code" : "00", 
    "product_name" : "lignaform", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "0000000005166", 
    "code" : "0000000005166", 
    "product_name" : "cuisse de poulet direct au four curry", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "0000000043595", 
    "code" : "0000000043595", 
    "product_name" : "Cranberries", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "000000022524", 
    "code" : "000000022524", 
    "product_name" : "Huile d'olive de Nîmes vierge extra", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "0000000290616", 
    "code" : "0000000290616", 
    "product_name" : "Salade Cesar", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "0000000356", 
    "code" : "0000000356", 
    "product_name" : "Huile d'olive vierge extra cuve magali", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "00000006", 
    "code" : "00000006", 
    "product_name" : "Riz au lait", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "0000001938067", 
    "code" : "0000001938067", 
    "product_name" : "Chaussons tressés aux pommes", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "00000038", 
    "code" : "00000038", 
    "product_name" : "Pizza prosciutto", 
    "nutrition_grades_tags" : [
        "c"
    ]
}
{ 
    "_id" : "0000005029525", 
    "code" : "0000005029525", 
    "product_name" : "Pain de mie sans gluten", 
    "nutrition_grades_tags" : [
        "c"
    ]
}



6. (1 point) How many different creators participated in the product creation.
Query:
db.openfoodfacts.distinct("creator").length;

Result: 
131



7. (2 points) How many creators have created more than one product.
Query:
db.openfoodfacts.aggregate([
     {"$group" : { 
             "_id" : {"creator" : "$creator"}, 
             "COUNT(code)" : {"$sum" : NumberInt(1)}}}, 
     {"$match" : {"COUNT(code)" : {"$gt" : NumberLong(1)}}}
     ]
).itcount();

Result:
51



8. (1 point) The product(s) the most recently modified.
Query:
db.openfoodfacts.find({}, 
    {"code" : "$code", "product_name" : "$product_name", "last_modified_t" : "$last_modified_t"})
    .sort({"last_modified_t" : NumberInt(-1)}).limit(1);

Result:
{ 
    "_id" : "000123456789", 
    "code" : "000123456789", 
    "last_modified_t" : NumberInt(1636317917)
}



9. (1 point) The products that have exactly 1 ingredient.
Query:
db.openfoodfacts.find({"ingredients_n": 1},
    {"code" : "$code", "product_name" : "$product_name", "ingredients_n" : "$ingredients_n"});

Result: There are 239 products that have exactly 1 ingredient. Showing 10 ones below:
{ 
    "_id" : "000", 
    "code" : "000", 
    "product_name" : "hemp seeds", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000016094", 
    "code" : "0000000016094", 
    "product_name" : "Organic Polenta", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000016117", 
    "code" : "0000000016117", 
    "product_name" : "Organic Long Grain White Rice", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000016612", 
    "code" : "0000000016612", 
    "product_name" : "Organic Adzuki Beans", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000016650", 
    "code" : "0000000016650", 
    "product_name" : "Organic Penne Pasta", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000016933", 
    "code" : "0000000016933", 
    "product_name" : "Organic Golden Flax Seeds", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000018050", 
    "code" : "0000000018050", 
    "product_name" : "Organic Hazelnuts", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000018197", 
    "code" : "0000000018197", 
    "product_name" : "Lotus Organic Brown Jasmine Rice", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000018227", 
    "code" : "0000000018227", 
    "product_name" : "Organic Oat Groats", 
    "ingredients_n" : NumberInt(1)
}
{ 
    "_id" : "0000000018371", 
    "code" : "0000000018371", 
    "product_name" : "Real Salt Granular", 
    "ingredients_n" : NumberInt(1)
}



10.   (2 points) The products that have 20 or more ingredients.
Query:
db.openfoodfacts.find({"ingredients_n": {$gte:20}},
    {"code" : "$code", "product_name" : "$product_name", "ingredients_n" : "$ingredients_n"});

Result: There are 681 products that have 20 or more ingredients. Showing 10 ones below:
{ 
    "_id" : "00000000001", 
    "code" : "00000000001", 
    "product_name" : "hyde icon", 
    "ingredients_n" : NumberInt(49)
}
{ 
    "_id" : "0000000001199", 
    "code" : "0000000001199", 
    "product_name" : "Solène céréales poulet", 
    "ingredients_n" : NumberInt(25)
}
{ 
    "_id" : "0000000003827", 
    "code" : "0000000003827", 
    "product_name" : "Suedois saumon", 
    "ingredients_n" : NumberInt(27)
}
{ 
    "_id" : "0000000005272", 
    "code" : "0000000005272", 
    "product_name" : "Sandwich solene céréales sicilien", 
    "ingredients_n" : NumberInt(31)
}
{ 
    "_id" : "0000000005470", 
    "code" : "0000000005470", 
    "product_name" : "BAguette bressan", 
    "ingredients_n" : NumberInt(28)
}
{ 
    "_id" : "0000000016124", 
    "code" : "0000000016124", 
    "product_name" : "Organic Muesli", 
    "ingredients_n" : NumberInt(36)
}
{ 
    "_id" : "0000000016872", 
    "code" : "0000000016872", 
    "product_name" : "Zen Party Mix", 
    "ingredients_n" : NumberInt(33)
}
{ 
    "_id" : "0000000018289", 
    "code" : "0000000018289", 
    "product_name" : "Antioxidant Mix - Berries & Chocolate", 
    "ingredients_n" : NumberInt(29)
}
{ 
    "_id" : "0000000018340", 
    "code" : "0000000018340", 
    "product_name" : "Fire Roasted Hatch Green Chile Almonds", 
    "ingredients_n" : NumberInt(23)
}
{ 
    "_id" : "0000000031233", 
    "code" : "0000000031233", 
    "product_name" : "35% Fruit And Fiber Muesli", 
    "ingredients_n" : NumberInt(26)
}



11.   (0,5 points)How many products are characterized as desserts (dessert is in the _keyword list).
Query:
db.openfoodfacts.find({"_keywords": "dessert"}).count();

Result:
47



12.    (0,5 points) How many products are characterized by chocolate (chocolate is in the_keyword list).
Query:
db.openfoodfacts.find({"_keywords": "chocolate"}).count();

Result:
536



13.   (1 point)How many products are characterized by chocolate and dessert (chocolate and dessert are in the _keyword list).
Query:
db.openfoodfacts.find({"$and": [{"_keywords": "dessert"},{"_keywords": "chocolate"}]}).count();

Result:
3



14.   (1 point) How many products are characterized by chocolate or dessert (chocolate or dessert are in the (_keyword list).
Query:
db.openfoodfacts.find({"$or": [{"_keywords": "dessert"},{"_keywords": "chocolate"}]}).count();

Result:
580



15.   (2 points) For the documents inside the collection provide a query that converts the
type of field categories from a String to an array and moves data into the new attribute
called new_att_category (each category as an element of the array.).

Query:
db.openfoodfacts.find({}).forEach(function(categories){
    db.openfoodfacts.update({"new_att_category": 0}, {$set: {"categories": parseInt(tmp.categories)}});
});

Result: NONE


16.   (2 points) How many products have nutriscore_grade equal to F and contain ingredients with palm-oil.
Query:
db.openfoodfacts.find({"$and": [{"nutriscore_grade": "f"},{"ingredients_from_palm_oil_n": {$gte:1}}]}).count();

Result: 
0
no product has nutriscore_grade equal to F and contains ingredients with palm-oil. 
This might because food with palm-oil is not likely to be evaluated as one without nutrition.