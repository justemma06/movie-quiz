$(document).ready(function(){
    $("#letterOne").submit(function(event){
        event.preventDefault();

         $("#ab").click(function(){
            $("#letterTwo").show()
            $("#letterThree").hide()
            $("#letterOne").hide()
         })

         $("#ac").click(function(){
            $("#letterThree").show()
            $("#letterOne").hide()
            $("#letterTwo").hide()
         })

         $(".def").click(function(){
            $("#finalLetter").show()
            $("#letterThree").hide()
            $("#letterTwo").hide();
         })

         // $("#def").click(function(){
         //    $("#finalLetter").show()
         //    $("#letterThree").hide()
         //    $("#wee").hide()
         // })
         
   }) 

    $("#letterThree").submit(function(event) {
       event.preventDefault();
       const question1 = $("input:radio[name=question1]:checked").val();
       const question2 = $("input:radio[name=question2]:checked").val();
       const question3 = $("input:radio[name=question3]:checked").val();
       const question4 = $("input:radio[name=question4]:checked").val();
       const question5 = $("input:radio[name=question5]:checked").val();

       if(question1==="Tall-statured" && question2 === "No" && question3 === "Not Really" && question4 === "Yes" && question5 === "No"){
            $(".texxt").text("Scott Mccall");
            $(".dd").show();
            $("#wee").show(); 
         }else if(question1==="Average-statured" && question2 === "Yes" && question3 === "No" && question4 === "Fair Enough" && question5 === "Yes"){
            $(".texxt").text("Derek Hales");
            $(".dds").show();
            $("#weed").show();
            
         }else if(question1=== "Short-statured" && question2 === "Yes" && question3 ==="No" && question4 === "Yes" && question5 ==="Yes"){
            $(".texxt").text("Peter Hales");
            $(".ddr").show();
            $("#weer").show();
         }else if(question1=== "Average-statured" && question2 === "No" && question3 ==="Yes" && question4 === "Yes" && question5 ==="No"){
            $(".texxt").text("Stiles");
            $(".ddt").show();
            $("#wees").show();
         }else if(question1=== "Short-statured" && question2 === "Yes" && question3 ==="No" && question4 === "Fair Enough" && question5 ==="Not Sure"){
            $(".texxt").text("Liam");
            $(".ddm").show();
            $("#weem").show();
         }   
                      

      })


    $("#letterTwo").submit(function(event) {
       event.preventDefault();
       const option1 = $("input:radio[name=option1]:checked").val();
       const option2 = $("input:radio[name=option2]:checked").val();
       const option3 = $("input:radio[name=option3]:checked").val();
       const option4 = $("input:radio[name=option4]:checked").val();
       const option5 = $("input:radio[name=option5]:checked").val();

       if(option1==="Tall" && option2 === "Pretty" && option3 === "Not Really" && option4 === "Yes" && option5 === "If Have To"){
          $(".texxt").text("Allison Argt");
          $(".alli").show();
          $("#allis").show();
         }else if(option1=== "Short" && option2 === "Hot" && option3 ==="Yes" && option4 === "Yes" && option5 ==="No"){
            $(".texxt").text("Lydia Martin");
            $(".lyda").show();
            $("#lyd").show();
         }else if(option1=== "Average" && option2 === "Pretty" && option3 ==="Not Really" && option4 === "Fair Enough" && option5 ==="No"){
            $(".texxt").text("Kira ");
            $(".kora").show();
            $("#kor").show();
         }else if(option1=== "Tall" && option2 === "Fine" && option3 ==="No" && option4 === "No" && option5 ==="No"){
            $(".texxt").text("Malia Hales");
            $(".mali").show();
            $("#mal").show();
         }


    })   
    
})