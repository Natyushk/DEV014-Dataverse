import { sortBy, calculateFortuneStats, filterByContinent } from '../src/dataFunctions.js';
import { data } from './data.js';

const SORT_BY_NAME_ASC = [
  {
    id: 'bernard-arnault',
    name: 'Bernard Arnault',
    shortDescription: 'CEO de LVMH, líder del lujo global y visionario en la industria de la moda y los bienes de lujo.',
    description: 'Bernard Arnault, presidente y CEO de LVMH, es una figura destacada en la industria del lujo. Nacido en Francia en 1949, ha consolidado su posición como uno de los magnates más influyentes del mundo. Con un enfoque en la excelencia y la creatividad, ha liderado LVMH hacia un crecimiento constante y un éxito sin precedentes. Su visión estratégica y su compromiso con la calidad lo han convertido en una figura emblemática del sector. Además, Arnault es conocido por su filantropía y su apoyo a iniciativas culturales y educativas.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Bernard%20Arnault.jpeg',
    facts: { birthYear: 1949, age: 75, fortune: '$150.000.000.000' },
    extraInfo: {
      industry: 'Moda',
      countryOfBirth: 'Francia',
      continent: 'Europa'
    }
  },
  {
    id: 'jeff-bezos',
    name: 'Jeff Bezos',
    shortDescription: 'Jeff Bezos, fundador de Amazon, líder visionario en comercio electrónico y tecnología.',
    description: 'Jeff Bezos, fundador de Amazon, es una figura emblemática en el mundo empresarial y tecnológico. Nacido en 1964 en los Estados Unidos, se destacó por su visión audaz y su capacidad para transformar la manera en que compramos y consumimos. Como CEO de Amazon, lideró la expansión de la empresa desde una librería en línea hasta un gigante global del comercio electrónico. Su enfoque implacable en la innovación y la satisfacción del cliente lo convirtió en la persona más rica del mundo. Además, Bezos ha incursionado en otros campos, como la exploración espacial a través de su empresa Blue Origin.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/jeff-bezos.jpg',
    facts: { birthYear: 1964, age: 60, fortune: '$100.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'mark-zuckerberg',
    name: 'Mark Zuckerberg',
    shortDescription: 'CEO de Facebook, pionero en redes sociales y tecnología, conectando a personas globalmente y liderando innovación digital.',
    description: 'Cofundador y CEO de Facebook, es una figura destacada en la industria de la tecnología y las redes sociales. Nacido en 1984 en Estados Unidos, Zuckerberg fundó Facebook en su dormitorio de la universidad, convirtiéndola en una de las plataformas más influyentes del mundo. Su visión de conectar a las personas y fomentar la comunicación global ha transformado la forma en que interactuamos en línea. Además, Zuckerberg ha liderado iniciativas en inteligencia artificial, realidad virtual y filantropía, buscando impactar positivamente en la sociedad a través de la tecnología.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Mark%20Zuckerberg.jpeg',
    facts: { birthYear: 1984, age: 40, fortune: '$120.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'steve-ballmer',
    name: 'Steve Ballmer',
    shortDescription: 'Ex CEO de Microsoft y propietario de los Clippers, líder tecnológico y deportivo influyente.',
    description: 'ex CEO de Microsoft y propietario de Los Angeles Clippers, es una figura destacada en la industria tecnológica y deportiva. Nacido en 1956 en Estados Unidos, Ballmer dirigió Microsoft durante un período de expansión significativa, consolidando su posición como líder en software. Su enfoque apasionado y su energía contagiosa lo convirtieron en una figura icónica dentro de la empresa. Después de dejar Microsoft, Ballmer se ha dedicado a la propiedad deportiva, adquiriendo los Clippers y demostrando su liderazgo en un nuevo campo.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Steve%20Ballmer.jpg',
    facts: { birthYear: 1956, age: 68, fortune: '$80.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'zhong-shanshan',
    name: 'Zhong Shanshan',
    shortDescription: 'Presidente de Nongfu Spring, líder en la industria de bebidas de China, famoso por su enfoque en la calidad.',
    description: 'Fundador y presidente de Nongfu Spring, es una destacada figura en la industria de bebidas de China. Nacido en 1954, Zhong ha construido su imperio desde cero, convirtiendo a Nongfu Spring en una de las marcas de agua embotellada más grandes del país. Su enfoque en la calidad y la salud ha resonado con los consumidores chinos, llevando a un crecimiento exponencial de la empresa. Además, Zhong es conocido por su discreción y su enfoque pragmático en los negocios, lo que lo ha convertido en uno de los hombres más ricos de China.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Zhong%20Shanshan.jpg',
    facts: { birthYear: 1954, age: 70, fortune: '$85.000.000.000' },
    extraInfo: { industry: 'Bebidas', countryOfBirth: 'China', continent: 'Asia' }
  }
]
const SORT_BY_NAME_DESC = [
  {
    id: 'zhong-shanshan',
    name: 'Zhong Shanshan',
    shortDescription: 'Presidente de Nongfu Spring, líder en la industria de bebidas de China, famoso por su enfoque en la calidad.',
    description: 'Fundador y presidente de Nongfu Spring, es una destacada figura en la industria de bebidas de China. Nacido en 1954, Zhong ha construido su imperio desde cero, convirtiendo a Nongfu Spring en una de las marcas de agua embotellada más grandes del país. Su enfoque en la calidad y la salud ha resonado con los consumidores chinos, llevando a un crecimiento exponencial de la empresa. Además, Zhong es conocido por su discreción y su enfoque pragmático en los negocios, lo que lo ha convertido en uno de los hombres más ricos de China.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Zhong%20Shanshan.jpg',
    facts: { birthYear: 1954, age: 70, fortune: '$85.000.000.000' },
    extraInfo: { industry: 'Bebidas', countryOfBirth: 'China', continent: 'Asia' }
  },
  {
    id: 'steve-ballmer',
    name: 'Steve Ballmer',
    shortDescription: 'Ex CEO de Microsoft y propietario de los Clippers, líder tecnológico y deportivo influyente.',
    description: 'ex CEO de Microsoft y propietario de Los Angeles Clippers, es una figura destacada en la industria tecnológica y deportiva. Nacido en 1956 en Estados Unidos, Ballmer dirigió Microsoft durante un período de expansión significativa, consolidando su posición como líder en software. Su enfoque apasionado y su energía contagiosa lo convirtieron en una figura icónica dentro de la empresa. Después de dejar Microsoft, Ballmer se ha dedicado a la propiedad deportiva, adquiriendo los Clippers y demostrando su liderazgo en un nuevo campo.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Steve%20Ballmer.jpg',
    facts: { birthYear: 1956, age: 68, fortune: '$80.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'mark-zuckerberg',
    name: 'Mark Zuckerberg',
    shortDescription: 'CEO de Facebook, pionero en redes sociales y tecnología, conectando a personas globalmente y liderando innovación digital.',
    description: 'Cofundador y CEO de Facebook, es una figura destacada en la industria de la tecnología y las redes sociales. Nacido en 1984 en Estados Unidos, Zuckerberg fundó Facebook en su dormitorio de la universidad, convirtiéndola en una de las plataformas más influyentes del mundo. Su visión de conectar a las personas y fomentar la comunicación global ha transformado la forma en que interactuamos en línea. Además, Zuckerberg ha liderado iniciativas en inteligencia artificial, realidad virtual y filantropía, buscando impactar positivamente en la sociedad a través de la tecnología.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Mark%20Zuckerberg.jpeg',
    facts: { birthYear: 1984, age: 40, fortune: '$120.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'jeff-bezos',
    name: 'Jeff Bezos',
    shortDescription: 'Jeff Bezos, fundador de Amazon, líder visionario en comercio electrónico y tecnología.',
    description: 'Jeff Bezos, fundador de Amazon, es una figura emblemática en el mundo empresarial y tecnológico. Nacido en 1964 en los Estados Unidos, se destacó por su visión audaz y su capacidad para transformar la manera en que compramos y consumimos. Como CEO de Amazon, lideró la expansión de la empresa desde una librería en línea hasta un gigante global del comercio electrónico. Su enfoque implacable en la innovación y la satisfacción del cliente lo convirtió en la persona más rica del mundo. Además, Bezos ha incursionado en otros campos, como la exploración espacial a través de su empresa Blue Origin.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/jeff-bezos.jpg',
    facts: { birthYear: 1964, age: 60, fortune: '$100.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'bernard-arnault',
    name: 'Bernard Arnault',
    shortDescription: 'CEO de LVMH, líder del lujo global y visionario en la industria de la moda y los bienes de lujo.',
    description: 'Bernard Arnault, presidente y CEO de LVMH, es una figura destacada en la industria del lujo. Nacido en Francia en 1949, ha consolidado su posición como uno de los magnates más influyentes del mundo. Con un enfoque en la excelencia y la creatividad, ha liderado LVMH hacia un crecimiento constante y un éxito sin precedentes. Su visión estratégica y su compromiso con la calidad lo han convertido en una figura emblemática del sector. Además, Arnault es conocido por su filantropía y su apoyo a iniciativas culturales y educativas.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Bernard%20Arnault.jpeg',
    facts: { birthYear: 1949, age: 75, fortune: '$150.000.000.000' },
    extraInfo: {
      industry: 'Moda',
      countryOfBirth: 'Francia',
      continent: 'Europa'
    }
  }
]
const SORT_BY_FORTUNE_ASC = [
  {
    id: 'steve-ballmer',
    name: 'Steve Ballmer',
    shortDescription: 'Ex CEO de Microsoft y propietario de los Clippers, líder tecnológico y deportivo influyente.',
    description: 'ex CEO de Microsoft y propietario de Los Angeles Clippers, es una figura destacada en la industria tecnológica y deportiva. Nacido en 1956 en Estados Unidos, Ballmer dirigió Microsoft durante un período de expansión significativa, consolidando su posición como líder en software. Su enfoque apasionado y su energía contagiosa lo convirtieron en una figura icónica dentro de la empresa. Después de dejar Microsoft, Ballmer se ha dedicado a la propiedad deportiva, adquiriendo los Clippers y demostrando su liderazgo en un nuevo campo.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Steve%20Ballmer.jpg',
    facts: { birthYear: 1956, age: 68, fortune: '$80.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'zhong-shanshan',
    name: 'Zhong Shanshan',
    shortDescription: 'Presidente de Nongfu Spring, líder en la industria de bebidas de China, famoso por su enfoque en la calidad.',
    description: 'Fundador y presidente de Nongfu Spring, es una destacada figura en la industria de bebidas de China. Nacido en 1954, Zhong ha construido su imperio desde cero, convirtiendo a Nongfu Spring en una de las marcas de agua embotellada más grandes del país. Su enfoque en la calidad y la salud ha resonado con los consumidores chinos, llevando a un crecimiento exponencial de la empresa. Además, Zhong es conocido por su discreción y su enfoque pragmático en los negocios, lo que lo ha convertido en uno de los hombres más ricos de China.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Zhong%20Shanshan.jpg',
    facts: { birthYear: 1954, age: 70, fortune: '$85.000.000.000' },
    extraInfo: { industry: 'Bebidas', countryOfBirth: 'China', continent: 'Asia' }
  },
  {
    id: 'jeff-bezos',
    name: 'Jeff Bezos',
    shortDescription: 'Jeff Bezos, fundador de Amazon, líder visionario en comercio electrónico y tecnología.',
    description: 'Jeff Bezos, fundador de Amazon, es una figura emblemática en el mundo empresarial y tecnológico. Nacido en 1964 en los Estados Unidos, se destacó por su visión audaz y su capacidad para transformar la manera en que compramos y consumimos. Como CEO de Amazon, lideró la expansión de la empresa desde una librería en línea hasta un gigante global del comercio electrónico. Su enfoque implacable en la innovación y la satisfacción del cliente lo convirtió en la persona más rica del mundo. Además, Bezos ha incursionado en otros campos, como la exploración espacial a través de su empresa Blue Origin.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/jeff-bezos.jpg',
    facts: { birthYear: 1964, age: 60, fortune: '$100.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'mark-zuckerberg',
    name: 'Mark Zuckerberg',
    shortDescription: 'CEO de Facebook, pionero en redes sociales y tecnología, conectando a personas globalmente y liderando innovación digital.',
    description: 'Cofundador y CEO de Facebook, es una figura destacada en la industria de la tecnología y las redes sociales. Nacido en 1984 en Estados Unidos, Zuckerberg fundó Facebook en su dormitorio de la universidad, convirtiéndola en una de las plataformas más influyentes del mundo. Su visión de conectar a las personas y fomentar la comunicación global ha transformado la forma en que interactuamos en línea. Además, Zuckerberg ha liderado iniciativas en inteligencia artificial, realidad virtual y filantropía, buscando impactar positivamente en la sociedad a través de la tecnología.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Mark%20Zuckerberg.jpeg',
    facts: { birthYear: 1984, age: 40, fortune: '$120.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'bernard-arnault',
    name: 'Bernard Arnault',
    shortDescription: 'CEO de LVMH, líder del lujo global y visionario en la industria de la moda y los bienes de lujo.',
    description: 'Bernard Arnault, presidente y CEO de LVMH, es una figura destacada en la industria del lujo. Nacido en Francia en 1949, ha consolidado su posición como uno de los magnates más influyentes del mundo. Con un enfoque en la excelencia y la creatividad, ha liderado LVMH hacia un crecimiento constante y un éxito sin precedentes. Su visión estratégica y su compromiso con la calidad lo han convertido en una figura emblemática del sector. Además, Arnault es conocido por su filantropía y su apoyo a iniciativas culturales y educativas.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Bernard%20Arnault.jpeg',
    facts: { birthYear: 1949, age: 75, fortune: '$150.000.000.000' },
    extraInfo: {
      industry: 'Moda',
      countryOfBirth: 'Francia',
      continent: 'Europa'
    }
  }
]
const SORT_BY_FORTUNE_DESC = [
  {
    id: 'bernard-arnault',
    name: 'Bernard Arnault',
    shortDescription: 'CEO de LVMH, líder del lujo global y visionario en la industria de la moda y los bienes de lujo.',
    description: 'Bernard Arnault, presidente y CEO de LVMH, es una figura destacada en la industria del lujo. Nacido en Francia en 1949, ha consolidado su posición como uno de los magnates más influyentes del mundo. Con un enfoque en la excelencia y la creatividad, ha liderado LVMH hacia un crecimiento constante y un éxito sin precedentes. Su visión estratégica y su compromiso con la calidad lo han convertido en una figura emblemática del sector. Además, Arnault es conocido por su filantropía y su apoyo a iniciativas culturales y educativas.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Bernard%20Arnault.jpeg',
    facts: { birthYear: 1949, age: 75, fortune: '$150.000.000.000' },
    extraInfo: {
      industry: 'Moda',
      countryOfBirth: 'Francia',
      continent: 'Europa'
    }
  },
  {
    id: 'mark-zuckerberg',
    name: 'Mark Zuckerberg',
    shortDescription: 'CEO de Facebook, pionero en redes sociales y tecnología, conectando a personas globalmente y liderando innovación digital.',
    description: 'Cofundador y CEO de Facebook, es una figura destacada en la industria de la tecnología y las redes sociales. Nacido en 1984 en Estados Unidos, Zuckerberg fundó Facebook en su dormitorio de la universidad, convirtiéndola en una de las plataformas más influyentes del mundo. Su visión de conectar a las personas y fomentar la comunicación global ha transformado la forma en que interactuamos en línea. Además, Zuckerberg ha liderado iniciativas en inteligencia artificial, realidad virtual y filantropía, buscando impactar positivamente en la sociedad a través de la tecnología.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Mark%20Zuckerberg.jpeg',
    facts: { birthYear: 1984, age: 40, fortune: '$120.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'jeff-bezos',
    name: 'Jeff Bezos',
    shortDescription: 'Jeff Bezos, fundador de Amazon, líder visionario en comercio electrónico y tecnología.',
    description: 'Jeff Bezos, fundador de Amazon, es una figura emblemática en el mundo empresarial y tecnológico. Nacido en 1964 en los Estados Unidos, se destacó por su visión audaz y su capacidad para transformar la manera en que compramos y consumimos. Como CEO de Amazon, lideró la expansión de la empresa desde una librería en línea hasta un gigante global del comercio electrónico. Su enfoque implacable en la innovación y la satisfacción del cliente lo convirtió en la persona más rica del mundo. Además, Bezos ha incursionado en otros campos, como la exploración espacial a través de su empresa Blue Origin.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/jeff-bezos.jpg',
    facts: { birthYear: 1964, age: 60, fortune: '$100.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  },
  {
    id: 'zhong-shanshan',
    name: 'Zhong Shanshan',
    shortDescription: 'Presidente de Nongfu Spring, líder en la industria de bebidas de China, famoso por su enfoque en la calidad.',
    description: 'Fundador y presidente de Nongfu Spring, es una destacada figura en la industria de bebidas de China. Nacido en 1954, Zhong ha construido su imperio desde cero, convirtiendo a Nongfu Spring en una de las marcas de agua embotellada más grandes del país. Su enfoque en la calidad y la salud ha resonado con los consumidores chinos, llevando a un crecimiento exponencial de la empresa. Además, Zhong es conocido por su discreción y su enfoque pragmático en los negocios, lo que lo ha convertido en uno de los hombres más ricos de China.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Zhong%20Shanshan.jpg',
    facts: { birthYear: 1954, age: 70, fortune: '$85.000.000.000' },
    extraInfo: { industry: 'Bebidas', countryOfBirth: 'China', continent: 'Asia' }
  },
  {
    id: 'steve-ballmer',
    name: 'Steve Ballmer',
    shortDescription: 'Ex CEO de Microsoft y propietario de los Clippers, líder tecnológico y deportivo influyente.',
    description: 'ex CEO de Microsoft y propietario de Los Angeles Clippers, es una figura destacada en la industria tecnológica y deportiva. Nacido en 1956 en Estados Unidos, Ballmer dirigió Microsoft durante un período de expansión significativa, consolidando su posición como líder en software. Su enfoque apasionado y su energía contagiosa lo convirtieron en una figura icónica dentro de la empresa. Después de dejar Microsoft, Ballmer se ha dedicado a la propiedad deportiva, adquiriendo los Clippers y demostrando su liderazgo en un nuevo campo.',
    imageUrl: 'https://raw.githubusercontent.com/Natyushk/DEV014-Dataverse/main/IMAGENES/Steve%20Ballmer.jpg',
    facts: { birthYear: 1956, age: 68, fortune: '$80.000.000.000' },
    extraInfo: {
      industry: 'Tecnología',
      countryOfBirth: 'Estados Unidos',
      continent: 'América'
    }
  }
]
describe('filterByContinent', () => {
  it('Devuelve 3 elementos para filtro América', () => {
    expect(filterByContinent(data, 'América').length).toEqual(3);
  })
  it('Devuelve 1 elemento para filtro Asia', () => {
    expect(filterByContinent(data, 'Asia').length).toEqual(1);
  } )
  it('No aplica ningun filtro para la opción Todos', () => {
    expect(filterByContinent(data, 'Todos').length).toEqual(5);
  })
});

describe('sortBy', () => {
  it('Ordena por nombre en orden alfabético ascendente', () => {
    expect(sortBy(data, 'asc')).toEqual(SORT_BY_NAME_ASC);
  });

  it('Ordena por nombre en orden alfabético descendente', () => {
    expect(sortBy(data, 'desc')).toEqual(SORT_BY_NAME_DESC);
  });

  it('Ordena por fortuna de forma ascendente', () => {
    expect(sortBy(data, 'fortune-asc')).toEqual(SORT_BY_FORTUNE_ASC);
  });

  it('Ordena por fortuna de forma descendente', () => {
    expect(sortBy(data, 'fortune-desc')).toEqual(SORT_BY_FORTUNE_DESC);
  })
});

describe('calculateFortuneStats', () => {
  it('Devuelve un arreglo con la suma total de la fortuna y el promedio', () => {
    expect(calculateFortuneStats(data)).toEqual([535,'107.00']);
  })
});


