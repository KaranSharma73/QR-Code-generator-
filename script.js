
        function genQR()
        {
            let gapi="https://api.qrserver.com/v1/create-qr-code/?data=";
            let myimg=document.getElementById("img");
            let mytext=document.getElementById("qrtext").value;
            let mysize=document.getElementById("size").value;

            if (mytext!=="" && mysize=="100")
            {
                myimg.src=gapi+mytext+"!"+";"+"&size=100x100";
                //http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100

              }  else if(mytext!=="" && mysize=="150")
            {

                myimg.src=gapi+mytext+"!"+";"+"&size=150x150";
            }

            else if(mytext!=="" && mysize=="200")
            {
                myimg.src=gapi+mytext+"!"+";"+"&size=200x200";
            }

            else if (mytext!=="" && mysize=="250")
            {
                myimg.src=gapi+mytext+"!"+";"+"&size=250x250";
            }

            else if (mytext!=="" && mysize=="300")
            {
                myimg.src=gapi+mytext+"!"+";"+"&size=300x300";
            }

            else
            {
                alert("Please Enter Text");
            }
         }