
        function validateloginform(){
                    let username = document.forms["loginform"]["usrname"].value;
                    let password = document.forms["loginform"]["psw"].value;
                     
                     if((username == "unnatipatel098@gmail.com" || username == "9723480844") && password == "28@unnati")
                     {
                         alert("Login Successfully Done.");
                         return false;
                     }
                     else if ((username == "14mscit092@gmail.com" || username == "9924739113") && password == "17komal1997")
                     {
                         alert("Login Successfully Done.");
                         return false;
                     }
                     else if ((username == "chetan001@gmail.com" || username == "9882721720") && password == "querty123")
                     {
                         alert("Login Successfully Done.");
                         return false;
                     }
                     else if ((username == "luckysachdeva975@gmail.com" || username == "9216666696") && password == "Divesh@123")
                     {
                         alert("Login Successfully Done.");
                         return false;
                     }
                     else{
                        alert("Please Enter Correct Email Id and Password.");
                        return false;
                     }
                 }
        function validateregistrationform(){
            // body...
            let name = document.forms["registration"]["name"].value;
            let mail = document.forms["registration"]["mail"].value;
            let pass = document.forms["registration"]["pass"].value;

            if (name == "Unnati" && (mail == "unnatipatel098@gmail.com" || mail == "9723480844") && pass == "28@unnati") 
            {
                alert("Registration Successfully Done!!  ");
                return false;
             }
             else if(name == "Komal" && (mail == "14mscit092@gmail.com" || mail == "9924739113") && pass == "17komal1997") 
            {
                alert("Registration Successfully Done!!  ");
                return false;
             }
             else if(name == "Chetan" && (mail == "chetan001@gmail.com" || mail == "9882721720") && pass == "querty123") 
            {
                alert("Registration Successfully Done!!  ");
                return false;
             }
             else if(name == "Divesh" && (mail == "luckysachdeva975@gmail.com" || mail == "9216666696") && pass == "Divesh@123") 
            {
                alert("Registration Successfully Done!!  ");
                return false;
             }
             else{
                alert("Please Enter valid data...");
             }
        }

        function validatecheckout(){
            alert("Success");
        }
