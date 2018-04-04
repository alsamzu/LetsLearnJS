var array;
function reverseString(str) {
 array = str.split("");
 array.reverse();
 str = array.join('');
 return str;
}

document.write(reverseString("and")); //returns "dna"