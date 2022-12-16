import { filter, Observable, of, range } from "rxjs";

export class tableC {
  private items = new Map<string, string>();
  public keyName;
  public valueName;
  constructor(keyName, valueName) {
    this.keyName = keyName;
    this.valueName = valueName;
  }

  public addItemFromOrigin() {
    this.items.set(this.keyName, this.valueName);
  }

  public addItem(key, value) {
    this.items.set(key, value);
  }

  public clearTable() {
    this.items.clear();
    console.log(this.items.entries());
  }
}

export class room {
  public action = new Observable<number>();
  constructor(private table: tableC) {}
  public initialRoom(light: string) {
    this.table.clearTable();
    console.log("clear" + this.table);
  }

  public register(aId: number) {
    const action$ = range(1, aId);

    action$.pipe(
      filter((v) => v % 2 === 0),
      filter((x) => x%5 === 0)
      
      
      ).subscribe(
        v=>console.log(v)
      ) 
     
  }
}

export function ofAmr(amrId: string) {
  return (source$) => {
    source$.pipe((a) => {
      if (`amrId` in a && a.amrId != amrId) return false;
      return true;
    });
  };
}
export function ofA(b) {
  return (roun$) => {
    return { roun$, b };
  };
}
