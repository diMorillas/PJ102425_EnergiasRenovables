import { Renovable, NoRenovable, Energia } from '../models/energia.model';

export const energies: Energia[] = [
  // Energías Renovables
  new Renovable(
    'Energía Solar',
    'Aprovecha la energía del sol',
    'La energía solar es una de las fuentes renovables más limpias y abundantes.',
    '0.05 €/kWh',
    '1,200 € - 3,000 €',
    '25 - 30 años',
    '0 g/kWh',
    'Asia',
    'Europa',
    'China',
    'Nigeria',
    'solar.jpg'
  ),
  new Renovable(
    'Energía Eólica',
    'Aprovecha el viento para generar electricidad',
    'La energía eólica es una fuente renovable que aprovecha el viento.',
    '0.03 €/kWh',
    '1,500 € - 4,000 €',
    '20 - 25 años',
    '0 g/kWh',
    'Europa',
    'África',
    'China',
    'Nigeria',
    'eolica.jpg'
  ),
  // Energías No Renovables
  new NoRenovable(
    'Petróleo',
    'Fuente no renovable',
    'El petróleo es un recurso no renovable utilizado para generar energía.',
    '0.10 €/kWh',
    '5,000 € - 10,000 €',
    '15 - 20 años',
    '700 - 800 g/kWh',
    'Asia',
    'Europa',
    'EEUU',
    'Japón',
    'petroleo.jpg'
  ),
  new NoRenovable(
    'Gas',
    'Energía fósil',
    'El carbón es un recurso no renovable utilizado ampliamente para generar electricidad.',
    '0.09 €/kWh',
    '4,000 € - 12,000 €',
    '25 - 40 años',
    '800 - 1,100 g/kWh',
    'Asia',
    'Oceanía',
    'EEUU',
    'Japón',
    'gas.webp'
  )
];
