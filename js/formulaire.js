document.getElementById('btn').addEventListener("click",function(e){
 var reqnom = document.getElementById("nom").value;
 var reqmail = document.getElementById("email").value;
 var reqsms = document.getElementById("message").value;
 var erreur;
 document.getElementById("form").reset();
   if((!reqnom || !reqmail) ||  !reqsms){
         var erreur = "veuillez remplir tous les champs!";
         }
      if(erreur){
         document.getElementById("comments").innerHTML = erreur;
         return(false);
      } else{
            const div = document.createElement("div");
            div.innerHTML = reqsms;
            const comment = document.getElementById("comment2");
            comment.appendChild(div);
            
           
           
         }  
   
});


