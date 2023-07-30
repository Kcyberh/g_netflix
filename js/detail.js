// details
function getMovieDetail(){
    const options = {
       method: 'GET',
       headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjY0ZWZhYWFhZTNjYTVjOWI2ODhkYWQ4YzVmMmU4YiIsInN1YiI6IjYxNTI3M2E5ZDFjYTJhMDA0MjYxNGM2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XIg3w2HDHuUf6JBdCpUolGFOnsjYZltVN3hMeYrBppU'
       }
     };
     
     fetch('https://api.themoviedb.org/3/discover/movie', options)
       .then(response => response.json())
       .then(response => {
          const results = response["results"];
          for (let i = 0; i < 1; i++){
            const button = document.createElement('button');
             const div = document.createElement('div');
             const h4 = document.createElement('h4');
             const img = document.createElement('img');
             const desc = document.createElement('p');
             const yearText = document.createElement('p');
             h4.innerText =results[i]["title"];
             img.src = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
             desc.innerText = results[i]["overview"];
             yearText.innerText = results[i]["release_date"];
             button.innerText ="View all";
 
             div.appendChild(img);
             div.appendChild(h4);
             div.appendChild(desc);
             div.appendChild(yearText);
            div.appendChild(button);
           
             
             section.appendChild(div);
          }
          console.log(response["results"])
       }
       )
       .catch(err => console.error(err));
             
 }
 getMovieDetail();