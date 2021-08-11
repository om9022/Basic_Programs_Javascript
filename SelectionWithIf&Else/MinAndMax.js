let num1 = (Math.floor(Math.random() * 100) % 900) + 100 
let num2 = (Math.floor(Math.random() * 100) % 900) + 100 
let num3 = (Math.floor(Math.random() * 100) % 900) + 100 
let num4 = (Math.floor(Math.random() * 100) % 900) + 100 
let num5 = (Math.floor(Math.random() * 100) % 900) + 100 
console.log(num1, num2, num3, num4, num5)

// for maximum number
if ( num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 )
{
    console.log("maximum number is : "+num1)
}
if ( num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 )
{
    console.log("maximum number is : "+num2)
}
if ( num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 )
{
    console.log("maximum number is : "+num3)
}
if ( num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 )
{
    console.log("maximum number is : "+num4)
}
if ( num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4 )
{
    console.log("maximum number is : "+num5)
}

// for  minimum number
if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 )
{
    console.log("minimum number is : "+num1)
}
if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5 )
{
    console.log("minimum number is : "+num2)
}
if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5 )
{
    console.log("minimum number is : "+num3)
}
if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5 )
{
    console.log("minimum number is : "+num4)
}
if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4 )
{
    console.log("minimum number is : "+num5)
}
