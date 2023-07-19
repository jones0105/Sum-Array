var sum=[5,6,20,22,29,30,40,45];
var a=0;
var b;
 document.write("The Given array is"+sum);
 document.write("<br>");
for (let i=0;i<sum.length;i++)
{	 
    a=a+sum[i];
	b=a/sum.length;
}
document.write("Total is: "+a);
document.write("<br>");
document.write("Average is; "+b);	