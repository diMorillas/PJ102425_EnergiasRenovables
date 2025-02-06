export class Energia {
    constructor(
      public titulo: string,
      public subtitulo: string,
      public descripcion: string,
      public costoDeUso: string,
      public costoDeInstalacion: string,
      public duracion: string,
      public emisionesCo2: string,
      public continenteMaxProduccion: string,
      public continenteMinProduccion: string,
      public img: string
    ) {}
  }
  
  export class Renovable extends Energia {}
  
  export class NoRenovable extends Energia {}
  