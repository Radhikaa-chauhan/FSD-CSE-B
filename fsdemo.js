import fs from "fs"

// const data = fs.readFileSync("data.txt", "utf-8")
// console.log(data)
// fs.appendFileSync("data.txt", "\nThis is new data,Hi")
// const newData = fs.readFileSync("data.txt", "utf-8")
// console.log(newData);
// fs.unlinkSync("data.txt")

// fs.readFile("data.txt","utf-8",(err,data)=>{
//   if(err){
//     console.log("Error",RegExp.message);
//   }
//   else{
//     console.log(data);
//   }
// })
// const newData = "\nThis is new data";
// fs.writeFile("data.txt",newData,(err,data)=>{
//   if(err){
//     console.log("error",err.message);
//   }
//   else{
//     console.log("Data written successfully");
//   }
// })

async function readData(){
  try{
    const data= await fs.readFile("data.txt","UTF-8");
    console.log("Data",data);
  }
  catch(err){
    console.log("Error",err.message);
  }
}
readData();
async function saveData(myData) {
  try {
    await fs.writeFile("data.txt", myData, "UTF-8");
    console.log("Data written successfully");
  } catch (err) {
    console.log("Error:", err.message);
  }
}
saveData("This is new data"); 