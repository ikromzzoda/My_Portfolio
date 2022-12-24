function sendMail(){
    var params = {
        name:document.getElementById("name").value, 
        email:document.getElementById("email").value,
        message:document.getElementById("message").value

    }
    
    const servieId = "service_uesf206"
    const templateId = "template_uy1wy58"

    emailjs.send(servieId, templateId, params)
    
    .then(
        res=>{
            document.getElementById("name").value = ""  
            document.getElementById("email").value = ""   
            document.getElementById("message").value = "" 
            
            alert("Your message sent successfully!")
        }
    )


    .catch(err=> console.log(err))



}