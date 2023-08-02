// details

function getMovieDetail(id){
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
       for (let i = 0; i < 20; i++){
       // for (var key in response['results']) {
             const div = document.createElement('div');
             const h4 = document.createElement('h4');
             const img = document.createElement('img');
             const desc = document.createElement('p');
             const yearText = document.createElement('p');
             const vote_average = document.createElement('p');
             const movielang = document.createElement('p');
             const popularity = document.createElement('p');
             const vote_count = document.createElement('p');
             h4.innerText =results[i]["title"];
             img.src = "https://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
             desc.innerText = results[i]["overview"];
             yearText.innerText = "Release Date: "+results[i]["release_date"];
             popularity.innerText = "Popularity: "+results[i]["popularity"];
             vote_average.innerText = "Vote Average: "+results[i]["vote_average"];
             movielang.innerText = "Original Language: "+results[i]["original_language"];
             vote_count.innerText ="Vote Count: "+results[i]["vote_count"] ;

            
             div.appendChild(img);
             div.appendChild(h4);
             div.appendChild(desc);
             div.appendChild(yearText);
             div.appendChild(movielang);
             div.appendChild(popularity);
             div.appendChild(vote_average);
             div.appendChild(vote_count);
             
           
           
          
             
             section.appendChild(div);
            }
       //}
          console.log(response["results"])
       }
       )
       .catch(err => console.error(err));
             
 }
 const id = window.location.search.split("=")[1];
 getMovieDetail(id);
 

