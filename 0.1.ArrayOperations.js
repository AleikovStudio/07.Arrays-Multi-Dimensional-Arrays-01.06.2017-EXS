//.filter - filtrira po opredelena funkciya ili svoistvo masiva:
let masiv = [20, 30, 40, 50, 1, 30, 54, 100, 5];
let filterM = masiv.filter(x=>x % 10 == 0);
console.log(filterM);
filterM = filterM.filter(x=>x < 50);
console.log(filterM);
filterM = filterM.map(x=>"the number " + (100 * x));
console.log(filterM);

let masivTwo = ["one", "two", "three", "four", "five"];
let masivThree = masivTwo.filter(x=>x.startsWith("t"));
console.log(masivThree.join("|"));

//.join - zalepya gi+stringosva:
let nums = [10, 20, 30];
console.log(nums.join("|"));

//.push - dobavya element otzad/otdyasno:
nums.push(40);
console.log(nums.join("|"));

//.pop - vrashta nai-krainiya desen element:
let tail = nums.pop();
console.log(nums.join("|"));

//.shift - vrashta nai-parviya lyav element = protivopolojno na .pop:
let firstEl = nums.shift();
console.log(firstEl);

//.unshift - dobavya element nai-vlyavo = protivopolojno na .push:
let otlyavo = nums.unshift(333);
console.log(otlyavo);
console.log(nums);

//.slice - otryazva - element ot do - ako kajesh ot 1-viya do 20-tiya - ti vadi ot parviya do 19-tiya
let sliceEl = nums.slice(2, 3);
console.log(sliceEl);

//.splice - hem vadi parche - hem go izstriva ot originala + moje da maha + dobavya na tyahno myasto neshto drugo:
let arrN = [20, 40, 10, 30, 100, 5];
let spliceN = arrN.splice(1, 5);
console.log(spliceN);
console.log(arrN);

let arrNTwo = [20, 40, 10, 30, 100, 5];
let spliceAndReplace = arrNTwo.splice(1, 3, -1, -2, -3);
console.log(spliceAndReplace);
console.log(arrNTwo);

//.sort - sortira - no mu tryabva komparator:
let nomera = [20, 40, 10, 30, 100, 5];
nomera.sort((a, b)=>a - b);//po vazhodyasht red
console.log(nomera);
nomera.sort((a, b)=>b - a);//v nizhodyasht red
console.log(nomera);