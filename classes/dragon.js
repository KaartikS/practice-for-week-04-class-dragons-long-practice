// Your code here
class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...args){
    let dragonNames = [];
    args.forEach(element => {
      if(element instanceof Dragon){
        dragonNames.push(element.name);
      }
    })
    return dragonNames;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}