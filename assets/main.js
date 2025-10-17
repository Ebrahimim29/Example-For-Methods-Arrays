//--------- Example 1:
function Character(name, power) {
    this.name = name;
    this.power = power;
}

// تعریف متد روی پروتوتایپ
Character.prototype.attack = function () {
  console.log(`${this.name} attacks with power ${this.power}`);
};

//ایجاد چند کاراکتر
const hero = new Character("Hero", 50);
console.log(hero); //خروجی آبجکت می باشد
const villain = new Character("Villain", 40);
console.log(villain); //خروجی آبجکت می باشد

//استفاده از متد attack روی هر نمونه
hero.attack();
villain.attack();

// اضافه کردن یک متد جدید روی پروتوتایپ بعد از ساخته شدن آبجکت‌ها
Character.prototype.heal = function () {
  console.log(`${this.name} heals and regains energy`);
};

hero.heal();
villain.heal();

//--------- Example 2:
const magicBox = {spell: "Fireball", energy:1000};

//Destructuring with Default Values=Duration
const {spell , energy , duration = 50} = magicBox;

console.log(`Casting ${spell} with ${energy} energy for ${duration} seconds`);
;

//--------- Example 3:
const scores = {nima:20 , mohammad:30 , sara:10};
console.log(Object.entries(scores));

//Object.entries:
Object.entries(scores).forEach(([name,score])=>{
    console.log(`${name} : ${score}`);    
});

//پیدا کردن بیشترین امتیاز
let topName = null;
let topScore = 0;
Object.entries(scores).forEach(([name,score])=>{
    if(score > topScore){
        topScore = score;
        topName = name;
    }
});
console.log(`${topName} has the highest score of ${topScore}`);

//---------Example 4:
const settings = {sound: true, difficulty:"hard", controls: {jump:"space"}};

//StructuredClone:
const clone = structuredClone(settings);
clone.controls.jump = "shift";

console.log("Original:", settings.controls.jump);
console.log("Clone:", clone.controls.jump);



