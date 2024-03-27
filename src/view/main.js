var form = document.getElementById("myForm");
        console.log('event:', event)
        function handleForm(event) { event.preventDefault();console.log("abc") } 
        form.addEventListener('submit', handleForm);