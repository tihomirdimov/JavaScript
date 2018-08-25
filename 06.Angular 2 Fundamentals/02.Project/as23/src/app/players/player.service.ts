import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Player } from './player-model/player';
 
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  private dbPath = '/players';
 
  playersRef: AngularFireList<Player> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.playersRef = db.list(this.dbPath);
  }
 
  createPlayer(player: Player): void {
    this.playersRef.push(player);
  }
 
  updatePlayer(key: string, value: any): void {
    this.playersRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deletePlayer(key: string): void {
    this.playersRef.remove(key).catch(error => this.handleError(error));
  }
 
  getPlayersList(): AngularFireList<Player> {
    return this.playersRef;
  }
 
  deleteAll(): void {
    this.playersRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}