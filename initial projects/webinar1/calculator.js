function squareNumber(num){
    var result = Math.pow(num, 2);
    result = Number(Math.round(result+'e2')+'e-2');
    console.log("The result of squaring the number " + num + " is " + result + ".");
    return result;
}

function halfNumber(num){
    var result = num/2;
    result = Number(Math.round(result+'e2')+'e-2');
    console.log("Half of " + num + " is " + result + ".");
    return result;
}

function percentOf(num1, num2){
    var percent = (num1 * 100)/num2;
    //percent = Number(Math.round(percent+'e2')+'e-2');
    console.log(num1 + " is " + percent + "% of " + num2 + ".");
    return percent;
}

function areaOfCircle(radius){
    var area = 3.14 * (Math.pow(radius, 2));
    area = Number(Math.round(area+'e2')+'e-2');
    console.log("The area for a circle with a radius " + radius + " is " + area);
    return area;
}

function main(num){
    percentOf(areaOfCircle(squareNumber(halfNumber(num))), squareNumber(areaOfCircle(squareNumber(halfNumber(num)))));
}

main(2);