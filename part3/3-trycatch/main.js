

const getarr=(arr)=>{
    console.log(arr.join(","));
};


try{
getarr(["hello my name is Ali"])
}catch(error){
// console.log(error);
console.log("error");
throw {message:"we have an error"}
}finally{
    console.log("finish");
}