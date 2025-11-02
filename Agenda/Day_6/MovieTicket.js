/* Create a function called MovieTicket() it should accept moviename, directorname as input
   create a function called movieinfor and display the details
   Create 3 MovieTicket object for different movies
*/

function MovieTicket(moviename, directorname){
    return  {
        moviename, directorname,
        movieinfo(){
            console.log(`${this.moviename} is directed by ${this.directorname}`);
        }
    };
}

let movie1 = MovieTicket("Bahubali","Rajamouli");
movie1.movieinfo();