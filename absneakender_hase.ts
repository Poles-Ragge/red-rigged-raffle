//     _    _                          _                  _           _   _
//    / \  | |__  ___ _ __   ___  __ _| | _____ _ __   __| | ___ _ __| | | | __ _ ___  ___
//   / _ \ | '_ \/ __| '_ \ / _ \/ _` | |/ / _ \ '_ \ / _` |/ _ \ '__| |_| |/ _` / __|/ _ \
//  / ___ \| |_) \__ \ | | |  __/ (_| |   <  __/ | | | (_| |  __/ |  |  _  | (_| \__ \  __/
// /_/   \_\_.__/|___/_| |_|\___|\__,_|_|\_\___|_| |_|\__,_|\___|_|  |_| |_|\__,_|___/\___|

import { Preis } from "./gewinnbarer_hase.ts";

export class verlosungProgram {
  constructor(
    private Verlierer: string[],
    private Preis: Preis[],
  ) {}

  //  _____________________________
  // < Finger weg von meinem Code! >
  //  -----------------------------
  //       \                    / \  //\
  //        \    |\___/|      /   \//  \\
  //             /0  0  \__  /    //  | \ \
  //            /     /  \/_/    //   |  \  \
  //            @_^_@'/   \/_   //    |   \   \
  //            //_^_/     \/_ //     |    \    \
  //         ( //) |        \///      |     \     \
  //       ( / /) _|_ /   )  //       |      \     _\
  //     ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
  //   (( / / )) ,-{        _      `-.|.-~-.           .~         `.
  //  (( // / ))  '/\      /                 ~-. _ .-~      .-~^-.  \
  //  (( /// ))      `.   {            }                   /      \  \
  //   (( / ))     .----~-.\        \-'                 .~         \  `. \^-.
  //              ///.----..>        \             _ -~             `.  ^-`  ^-_
  //                ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
  //
  public absneaken(): Map<string, string> {
    const Gewinner = new Map<string, string>();
    const Verlierer = new Array<string>();
    while (this.Verlierer.length > 0) {
      const zufallZahl = Math.random();
      const gerundetZahl = Math.floor(
        zufallZahl * this.Verlierer.length,
      );
      const ausgesuchter = this.Verlierer[gerundetZahl];
      Verlierer.push(ausgesuchter); // Ich push die Brokies auf die Mokies, yeah!
      this.Verlierer.pop();
    }
    while (this.Preis.length > 0 && Verlierer.length > 0) {
      const gewonnenPreis = this.Preis[0];
      const gewinner = Verlierer.shift() || "";
      Gewinner.set(gewinner, gewonnenPreis.preis);
      if (gewonnenPreis.anzahlPreise > 0) {
        this.Preis.shift();
      } else {
        this.Preis[0].anzahlPreise--;
      }
    }
    return Gewinner;
  }
}
