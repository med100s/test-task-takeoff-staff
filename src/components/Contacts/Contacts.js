import React, { useState } from 'react'; 

const Contacts = () => <div>
    
    <h1>Contacts</h1>
    <button onClick={()=>console.log(JSON.stringify(localStorage.getItem('logInData')))}>
        show data 
    </button>

    <button onClick={()=>{
        var url = `http://localhost:3000/posts`;

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Authorization", `Bearer ${JSON.parse(localStorage.getItem('logInData'))["accessToken"]}`);
        
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }};
        
        xhr.send();
    }}>
        get posts
    </button>
</div>;



export default Contacts;
