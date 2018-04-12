function reverseString() {
    var sme=prompt("enter a Sentense");
    revArr = sme.split(" ");
 revArr.reverse();
 sme = revArr.join(' ');
 document.write(sme);    
 return sme;
   
}

reverseString();