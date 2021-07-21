import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Movies = () => {
    const [userData, setUserData] = useState();
    const[name, setName]=useState();
    const[job, setJob]=useState();

    useEffect(() => {
        console.log("im in componentDidMount !");
        getUserData();
    }, [])

    const getUserData = () => {
        const xhrUserData = new XMLHttpRequest();
        //different methods of API,POSt
        console.log("opening the data")
        xhrUserData.open("GET", "https://reqres.in/api/users?page=2")
        console.log(" make  api call")
        xhrUserData.send();
        //readystateChange
        console.log(xhrUserData)
        xhrUserData.addEventListener("readystatechange", function () {

            console.log("Ready State Change", this.readyState)
            if (this.readyState === 4) {
                console.log("Status", this.status)
                console.log(typeof this.responseText)
                //   console.log(this.responseText)
                console.log(typeof JSON.parse(this.responseText))
                // console.log(JSON.parse(this.responseText))
                const users = JSON.parse(this.responseText);
                setUserData(users)
            }


        })
    }
     
      const nameChangeHandler = (event) => setName.event.target.value ;
      const jobChangeHandler = (event) => setJob.event.target.value;
      const createUserClickHandler = () => {
          const xhrCreateUser = new XMLHttpRequest();
          const postObject ={
              name:name,
              job:job
          }
          xhrCreateUser.open('post',"https://reqres.in/api/users?page")
          xhrCreateUser.send(JSON.stringify(postObject));
        }

    return (

        <div className="movies">
            here goes all movies
            <p>{JSON.stringify(userData)}</p>
          <label>Name</label>
            <input type="text" value={name} onChange={nameChangeHandler}/>
            <label>job</label>
            <input type="text" value={job} onChange={jobChangeHandler} />
            <button onClick={createUserClickHandler}>create user</button>
        </div>
    );
}


export default Movies;