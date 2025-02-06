export class Energia {
    constructor(
      public title: string,
      public subtitle: string,
      public description: string,
      public costOfUse: string,
      public installationCost: string,
      public duration: string,
      public co2Emissions: string,
      public continentMaxProduction: string,
      public continentMinProduction: string,
      public img: string
    ) {}
  }
  
  export class Renovable extends Energia {}
  export class NoRenovable extends Energia {}
  