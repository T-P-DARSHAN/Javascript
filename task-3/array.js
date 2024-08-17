//arrray constructor
// const favmov=new array (
//     'leo',
//     'vikram',
//     'goat'
//     ,3,true,)

                        // array destructor
const favv=[
    'leo',
    'vikram',
    'goat'
    ,3,true,
]
console.log(favv);
//accessing values
console.log(favv[2]);
console.log(favv[3]);
        //  array with objects
const foods=[
    {id:1,title: 'biriyani',diet:'non-veg'},
    {id:2,title: 'lemon-rice',diet:'veg'},
    {id:3,title: 'Sambar',diet:'veg'}
]

// console.log(foods);
// console.log(foods[0]);
// console.log(foods[2].title); //to get an object's title

//const res=document.getElementById('result').innerHTML=foods[0].title;

// for(let i=0;i<foods.length;i++){
//     console.log('food -item -',foods[i].title);
// }

// //using for in loop
// for(let foodItem in foods){
    //     console.log(foods[foodItem].title);
// }

// //using for of loop
// for(let item of foods){
    //     console.log(item.title);
    // }
    
//using for each

foods.forEach(food=>{
    document.getElementById('result').innerHTML+='<li>'+food.title + '</li>'
})

//multidimensional array

const matrix=[
    [1,2,3],
    [4,[6,6,4],6],
    [7,8,9],
]
console.log(matrix);
console.log(matrix.flat());
console.log(matrix.flat(2)); //to go deeper


const sub=['Physics','Maths','English','Science'];
