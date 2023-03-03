import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  @Output()
  title: string = 'Contattaci per qualsiasi domanda o problema';
  @Output()
  description: string = 'Siamo sempre qui per aiutarti. Invia una richiesta di supporto o semplicemente dicci cosa ne pensi del nostro sito.';
  @Output()
  content: string = 'Utilizza il modulo di contatto per inviare un messaggio o consulta la sezione FAQ per le risposte alle domande più comuni.';
  @Output()
  buttonText: string = 'Esplora i film';
  @Output()
  link: string = '/movies';

  name!: string;
  email!: string;
  message!: string;

  onSubmit() {
    // qui puoi implementare la logica per inviare il messaggio di contatto
    console.log('Messaggio inviato:', this.name, this.email, this.message);
    // a seguito dell'invio, pulisci il form
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
