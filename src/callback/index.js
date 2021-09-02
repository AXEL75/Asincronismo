function suma (num1,num2) {
    return num1 + num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(6,2,suma));

function date(callback) {
    console.log("Fecha 1 " + new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(datenow){
    console.log("Fecha 2 " + datenow);
}

date(printDate);

//Callbacks

const value = () => { return 10 }

// Sin callback
const withOutCallback = () => {
	let x = 2;
	return x + value();
}

// Con callback
const withCallback = (callback) => {
	let x = 2;
	return x + callback();
}

console.log(withOutCallback());
console.log(withCallback (value));
