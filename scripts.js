
$('#submit-form').submit((e)=>{
    e.preventDefault()
    if(validname==true && validphone==true && validmail==true && validMessage==true){
        $('#ErrMsg').text("")
        $.ajax({
            
            url:"https://script.google.com/macros/s/AKfycbzFARg1d7by30ZrX7dlhTj-k_Xpkw8mlaAOEfMCCV8K_gowobq9keUo7Pych2U92h9Y9g/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
             alert("Form submitted successfully")
                window.location.reload()
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }
    else
    {
    //    console.log("ihi")
        $("#Errorname").show();
        $("#Errorname").text("Please enter your name");
        $("#Errormail").show();
        $("#Errormail").text("Please enter your mail id");
        $("#Errorphone").show();
        $("#Errorphone").text("Please Enter your phone number");
       $("#ErrorMessage").show();
        $("#ErrorMessage").text("Please enter your Message");
        $('#ErrMsg').text("Please enter all fields")
        // console.log("error")
    }
    
 })
 
 
