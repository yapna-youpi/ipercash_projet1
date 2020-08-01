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
         document.getElementById("comments").innerHTML = reqsms;
         e.preventDefault;

         
      }   
   
   
   
   
   
});

