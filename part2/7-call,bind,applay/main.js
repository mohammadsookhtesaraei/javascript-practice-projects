

// bind


var name="hasan";


function sayName(age){
    console.log(this.name,age);
};


const data={
    name:"ali"
}


sayName();

sayName=sayName.bind(data);

sayName();/* ali */

// call and applay
sayName.call(data,25);
sayName.apply(data,[30])