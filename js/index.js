// var game;
// window.onload = function (){
//     game = new Game("canvas");

//     game.start();
// }

function namesSorter (departmentsArray) {
      
     var arr = [].concat.apply([], departmentsArray);
    for (let i = 0; i < departmentsArray.length; i++) {
        
            arr = [].concat.apply([], arr);        
            
    }
     
     arr = arr.sort(function(a, b){
         if (a.length - b.length == 0)
            return a > b;
         return a.length - b.length;
     });
    return arr;
  }
//var myNewArray = [].concat.apply([], myArray);
//console.log(namesSorter([["pepe"],"Luis"]));
console.log(namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel", "AAAAAAAAA"], ["John", "Julia", "Brad", "George"]]));
//   describe("Function namesSorter", function(){
    
//     it ("returns an array", function(){
//       var arr = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]];
//       Test.expect(Array.isArray(namesSorter(arr)), "Is not returning an array");
//     });
    
//     it ("returns ['Brad', 'Juan'] when array is [['Juan'], ['Brad']]", function(){
//       Test.assertSimilar(namesSorter([['Juan'], ['Brad']]), ['Brad', 'Juan']); 
//     });
    
//     it ("returns [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ] when array is [['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]", function(){
//       Test.assertSimilar(namesSorter([['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]), [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ]); 
//     });
    
//     it ("returns [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ] when array is [['Pablo', 'Enrique', 'Josh', 'Juan', 'Gonzalo'], ['Michael', 'Alexander', 'Mikel', 'Ariel'], ['John', 'Julia', 'Brad', 'George']]", function(){
//       Test.assertSimilar(namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]), [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ]); 
//     });
//   });