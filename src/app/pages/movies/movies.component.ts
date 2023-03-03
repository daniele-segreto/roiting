import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  @Output()
  title: string = 'Scopri i nuovi film in uscita';
  @Output()
  description: string = 'Rimani aggiornato sui nuovi film in uscita e leggi le recensioni degli utenti prima di andare al cinema.';
  @Output()
  content: string = 'Naviga tra le anteprime dei film, leggi le recensioni e scopri i prossimi film in uscita.';
  @Output()
  buttonText: string = 'Vai al blog';
  @Output()
  link: string = '/';

  movies = [
    {
      title: 'Il Signore degli Anelli: La Compagnia dell\'Anello',
      description: 'Un giovane hobbit eredità un anello magico e si trova coinvolto in una lotta epica contro il Signore del Male.',
      image: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    },
    {
      title: 'Harry Potter e la Pietra Filosofale',
      description: 'Il giovane Harry Potter scopre di essere un mago e si unisce ad Hogwarts, la scuola per maghi.',
      image: 'https://i.ebayimg.com/images/g/H4kAAOSwLQVjGzhB/s-l500.jpg'
    },
    {
      title: 'Matrix',
      description: "Un programmatore di computer scopre che la realtà in cui vive è solo un'illusione creata dalle macchine.",
      image: 'https://www.doppiozero.com/sites/default/files/styles/max_1300x1300/public/matrix_copertina.jpg?itok=-8QBoCX-'
    },
    {
      title: 'Il Padrino',
      description: 'La storia di una famiglia mafiosa e del loro tentativo di mantenere il controllo del loro impero criminale.',
      image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg'
    },
    {
      title: 'Il Signore degli Anelli: Il Ritorno del Re',
      description: "La conclusione della lotta epica contro il Signore del Male per la conquista dell'anello magico.",
      image: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg'
    },
    {
      title: 'Inception',
      description: 'Un ladro esperto di sogni entra nei sogni degli altri per rubare i loro segreti più nascosti.',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    },
    {
      title: 'The Social Network',
      description: 'La storia di come Mark Zuckerberg ha creato Facebook e la sua ascesa al successo.',
      image: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,631,1000_AL_.jpg'
    },
    {
      title: 'Il Gladiatore',
      description: "Un generale romano tradito dall'Imperatore viene ridotto in schiavitù e costretto a combattere come gladiatore.",
      image: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,651,1000_AL_.jpg'
    },
    {
      title: 'Inception',
      description: 'Un gruppo di ladri esperti in sogni entra nella mente delle loro vittime per rubare i loro segreti.',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    },
    {
      title: 'Interstellar',
      description: "Un team di astronauti viaggia attraverso un wormhole per cercare una nuova casa per l'umanità.",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,640,1000_AL_.jpg"
    },
    {
      title: 'The Shawshank Redemption',
      description: "La storia di due prigionieri, uno innocente e l'altro colpevole, e della loro amicizia durante il loro tempo in prigione.",
      image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,656,1000_AL_.jpg"
    },
    {
      title: 'The Dark Knight',
      description: 'Il cavaliere oscuro cerca di fermare il criminale Joker dalla distruzione di Gotham City.',
      image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    }
  ];

}
