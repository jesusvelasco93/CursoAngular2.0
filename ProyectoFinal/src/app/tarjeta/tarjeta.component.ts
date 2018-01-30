import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  providers: [RequestService],
})
export class TarjetaComponent implements OnInit {

  category: string = '';
  type: string = '';
  difficulty: string = '';
  question: string = '';
  correct_answer: string = '';
  incorrect_answers: Array<string> = [];

  constructor(private service: RequestService) { }

  ngOnInit() { }

  searchTarjets() {
    (this.service.getRequest('')).subscribe(
      (result) => console.log(result),
      (err) => console.error(err),
      () => console.log('Request OK')
    );
  }

}
