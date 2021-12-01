select * from openfoodfacts limit 1;
select id, code, product_name from openfoodfacts where id != code;
select product_name, count(product_name) from openfoodfacts group by product_name having count(product_name)>1;
select id, code, product_name from openfoodfacts where product_name = 'Salmon filetes';
select count(*) from openfoodfacts;
select product_name, count(product_name) from openfoodfacts group by product_name having count(product_name)>1
select product_name, interface_version_modified from openfoodfacts where product_name = 'Milk Chocolate Truffles';
select count(*) from openfoodfacts where id != code;
select count(id) from openfoodfacts where _id != id;





select count(code) from openfoodfacts;

select code, product_name from openfoodfacts where product_name like '%Sharon’s%' or product_name like '%sorbet%' or product_name like '%dutch chocolate%'

select count(last_modified_t) from openfoodfacts where _id = '0009073102079' group by _id

select distinct nutriments from openfoodfacts;

select distinct nutrition_grades_tags from openfoodfacts;

select distinct creator from openfoodfacts;

select creator, count(code) from openfoodfacts group by creator having count(code) > 1;

select code, product_name, last_modified_t from openfoodfacts order by last_modified_t desc limit 1;

select ingredients from openfoodfacts limit 10;

select _keywords from openfoodfacts limit 100;

select categories from openfoodfacts;

select nutriscore_grade from openfoodfacts where ingredients_from_palm_oil_n >=1
