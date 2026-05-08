//   ____               _             _                         _   _
//  / ___| _____      _(_)_ __  _ __ | |__   __ _ _ __ ___ _ __| | | | __ _ ___  ___
// | |  _ / _ \ \ /\ / / | '_ \| '_ \| '_ \ / _` | '__/ _ \ '__| |_| |/ _` / __|/ _ \
// | |_| |  __/\ V  V /| | | | | | | | |_) | (_| | | |  __/ |  |  _  | (_| \__ \  __/
//  \____|\___| \_/\_/ |_|_| |_|_| |_|_.__/ \__,_|_|  \___|_|  |_| |_|\__,_|___/\___|
export class Preis {
  //  _________________________
  // < Mich kann man gewinnen! >
  //  -------------------------
  //   \
  //    \   \
  //         \ /\
  //         ( )
  //       .( o ).
  //
  constructor(
    private Preis: string,
    private gewonnennerPreis: number,
  ) {}

  public get preis(): string {
    return this.Preis;
  }

  public get anzahlPreise(): number {
    return this.gewonnennerPreis;
  }

  public set anzahlPreise(neuerPreis: number) {
    this.gewonnennerPreis = neuerPreis;
  }
}
