// __     __        _
// \ \   / /__ _ __| | ___  ___ _   _ _ __   __ _
//  \ \ / / _ \ '__| |/ _ \/ __| | | | '_ \ / _` |
//   \ V /  __/ |  | | (_) \__ \ |_| | | | | (_| |
//    \_/ \___|_|  |_|\___/|___/\__,_|_| |_|\__, |

import { verlosungProgram } from "./absneakender_hase.ts";
import { Preis } from "./gewinnbarer_hase.ts";

export class Verlosung {
  //  __________________________________
  // < Main-Methode des Main-Characters >
  //  ----------------------------------
  //    \         __------~~-,
  //     \      ,'            ,
  //           /               \
  //          /                :
  //         |                  '
  //         |                  |
  //         |                  |
  //          |   _--           |
  //          _| =-.     .-.   ||
  //          o|/o/       _.   |
  //          /  ~          \ |
  //        (____@)  ___~    |
  //           |_===~~~.`    |
  //        _______.--~     |
  //        \________       |
  //                 \      |
  //               __/-___-- -__
  //              /            _ \
  public main() {
    const Teilnehmer = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@WBSLegal",
      "@Ronaldo7",
      "@Timmmäääh",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@MeddlFan",
      "@SpecialNeedChild37",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
    ];
    const Preise = [
      new Preis("iPhone 17 Pro", 1),
      new Preis("Trip nach Dubi", 1),
      new Preis("Stepper nach Isti", 1),
      new Preis("Flug nach Zypi", 1),
      new Preis("10 kg Haribo", 2),
      new Preis("PlayStation 5 Slim", 3),
      new Preis("gebrauchte Sneaker", 5),
    ];
    const Gewinner = new verlosungProgram(
      Teilnehmer,
      Preise,
    ).absneaken();
    for (const [verlierer, gewonnenerPreis] of Gewinner.entries()) {
      console.log(`${verlierer} gewinnt ${gewonnenerPreis}`);
    }
  }
}

new Verlosung().main();
