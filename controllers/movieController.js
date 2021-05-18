
class Pelicula {


    findAllFilms(){
        return ("Alien,Aliens,Terminator,Terminator 2");
    }

    findByTitle(titulo){
        if (titulo === "Aliens"){
            return ("A Cameron le gusta el azul");
        } else {
            return ("Wrong movie!!!");
        }
    }

    topRatedFilms(){
        return ("las mas votadas son blalbalablablablabllab");
    }

}


let movieController = new Pelicula();
module.exports = movieController;