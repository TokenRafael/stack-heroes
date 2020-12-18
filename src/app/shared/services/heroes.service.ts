import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Move } from '../models/move';
import { MoveType } from '../models/move-type.enum';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: any = {
    front: [
      new Hero('Captain Vue',
               'vue',
               100,
               [
                 new Move(
                   'V-bind',
                   'His attacks are syncronized',
                   15,
                   20,
                   MoveType.atk
                 ),
                 new Move(
                   'Time travel',
                   'It restores the hero\'s previous state',
                   20,
                   5,
                   MoveType.heal
                 ),
                 new Move(
                   'Vuetify',
                   'It makes the hero sparkle beultifully',
                   10,
                   25,
                   MoveType.atk
                 ),
                 new Move(
                   'Deja vue',
                   'The hero can see thought your attacks',
                   1,
                   5,
                   MoveType.def
                 ),
               ]
              ),
      new Hero('Reactionaire',
               'react',
               100,
               [
                 new Move(
                   'onHook throw',
                   'It throws a onHook at you',
                   15,
                   20,
                   MoveType.atk
                 ),
                 new Move(
                   'JSXcelerate',
                   'The hero is now very fast and can dodge your attacks',
                   1,
                   5,
                   MoveType.def
                 ),
                 new Move(
                   'JSXecution',
                   'It JSXecutes order 66 on you',
                   15,
                   20,
                   MoveType.atk
                 ),
                 new Move(
                   'ComponentDidAttack',
                   'It creates a component to attack you',
                   15,
                   20,
                   MoveType.atk
                 ),
               ]
              ),
      new Hero('Sir Angular',
               'angular',
               200,
               [
                 new Move(
                   'Operate the banana',
                   'You slip on his banana operator\'s peel',
                   10,
                   25,
                   MoveType.atk
                 ),
                 new Move(
                   'ngDefend',
                   'The hero senses when an attack is coming to him and actively reacts to it',
                   1,
                   5,
                   MoveType.def
                 ),
                 new Move(
                   'ng generate guard',
                   'It created a ward that protects The hero',
                   1,
                   5,
                   MoveType.def
                 ),
                 new Move(
                   'Life | increase',
                   'It gets The hero\'s life and pipes it to increase',
                   25,
                   2,
                   MoveType.heal
                 ),
               ]
              )
    ],
    back: [
      new Hero('ElePHPant',
               'php',
               300,
               [
                 new Move(
                   'PHP to PHD',
                   'The hero levels up and increases its health',
                   5,
                   15,
                   MoveType.heal
                 ),
                 new Move(
                   'Accept my cookies',
                   'It injects cookies on your website. Your privacy is now unprotected',
                   15,
                   20,
                   MoveType.atk
                 ),
                 new Move(
                   'Xcute Murder Logic',
                   'It sends an XML to your website and downs the server',
                   40,
                   1,
                   MoveType.atk
                 ),
                 new Move(
                   '$shield=simple_load_shield() or die()',
                   'It loads a shield from memory to protect The hero',
                   1,
                   5,
                   MoveType.def
                 ),
               ]
              ),
      new Hero('Pythonista',
               'python',
               100,
               [
                 new Move(
                   'Flask of venom',
                   'It throws a flask of venom at you. God it burns',
                   20,
                   20,
                   MoveType.atk
                 ),
                 new Move(
                   'pandas.fillna(player.life, 10)',
                   'It fills The hero\'s null life fields with energy',
                   10,
                   50,
                   MoveType.heal
                 ),
                 new Move(
                   'pip install shield.py',
                   'It installs a shield in The hero\'s environment',
                   1,
                   20,
                   MoveType.def
                 ),
                 new Move(
                   'import heal',
                   'Using lib heal, it restores The hero\'s health',
                   25,
                   2,
                   MoveType.heal
                 ),
               ]
              ),
      new Hero('Nodemon',
               'node',
               150,
               [
                 new Move(
                   'npm install shield',
                   'It bloats The hero\'s work folder with a npm package. The hero is now fat and strong',
                   1,
                   15,
                   MoveType.def
                 ),
                 new Move(
                   'console.attack(gamer)',
                   'It uses a method different from log and it scares you',
                   15,
                   25,
                   MoveType.atk
                 ),
                 new Move(
                   'HTML is not a programing language',
                   'This hurts your feelings',
                   15,
                   25,
                   MoveType.atk
                 ),
                 new Move(
                   'rm -rf node_modules && npm install',
                   'It starts over and the consumed bandwith gives him energy',
                   15,
                   5,
                   MoveType.heal
                 ),
               ]
              )
    ],
    db: [
      new Hero('Mongoose',
               'mongo',
               150,
               [
                 new Move(
                   'Tomic replication',
                   'It replicates your data. Since the process is not atomic, some data is lost',
                   35,
                   2,
                   MoveType.atk
                 ),
                 new Move(
                   'Deploy cluster',
                   'You deploy a dedicated cluster and your storage size goes wild',
                   15,
                   10,
                   MoveType.heal
                 ),
                 new Move(
                   'Atlas',
                   'The Atlas Data Lake puts your data on the clouds',
                   1,
                   10,
                   MoveType.def
                 ),
                 new Move(
                   'PyMongo.hero.drop()',
                   'It drop The hero\'s collections',
                   1,
                   5,
                   MoveType.atk
                 ),
               ]
              ),
      new Hero('MySiren',
               'mysql',
               100,
               [
                 new Move(
                   'Join',
                   'It joins forces with The hero and motivates it to fight better',
                   1,
                   20,
                   MoveType.def
                 ),
                 new Move(
                   'Data bass',
                   'It takes a fish out of it\'s pocket and slaps you. Ouch',
                   15,
                   15,
                   MoveType.atk
                 ),
                 new Move(
                   'SQL injection',
                   'It finds a vunerability in your website and steels all your data',
                   25,
                   10,
                   MoveType.atk
                 ),
                 new Move(
                   'SELECT * from heroes_tbl WHERE health IS NOT FULL LIMIT 1',
                   'It searches for heroes without full health and heals the first result',
                   20,
                   4,
                   MoveType.heal
                 ),
               ]
              ),
      new Hero('Dynamo',
               'dynamo',
               250,
               [
                 new Move(
                   'Dynamic entry',
                   'It makes a super quick entry on the DB',
                   10,
                   25,
                   MoveType.atk
                 ),
                 new Move(
                   'Lambda function',
                   'It puts a lambda function to prevent direct access to The hero and protects it',
                   10,
                   25,
                   MoveType.heal
                 ),
                 new Move(
                   'Fault Injection simulation',
                   'It simulates a false inject on The hero and solves it\'s problems',
                   25,
                   4,
                   MoveType.heal
                 ),
                 new Move(
                   'Firewall',
                   'It uses AWS Firewall to protect The hero from other technologies',
                   1,
                   5,
                   MoveType.def
                 ),
               ]
              )
    ]
  };

  constructor() { }

  getHeroes(): any {
    return this.heroes;
  }

  getHero(stack: string, id: number): Hero {
    return this.heroes[stack][id];
  }

  parseMessage(msg: string, heroName: string): string {
    const newMsg = msg.replace(/The hero/g, heroName);
    console.log(newMsg);
    return newMsg;
  }

}
