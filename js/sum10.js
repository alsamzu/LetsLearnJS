function d(){
checkarr=[];
    for(i=0;i<4;i++){
        var num=checkarr.push(prompt("Enter a number"));

    }
     var check =0;
    for(j=0;j<checkarr.length;j++){

           var a = parseInt(checkarr[0])+parseInt(checkarr[0]);
        var b = parseInt(checkarr[0])+parseInt(checkarr[1]);
        var c = parseInt(checkarr[0])+parseInt(checkarr[2]);
        var d = parseInt(checkarr[0])+parseInt(checkarr[3]);

        var e = parseInt(checkarr[1])+parseInt(checkarr[0]);
        var f = parseInt(checkarr[1])+parseInt(checkarr[1]);
        var g = parseInt(checkarr[1])+parseInt(checkarr[2]);
        var h = parseInt(checkarr[1])+parseInt(checkarr[3]);

        var i = parseInt(checkarr[2])+parseInt(checkarr[0]);
         var j = parseInt(checkarr[2])+parseInt(checkarr[1]);
         var k = parseInt(checkarr[2])+parseInt(checkarr[2]);
         var l = parseInt(checkarr[2])+parseInt(checkarr[3]);

         var m = parseInt(checkarr[3])+parseInt(checkarr[0]);
        var n = parseInt(checkarr[3])+parseInt(checkarr[1]);
        var o = parseInt(checkarr[3])+parseInt(checkarr[2]);
        var p = parseInt(checkarr[3])+parseInt(checkarr[3]);


        if(a==10 ){

        alert("numbers"+checkarr[0]+"and"+checkarr[0]);

        }
        else if(b==10 ){

        alert("numbers"+checkarr[0]+"and"+checkarr[1]);

        }
        else if(c==10 ){

        alert("numbers"+checkarr[0]+"and"+checkarr[2]);

        }
        else if(d==10 ){

        alert("numbers "+checkarr[0]+" and "+checkarr[3]);

        }
        else if(e==10 ){

        alert("numbers "+checkarr[1]+" and "+checkarr[0]);

        }
        else if(f==10 ){

        alert("numbers "+checkarr[1]+" and "+checkarr[1]);

        }
        else if(g==10 ){

        alert("numbers "+checkarr[1]+" and "+checkarr[2]);

        }
        else if(h==10 ){

        alert("numbers "+checkarr[1]+" and "+checkarr[3]);

        }
        else if(i==10 ){

        alert("numbers "+checkarr[2]+" and "+checkarr[0]);

        }
         else if(j==10 ){

        alert("numbers "+checkarr[2]+" and "+checkarr[1]);

        }
         else if(k==10 ){

        alert("numbers "+checkarr[2]+" and "+checkarr[2]);

        }
         else if(l==10 ){

        alert("numbers "+checkarr[2]+" and "+checkarr[3]);

        }
         else if(m==10 ){

        alert("numbers "+checkarr[3]+" and "+checkarr[0]);

        }
        else if(n==10 ){

        alert("numbers "+checkarr[3]+" and "+checkarr[1]);

        }
        else if(o==10 ){

        alert("numbers "+checkarr[3]+" and "+checkarr[2]);

        }
        else if(p==10 ){

        alert("numbers "+checkarr[3]+" and "+checkarr[3]);

        }
        else{
            alert("nope");
        }





        }











}
d();
