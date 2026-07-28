

// multi selectors  = select group tag in js 


//1. document.querySelectorAll()
// 2.document.getElementsByClassName()
// 3.document.getElementsByTagName()
//4.document.getElementsByName()

// 1. document.querySelectorAll()

const allBox=document.querySelectorAll(".box");
console.log(allBox); /* nodeList[] */
console.log(allBox[0]);
console.log(allBox[1]);

allBox.forEach((item)=>{
    item.style.color="red"
});


const alltext=document.querySelectorAll(".box2 p");
console.log(alltext);
alltext.forEach((item)=>{
    if(item.textContent==="text1"){
        item.style.color="red"
    }else {
        item.style.color="blue"
    }
});

// node  چیه؟
// هر گره ای در درخت دام میشه نود
// Document
// │
// └── html
//     │
//     └── body
//         │
//         └── div
//             ├── h1
//             │    └── "Hello"
//             └── p
//                 └── "World"

// Document
// Element (div, h1, p)
// Text (Hello)
// Comment   all these are node


// پس وقتی چندتا المان رو سلکت می کنیم میاد داخل یک ارایه قرار میده به اسم نود لیست
//  یک ابجکت شبیه به ارایه است.

// به تگ میکن المنت نود
// به متن تگ میگن تکست نود

// childNodes  -  میاد تمام نود های یک المان سلکت شده رو داخل یک ارایه نشون میده مثل متن المنت کامنت ویک نودلیست میده
// children - فقط المان هارو میده  مثل داخل یک ذیو اگه یک متن سلام داشته باشیم با یک اسپن فقط اسپن رو میده چون سلام یک نود تکست است


// روی اچ تی ام ال کالکشن نمیشه فور ایچ زد
// باید تبدیلش کینم به یک ارایه
// ولی میشه از حلقه فور اف استفاده کرد

// 2.document.getElementsByClassName()

const allHeading=document.getElementsByClassName("heading"); /* فقط اچ تی ام ال کالکشن بر میگردونه */
const allHeading2=document.querySelectorAll(".heading");

console.log(allHeading);/* HTMLCollection []*/
console.log(allHeading2);/* nodeList[] */
console.log(allHeading[0].children);/* خالی هست چرا چون فقط داخلش متن هست نه یگ تگ اچ تی ام ال و چیلدرن ارایه ای از تگهارو میده فقط */
console.log(allHeading2[0].childNodes[0].nodeValue.toUpperCase());/* چون نود ایست ایندکس صفرش باز یک لایه داخلش نود لیست ایندکس صفر چون تکست نوده باید ولیو بزنیم چ.ن رید اونلی هستن */


// 3.document.getElementsByTagName()

const h2=document.getElementsByTagName("h2");
console.log(h2);/* htmlCollection[] */
console.log(h2[0].children);/* [] */
console.log(h2[0].childNodes[0].nodeValue);


// 4.document.getElementsByName()

const allNames=document.getElementsByName("gender");
console.log(allNames);
console.log(allNames[0].childNodes);/* [] */
console.log(allNames[0].children);/* [] */
console.log(allNames[0].attributes.name.name);


