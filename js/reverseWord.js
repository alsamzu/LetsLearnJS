function reverseString() {
    var sme=prompt("Enter a Sentense");
    revArr = sme.split(" ");
 revArr.reverse();
 sme = revArr.join(' ');
 document.write(sme);    
 return sme;
   
}

reverseString();