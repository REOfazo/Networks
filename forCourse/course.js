

function enableShadowBox() {
    document.getElementById("shadowBox").style.display = "block";
}
function shadowBoxCancel() {
    document.getElementById("shadowBox").style.display = "none";
}
function anastasia() {
    enableShadowBox();
    document.getElementById("innerImg").src="main_image2.jpeg";
    document.getElementById("innerH3").innerHTML="Anastasia Claiman";
    document.getElementById("innerP").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sapiente eligendi? Deserunt error nobis at iusto aliquid placeat, dolor accusamus.";
    document.getElementById("phoneNumber").innerHTML="+998-90-100-10-10";
}
function robert() {
    enableShadowBox();
    document.getElementById("innerImg").src="main_image3.jpeg";
    document.getElementById("innerH3").innerHTML="Robert Bush";
    document.getElementById("innerP").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sapiente eligendi? Deserunt error nobis at iusto aliquid placeat, dolor accusamus.";
    document.getElementById("phoneNumber").innerHTML="+998-99-900-90-90";
}
function suizan() {
    enableShadowBox();
    document.getElementById("innerImg").src="main_image4.jpg";
    document.getElementById("innerH3").innerHTML="Suizan Salamon";
    document.getElementById("innerP").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sapiente eligendi?";
    document.getElementById("phoneNumber").innerHTML="+998-93-300-30-30";
}
function elezavetta() {
    enableShadowBox();
    document.getElementById("innerImg").src="bg_image11.webp";
    document.getElementById("innerH3").innerHTML="Elezavetta Patrson";
    document.getElementById("innerP").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sapiente eligendi?";
    document.getElementById("phoneNumber").innerHTML="+998-97-700-70-70";
}







/*

var salaries = {
    "Akmal":1200,
    "Salim":5200,
    "Karima":1800
}

console.log(sumSalaries(salaries))

function sumSalaries(salaries) {
    console.log(salaries.Akmal)
}


let a = []

arrayMethods()

function arrayMethods() {
    console.log(arrayPush())
    console.log(arrayShift())
    console.log(arrayUnshift())
    console.log(centralItem())
}
function centralItem() {
    return (a[Math.floor(a.length/2)])
}
function arrayPush() {
    a.push(1)
    a.push(2)
    a.push(3)
    a.push(4)
    return a
}
function arrayShift() {
    a.shift()
    return a
}
function arrayUnshift() {
    a.unshift(0)
    return a
}


nimadur()

function nimadur() {
    let s = ["Jazz", "Blues"]
    let k = Math.floor(s.length/2)
    console.log(s)
    s.push("Rock-n-roll")
    s[k] = "Classic"
    console.log(s)
    s.shift()
    console.log(s)
    s.unshift("Rap")
    s.unshift("Reggae")
    console.log(s)
}




alert(sumInput())

function sumInput() {

    let a = []
    let sum = 0;
    let equals = true;

    while(equals) {
        let son = prompt("Enter number: ")
        if(son != "" && son !== null && !isNaN(son)) {
            a.push(son)
        }else {
            alert("Exit code 0")
            equals = false
        }
    }
    for(let i=0; i<a.length; i++){
        sum += parseInt(a[i])
    }

    return sum
}
*/