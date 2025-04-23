function outer(){
   let a = 10;
   console.log(this.a);
   if(true){
    let b = 20;
   
    
   }
   console.log(b);
    
}
outer();

console.log(this);

const person = {
    name: "Alice",
     const outer =()=> {
        console.log(this.name);
        
    }
}

const data = outer();
person.bind()