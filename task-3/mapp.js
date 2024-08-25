const foods=[
    {id:1,title: 'biriyani',diet:'non-veg',title:'mutton biriyani'},
    {id:2,title: 'lemon-rice',diet:'veg'},
    {id:3,title: 'Sambar',diet:'veg'}
]

//map
const maagi=new Map() //constructor

maagi.set("water","2.5 glass");
maagi.set("Massla",1);
maagi.set("salt",'0.5 spoon');
maagi.set("chilly",'1 spoon');
console.log(maagi.get('Massla'));
console.log(maagi);
 
//direct defining
// const mymap=new Map([
//     [1,'one'],
//     [2,'two'],
//     [3,'three']
// ])
// console.log(mymap.get(2)); 

console.log("size:"+maagi.size);
console.log("has:"+maagi.has('salt')); //to check the given
// maagi.clear();
// console.log(maagi);

// console.log(maagi.entries());

// for(let i of maagi.entries()){
//     console.log(i);
// }
 
// maagi.forEach(i=>{
//     console.log(i);
// })

console.log(maagi.keys());
console.log(maagi.values());

