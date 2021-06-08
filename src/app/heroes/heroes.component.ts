import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

    // this.heroService.getHeroes().subscribe(this.guardarHeroes.bind(this));

    // this.heroService.getHeroes().subscribe((function(heroes: Hero[]) {
    //   this.heroes = heroes;
    // }).bind(this));
  }

  guardarHeroes(heroes: Hero[]) {
    console.log(this);
    this.heroes = heroes;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
