// list all the food items
let data=require('./food.json');
data.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with category vegetables
let a=data.filter(food=>food.category==='Vegetable');
a.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with category fruit
let b=data.filter(food=>food.category==='Fruit')
b.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with category protien
let c=data.filter(food=>food.category==='Protein')
c.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with category nuts
let d=data.filter(food=>food.category==='Nuts')
d.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with category grains
let e=data.filter(food=>food.category==='Grain')
e.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with category dairy
let f=data.filter(food=>food.category==='Dairy')
f.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with calorie above 100
let g=data.filter(food=>food.calorie>100)
g.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with calorie below 100
let h=data.filter(food=>food.calorie<100)
h.forEach((food)=>{
    console.log(food.foodname);
});


// list all the food items with highest protien content to lowest
data.sort((a,b)=>{return b.protiens - a.protiens})
data.forEach((food)=>{
    console.log(food.foodname);
})


// list all the food items with lowest cab content to highest
 data.sort((a,b)=>{return a.cab - b.cab})
 data.forEach((food)=>{
    console.log(food.foodname);
})