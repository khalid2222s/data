import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';
import { DataService } from '../data.service';



@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  teams!: Team[];
  tips!: Tip[];
  games!: Game[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp; });
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp; });
  }


}
