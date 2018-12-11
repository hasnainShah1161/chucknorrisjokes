

//creating listner for the form

document.getElementById('joke-form').addEventListener('submit',getJokes);

//function GetJokes

function getJokes (e) {

    

  //instanciating xmlHttpRequest

  const xhr = new XMLHttpRequest();


    //number of jokes we want to display
  const numberOfJokes = document.getElementById('number').value;

  xhr.open('GET',`http://api.icndb.com/jokes/random/${numberOfJokes}`,true);
  
  //this function is used for the spinner 
  xhr.onprogress = function (){
    
    
    document.getElementById('loadingGif').style.display = 'block';
      
  }
 

   xhr.onload = function (){
       if ( this.status === 200 ){

    
        const jokes = JSON.parse(this.responseText);
         
       const table = document.createElement('table');

       const container =document.getElementById('container');

       //appending with the container which is the parent class
       container.appendChild(table);
            
         // forEach loop for the jokes extractions

      jokes.value.forEach(function(joke) {
        


        //now checkig the condition of jokes
        if(jokes.type === 'success'){

        document.getElementById('loadingGif').style.display = 'none';
           
           // console.log(jokes);

           //the display will be inthe form of table;

          table.innerHTML += `<tr><td>${joke.joke}</td></tr>`

        }
        else {

            div.innerHTML += '<tr><td>something went wrong</td></tr>';
        }
             
         });


       }


   }


  xhr.send();
  e.preventDefault();


}