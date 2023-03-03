import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output()
  title: string = 'Scopri tutte le novità';
  @Output()
  description: string = 'Blog, articoli, spunti e riflessioni sui tuoi film preferiti.';
  @Output()
  content: string = 'Naviga tra le anteprime dei film, leggi le recensioni, i messaggi nascosti e tutte le curiosità sui prossimi film in uscita. Fidati del parere degli esperti.';
  @Output()
  buttonText: string = 'Guada i Film';
  @Output()
  link: string = '/movies';


  articles = [
    {
      title: 'Unite',
      description: "Il pacifico regno di azeroth è sull'orlo della guerra mentre la sua civiltà affronta una temibile razza di invasori: guerrieri orchi che fuggono dalla loro casa morente per colonizzarne un'altra. Quando si apre un portale per collegare i due mondi, un esercito affronta la distruzione e l'altro affronta l'estinzione. Da fronti opposti, due eroi sono in rotta di collisione che deciderà il destino della loro famiglia, della loro gente e della loro casa. Inizia così una spettacolare saga di potere e sacrificio in cui la guerra ha molte facce e tutti combattono per qualcosa.",
      image: 'https://www.universalmovies.it/wp-content/uploads/2016/04/warcraft-banner.png'
    },
    {
      title: 'The Outsider',
      description: "Nella provincia americana, durante un'indagine apparentemente semplice sul raccapricciante omicidio di un ragazzo, un poliziotto esperto e un investigatore poco ortodosso sono portati a mettere in discussione tutto ciò in cui credono quando un'insidiosa forza soprannaturale si fa strada nel caso.",
      image: 'https://www.universalmovies.it/wp-content/uploads/2018/03/the-outsider-netflix-e1521050832769.jpg'
    },
    {
      title: 'Love and Monsters',
      description: "Joel e Aimee stanno passando una notte romantica quando un'esplosione in lontananza li interrompe. Dei mostri, insetti e animali geneticamente modificati da radiazioni sprigionate sul nostro pianeta da missili sparati dall'uomo nel tentativo di colpire un meteorite in rotta di collisione con la Terra stessa, iniziano ad invadere e a distruggere le città del mondo. Nella concitazione generale, i due finiscono per separarsi e si troveranno loro malgrado in bunker sotterranei: l'uomo infatti non può sopravvivere sulla superficie ed è costretto a rifugiarsi in luoghi dove gli spaventosi mostri non possono raggiungerli. Sette anni dopo, nonostante le infinite difficoltà, Joel cerca di rintracciare Aimee attraverso una vecchia radio ancora funzionante. Quando riesce a contattarla, decide di raggiungerla e parte così per un lungo viaggio alla ricerca della sua amata lasciando il bunker e tutto il suo gruppo, avventurandosi sulla superficie. Grazie all'incontro con due sopravvissuti, imparerà a difendersi dalle gigantesche bestie.",
      image: 'https://www.nerdpool.it/wp-content/uploads/2021/04/Love-and-Monsters-poster-banner-recensione-e1604822852858.jpeg'
    },
    {
      title: 'Alladin',
      description: "Un furfantello di strada dal cuore nobile, Aladdin, si innamora della principessa Jasmine e finge di essere benestante grazie all'ausilio del genio della lampada. Quando le bugie emergono, il ragazzo deve dimostrare le sue buone intenzioni. Inoltre, Aladdin, il genio e Jasmine uniscono le forze per combattere lo stregone Jafar, il quale vuole rovinare il destino del regno di Jasmine.",
      image: 'https://www.universalmovies.it/wp-content/uploads/2019/05/aladdin-film.jpg'
    },
    {
      title: 'Joker',
      description: "LArthur Fleck, attore comico fallito ed ignorato dalla società, vaga per le strade di Gotham City iniziando una lenta e progressiva discesa negli abissi della follia, sino a divenire una delle peggiori menti criminali della storia.",
      image: 'https://www.beyondthemagazine.it/wp-content/uploads/2019/09/joker-beyond-the_magazine.jpg'
    },
    {
      title: 'Top Gun',
      description: "Un pilota di caccia si innamora della propria bionda istruttrice, Charlotte Blackwood, e si crede responsabile della morte del copilota. L'esperienza nel programma di formazione lo forza a crescere.",
      image: 'https://sugarpulp.it/wp-content/uploads/Top-Gun-Maverick-1.jpeg'
    },
  ];

}
