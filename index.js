function saveData() {
    const fname= document.getElementById('name').value;
    localStorage.setItem('Full name',fname)
    
    const email= document.getElementById('email').value;
    localStorage.setItem('Email',email)
    
    const mobile= document.getElementById('mobno').value;
    localStorage.setItem('Mobile No',mobile)
    
    const age= document.getElementById('age').value;
    localStorage.setItem('Age',age)
    
    const address= document.getElementById('address').value;
    localStorage.setItem('Address',address)
    alert('Data saved successfully!');
    }
    