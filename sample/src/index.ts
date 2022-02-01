let b : boolean = true;
if(b){
    console.log("hello");
}

let x:number = 22;
//------------

interface profile{
    name:string,
    age?:number
}

let person1 : profile = {name:"shanker"}

console.log(person1.name);

//Index signature

interface A{
    [key:string]:string|number
    
    
}

let a : A ={prop:"someprop"};

console.log(a);

//call Signature

interface B{
    (a:number,b:number):number;
    someprop:string
}

const lol : B = (a,b)=>a*b;
lol.someprop = 'Shanker';

console.log(lol(2,4),lol.someprop)

//extending interface
interface Parent{
    [key:string] : string|number;
}
interface parent1{
    shawn : String
}

interface child extends parent1,parent1{

}
const ch : child = {shawn:"ss"};
//-----------------------

function calcArea(...args:number[]):number{
    if(args.length==2){
        return args[0]*args[1];
    }else{
        return args[0]*args[0];
    }

}

console.log(calcArea(2));

class Robot{

    private static availablecolors = ['yellow','red'];

    static isColorAvailable(color : string):boolean{
        return Robot.availablecolors.includes(color);
    }

    constructor(public _name:string){     
    }

    askName(){
        console.log(`My name is ${this._name}`);
    }

    move(distance:number){
        console.log(`The robot ${this._name} moved ${distance}`);
    }

    setname(value : string){
        this._name = value;
    }

    getname() {
        return this._name ;
    }


}

class FlyingRobot extends Robot{
    constructor(_name : string ,private _booster : number){
        super(_name);
        this.booster = _booster;
    }

    get booster(){
        return this._booster;
    }
    set booster(num:number){
        this._booster = num;
        
    }
}

const robot = new Robot("shanker");
robot.askName();

const myrob = new FlyingRobot("Kalyan",2);
console.log(myrob.booster);

class SwimmingRobot extends Robot{
    private swim:number;
    constructor(_name:string,_swim:number){
        super(_name);
        this.swim = _swim;
    }

    getswim(){
        return this.swim;
    }
    setswim(swimm:number){
        this.swim = swimm;
    }
}

const sbot = new SwimmingRobot("Vineet",3);

console.log(sbot._name);
console.log(sbot.getswim())



function genericFunction<T>(x : T) : T{
    return x;

}

const arrowfunction = <T>(x:T): T => x;

// Generic interface::
interface GenericInterface<T>{
    (a:T):T;
    someProp : T;
}

//Generic Classes:
class GenericClass<T>{
    constructor(public props:T){

    }

    getProps():P{
        return this.props;
    }
    
}

interface Expirable{
    expiryDate:Date;
}

interface ChocolateCake extends Expirable{}

interface VanillaCake extends Expirable{}

const chocoCakes : ChocolateCake[] = [{expiryDate:new Date()}];
const vanillaCakes: VanillaCake[]=[{expiryDate:new Date()}];

interface GetExpiredItems<Items extends Expirable>{
    (items:Array<Items>):Array<Items>;
}

const getExpiredItems : GetExpiredItems= items =>{
    const currdate = new Date().getTime();
    return items.filter(item=>item.expiryDate.getDate()<currdate);
}

const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);


