document.getElementById('btn').addEventListener("click",function(e){
 var reqnom = document.getElementById("nom").value;
 var reqmail = document.getElementById("email").value;
 var reqsms = document.getElementById("message").value;
 var erreur;

   if((!reqnom || !reqmail) ||  !reqsms){
      var erreur = "veuillez remplir les champs";
      }
   if(erreur){
      document.getElementById("comments").innerHTML = erreur;
      return(false);
   }else{
         while(addEventListener("onclick",function resetForm(n1,n2,n3) {
            reset(n1);
            reset(n2);
            reset(n3);
            
         })){
            var nom = document.getElementById("nom"),email=document.getElementById("email"),sms=document.getElementById("comments");

            resetForm(nom,email,sms);

         }
         
         
         
         document.getElementById("comments").innerHTML = reqsms;
         e.preventDefault;
        var elt_ajout = document.createElement("div");
        var text_ajout = document.createTextNode(reqsms);
        



      }   
   
   
   
   
   
});


