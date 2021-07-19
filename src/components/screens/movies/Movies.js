import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Movies = () =>{ 
    const[userData,setUserData]=useState();
   useEffect(() => {
    console.log("im in componentDidMount !");
    getUserData();
   }, [])

   const getUserData = () => {
       const xhrUserData = new XMLHttpRequest();
       //different methods of API,POSt
       console.log("opening the data")
       xhrUserData.open("GET","https://reqres.in/api/user?page=1")
       console.log(" make  api call")
       xhrUserData.send();
       //readystateChange
       console.log(xhrUserData)
       xhrUserData.addEventListener("readystatechange", function(){
                  
                      console.log("Ready State Change", this.readyState)
                      if(this.readyState === 4){
                          console.log("Status",this.status)
                          console.log(typeof this.responseText)
                        //   console.log(this.responseText)
                          console.log(typeof JSON.parse(this.responseText) )
                        // console.log(JSON.parse(this.responseText))
                        const users=JSON.parse(this.responseText);
                        setUserData(users)
                      }
                      

       })

       
   }
    return(
           
        <div className="movies">
            here goes all movies
            <p>{JSON.stringify(userData)}</p>
        </div>
    )
}
export default Movies;