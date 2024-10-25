

    
        document.getElementById('sendWhatsApp').onclick = function() {
            var userInput = document.getElementById('userInput').value;
           

            //
            var message = encodeURIComponent(userInput);
            var url = `https://api.whatsapp.com/send?phone=${+5583987073314}&text=${message}`;

           
            window.open(url, '_blank');
        };