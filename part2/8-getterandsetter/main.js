

const data={
    firstName:"ali",
    lastName:"so",
    get fullName(){
    return `${this.firstName} ${this.lastName}`
    },

    set fullName(str){
        this.firstName=str.split(" ")[0],
        this.lastName=str.split(" ")[1]
    }
};


console.log(data.fullName);

data.fullName="amir So"

console.log(data);
