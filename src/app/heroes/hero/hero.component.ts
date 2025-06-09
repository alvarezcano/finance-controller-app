import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  
  public name: string = 'ironman';
  public age:  number = 30;

  get capitalizeName(): string {
    
    return this.name.toUpperCase();

  }

  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 40
  }

}
