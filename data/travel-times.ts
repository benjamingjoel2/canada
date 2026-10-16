import type { TravelTime } from './types';

/**
 * Estimates, not promises. Edit freely.
 * Distances are calculated from coordinates; these times are not.
 *
 * Each pair is listed once; the tool treats A→B and B→A the same.
 * flightMins: realistic total time in the air plus a typical connection where there's no direct flight.
 * driveMins: realistic driving time without stops. Omitted where there is no road.
 */
export const travelTimes: TravelTime[] = [
  // ── Cross-country ──────────────────────────────────────────────────────────
  {
    from: 'vancouver',
    to: 'halifax',
    flightMins: 330,
    flightNote: { en: 'Direct flights run most of the year. Otherwise connect in Toronto or Montréal and add two or three hours.', fr: 'Des vols directs existent la majeure partie de l’année. Sinon, correspondance à Toronto ou Montréal : comptez deux ou trois heures de plus.' },
    driveMins: 3480,
    driveNote: { en: 'About 5,800 km. People do it. Allow a week, and more if you want to enjoy it.', fr: 'Environ 5 800 km. Certains le font. Prévoyez une semaine, davantage si vous voulez en profiter.' },
  },
  {
    from: 'vancouver',
    to: 'toronto',
    flightMins: 270,
    driveMins: 2520,
    driveNote: { en: 'About 4,400 km, much of it across the prairies. Four or five long days.', fr: 'Environ 4 400 km, en bonne partie à travers les Prairies. Quatre ou cinq longues journées.' },
  },
  {
    from: 'vancouver',
    to: 'montreal',
    flightMins: 290,
    driveMins: 2760,
    driveNote: { en: 'About 4,600 km. The train takes four days and has better views.', fr: 'Environ 4 600 km. Le train met quatre jours, avec une meilleure vue.' },
  },
  {
    from: 'toronto',
    to: 'halifax',
    flightMins: 125,
    driveMins: 1080,
    driveNote: { en: 'About 1,800 km through Quebec and New Brunswick. Two days, comfortably.', fr: 'Environ 1 800 km par le Québec et le Nouveau-Brunswick. Deux jours, sans se presser.' },
  },
  {
    from: 'montreal',
    to: 'halifax',
    flightMins: 110,
    driveMins: 750,
    driveNote: { en: 'There’s also an overnight train, a few days a week.', fr: 'Il existe aussi un train de nuit, quelques jours par semaine.' },
  },
  {
    from: 'winnipeg',
    to: 'toronto',
    flightMins: 150,
    driveMins: 1260,
    driveNote: { en: 'About 2,100 km, most of it rock, lake and forest north of Lake Superior.', fr: 'Environ 2 100 km, surtout de la roche, des lacs et de la forêt au nord du lac Supérieur.' },
  },

  // ── British Columbia ───────────────────────────────────────────────────────
  {
    from: 'vancouver',
    to: 'victoria',
    flightMins: 35,
    flightNote: { en: 'Floatplane, harbour to harbour.', fr: 'En hydravion, d’un port à l’autre.' },
    driveMins: 210,
    driveNote: { en: 'Includes the ferry (about 1 h 35) and the drive to and from the terminals. Book the ferry in summer.', fr: 'Traversier compris (environ 1 h 35) et trajets jusqu’aux terminaux. Réservez le traversier en été.' },
  },
  {
    from: 'vancouver',
    to: 'whistler',
    driveMins: 120,
    driveNote: { en: 'The Sea-to-Sky Highway. Allow longer for the view, and in snow.', fr: 'La route Sea-to-Sky. Comptez plus pour la vue, et par temps de neige.' },
  },
  {
    from: 'vancouver',
    to: 'tofino',
    flightMins: 50,
    flightNote: { en: 'Small scheduled planes and floatplanes. Weather permitting.', fr: 'Petits avions de ligne et hydravions. Si la météo le permet.' },
    driveMins: 330,
    driveNote: { en: 'Includes the ferry to Nanaimo. The last stretch is winding and slow, and worth it.', fr: 'Traversier vers Nanaimo compris. La dernière portion est sinueuse et lente, et vaut le détour.' },
  },
  {
    from: 'victoria',
    to: 'tofino',
    driveMins: 270,
  },
  {
    from: 'vancouver',
    to: 'kelowna',
    flightMins: 60,
    driveMins: 240,
    driveNote: { en: 'Mountain passes. In winter, check conditions and use winter tires.', fr: 'Cols de montagne. En hiver, vérifiez l’état des routes et roulez en pneus d’hiver.' },
  },
  {
    from: 'vancouver',
    to: 'bella-coola',
    flightMins: 120,
    flightNote: { en: 'Small regional flights, not every day.', fr: 'Petits vols régionaux, pas tous les jours.' },
    driveMins: 720,
    driveNote: { en: 'About 1,000 km. The last part includes "the Hill": gravel, switchbacks and grades up to 18 percent. Not for rental-car nerves.', fr: 'Environ 1 000 km. La fin passe par « the Hill » : gravier, lacets et pentes jusqu’à 18 %. Pas pour les nerfs fragiles.' },
  },
  {
    from: 'vancouver',
    to: 'prince-rupert',
    flightMins: 120,
    driveMins: 960,
    driveNote: { en: 'About 1,500 km. Or take the Inside Passage ferry from Port Hardy, which is the better idea.', fr: 'Environ 1 500 km. Ou prenez le traversier du passage de l’Intérieur depuis Port Hardy, ce qui est une meilleure idée.' },
  },
  {
    from: 'vancouver',
    to: 'haida-gwaii',
    flightMins: 120,
    flightNote: { en: 'Direct to Sandspit or Masset on some days.', fr: 'Vols directs vers Sandspit ou Masset certains jours.' },
    driveNote: { en: 'No road. Drive to Prince Rupert, then take the ferry across Hecate Strait.', fr: 'Pas de route. Rejoignez Prince Rupert en voiture, puis prenez le traversier sur le détroit d’Hecate.' },
  },
  {
    from: 'prince-rupert',
    to: 'haida-gwaii',
    driveNote: { en: 'No road. The ferry takes about seven hours across Hecate Strait, which has opinions about the weather.', fr: 'Pas de route. Le traversier met environ sept heures pour franchir le détroit d’Hecate, qui a son mot à dire sur la météo.' },
  },

  // ── Alberta & the Rockies ──────────────────────────────────────────────────
  {
    from: 'calgary',
    to: 'banff',
    driveMins: 90,
    driveNote: { en: 'Add 20 minutes from the airport.', fr: 'Ajoutez 20 minutes depuis l’aéroport.' },
  },
  {
    from: 'banff',
    to: 'lake-louise',
    driveMins: 45,
  },
  {
    from: 'banff',
    to: 'jasper',
    driveMins: 240,
    driveNote: { en: 'Via the Icefields Parkway. Four hours without stopping. Nobody manages it without stopping.', fr: 'Par la promenade des Glaciers. Quatre heures sans arrêt. Personne n’y arrive sans s’arrêter.' },
  },
  {
    from: 'lake-louise',
    to: 'jasper',
    driveMins: 200,
    driveNote: { en: 'Little phone signal and one fuel stop on the way. Fill up first.', fr: 'Peu de réseau et une seule station-service en route. Faites le plein avant.' },
  },
  {
    from: 'calgary',
    to: 'jasper',
    flightNote: { en: 'No scheduled flights to Jasper. Fly to Edmonton or Calgary and drive.', fr: 'Pas de vols réguliers vers Jasper. Atterrissez à Edmonton ou Calgary, puis prenez la route.' },
    driveMins: 300,
  },
  {
    from: 'edmonton',
    to: 'jasper',
    driveMins: 240,
  },
  {
    from: 'edmonton',
    to: 'calgary',
    flightMins: 50,
    driveMins: 180,
  },
  {
    from: 'vancouver',
    to: 'calgary',
    flightMins: 85,
    driveMins: 600,
    driveNote: { en: 'About 970 km over several mountain passes. Better as two days.', fr: 'Environ 970 km par plusieurs cols. Mieux en deux jours.' },
  },
  {
    from: 'vancouver',
    to: 'banff',
    flightMins: 90,
    flightNote: { en: 'Fly to Calgary, then about 1 h 45 by road. There’s no airport in Banff.', fr: 'Vol jusqu’à Calgary, puis environ 1 h 45 de route. Il n’y a pas d’aéroport à Banff.' },
    driveMins: 540,
  },
  {
    from: 'vancouver',
    to: 'jasper',
    flightMins: 90,
    flightNote: { en: 'Fly to Edmonton, then about four hours by road. Or take the train: around 20 hours, mostly worth it.', fr: 'Vol jusqu’à Edmonton, puis environ quatre heures de route. Ou le train : une vingtaine d’heures, qui valent presque toutes le coup.' },
    driveMins: 540,
  },
  {
    from: 'whistler',
    to: 'jasper',
    driveMins: 570,
    driveNote: { en: 'A long, quiet day through the BC interior. Most people split it.', fr: 'Une longue journée tranquille à travers l’intérieur de la Colombie-Britannique. La plupart des gens la coupent en deux.' },
  },

  // ── The North ──────────────────────────────────────────────────────────────
  {
    from: 'vancouver',
    to: 'whitehorse',
    flightMins: 145,
    driveMins: 1560,
    driveNote: { en: 'About 2,400 km, much of it on the Alaska Highway. Three days at least. Wildlife on the road is normal.', fr: 'Environ 2 400 km, en grande partie sur la route de l’Alaska. Trois jours minimum. Croiser des animaux sur la route est normal.' },
  },
  {
    from: 'whitehorse',
    to: 'dawson-city',
    flightMins: 75,
    driveMins: 360,
    driveNote: { en: 'About 530 km on the Klondike Highway. Very few services between towns.', fr: 'Environ 530 km par la route du Klondike. Très peu de services entre les villages.' },
  },
  {
    from: 'whitehorse',
    to: 'haines-junction',
    driveMins: 100,
  },
  {
    from: 'whitehorse',
    to: 'yellowknife',
    flightMins: 360,
    flightNote: { en: 'Usually via Edmonton or Calgary. There may be a seasonal direct flight some years.', fr: 'Généralement via Edmonton ou Calgary. Certaines années, un vol direct saisonnier existe.' },
    driveMins: 1800,
    driveNote: { en: 'Possible, through northern BC and Alberta. About 30 hours. We wouldn’t.', fr: 'Possible, par le nord de la Colombie-Britannique et de l’Alberta. Environ 30 heures. Nous ne le ferions pas.' },
  },
  {
    from: 'edmonton',
    to: 'yellowknife',
    flightMins: 115,
    driveMins: 960,
    driveNote: { en: 'About 1,500 km. Long, straight, and very quiet after the Alberta border.', fr: 'Environ 1 500 km. Long, droit et très calme après la frontière de l’Alberta.' },
  },
  {
    from: 'yellowknife',
    to: 'fort-simpson',
    flightMins: 75,
    driveMins: 420,
    driveNote: { en: 'Includes a river crossing by ferry in summer and by ice road in winter. Closed for weeks at freeze-up and break-up.', fr: 'Comprend une traversée de rivière par bac en été et par route de glace en hiver. Fermée plusieurs semaines au gel et au dégel.' },
  },
  {
    from: 'winnipeg',
    to: 'churchill',
    flightMins: 150,
    driveNote: { en: 'There’s no road to Churchill. Really. The train takes about two days from Winnipeg.', fr: 'Il n’y a pas de route jusqu’à Churchill. Vraiment. Le train met environ deux jours depuis Winnipeg.' },
  },
  {
    from: 'toronto',
    to: 'churchill',
    flightMins: 480,
    flightNote: { en: 'Via Winnipeg, with a typical connection. Most people stay a night in Winnipeg.', fr: 'Via Winnipeg, avec une correspondance classique. La plupart des gens passent une nuit à Winnipeg.' },
    driveNote: { en: 'No road. Drive or fly to Winnipeg, then fly or take the train.', fr: 'Pas de route. Rejoignez Winnipeg, puis l’avion ou le train.' },
  },
  {
    from: 'vancouver',
    to: 'churchill',
    flightMins: 420,
    flightNote: { en: 'Via Winnipeg. Usually with an overnight stop, because the connections rarely line up.', fr: 'Via Winnipeg. Souvent avec une nuit sur place, car les correspondances s’enchaînent rarement bien.' },
    driveNote: { en: 'No road to Churchill.', fr: 'Pas de route jusqu’à Churchill.' },
  },
  {
    from: 'ottawa',
    to: 'iqaluit',
    flightMins: 180,
    driveNote: { en: 'No road to Nunavut. Everything comes by plane, or once a year by sea.', fr: 'Aucune route ne mène au Nunavut. Tout arrive par avion, ou une fois par an par bateau.' },
  },
  {
    from: 'montreal',
    to: 'iqaluit',
    flightMins: 195,
    driveNote: { en: 'No road.', fr: 'Pas de route.' },
  },
  {
    from: 'iqaluit',
    to: 'pond-inlet',
    flightMins: 240,
    flightNote: { en: 'Often with a stop in another community. Weather delays are normal; we plan spare days.', fr: 'Souvent avec une escale dans une autre communauté. Les retards météo sont normaux ; nous prévoyons des jours de marge.' },
    driveNote: { en: 'No road. About 1,000 km of Baffin Island in between.', fr: 'Pas de route. Environ 1 000 km de terre de Baffin entre les deux.' },
  },

  // ── Ontario ────────────────────────────────────────────────────────────────
  {
    from: 'toronto',
    to: 'niagara-falls',
    driveMins: 90,
    driveNote: { en: 'More on a summer Friday. Much more.', fr: 'Davantage un vendredi d’été. Beaucoup plus.' },
  },
  {
    from: 'toronto',
    to: 'huntsville',
    driveMins: 150,
  },
  {
    from: 'huntsville',
    to: 'algonquin',
    driveMins: 60,
  },
  {
    from: 'toronto',
    to: 'algonquin',
    driveMins: 210,
  },
  {
    from: 'toronto',
    to: 'ottawa',
    flightMins: 60,
    driveMins: 270,
  },
  {
    from: 'toronto',
    to: 'montreal',
    flightMins: 75,
    driveMins: 330,
    driveNote: { en: 'The train takes about five hours, centre to centre, and you can read.', fr: 'Le train met environ cinq heures, de centre-ville à centre-ville, et on peut lire.' },
  },
  {
    from: 'ottawa',
    to: 'montreal',
    driveMins: 120,
  },

  // ── Quebec ─────────────────────────────────────────────────────────────────
  {
    from: 'montreal',
    to: 'quebec-city',
    flightMins: 60,
    flightNote: { en: 'It exists. The drive or the train is usually easier.', fr: 'Ça existe. La route ou le train sont généralement plus simples.' },
    driveMins: 165,
  },
  {
    from: 'quebec-city',
    to: 'baie-saint-paul',
    driveMins: 60,
  },
  {
    from: 'quebec-city',
    to: 'tadoussac',
    driveMins: 210,
    driveNote: { en: 'Includes the short free ferry across the Saguenay at the end.', fr: 'Comprend, à la fin, le court traversier gratuit sur le Saguenay.' },
  },
  {
    from: 'montreal',
    to: 'tadoussac',
    driveMins: 330,
  },

  // ── Atlantic Canada ────────────────────────────────────────────────────────
  {
    from: 'halifax',
    to: 'baddeck',
    driveMins: 240,
  },
  {
    from: 'halifax',
    to: 'charlottetown',
    flightMins: 45,
    driveMins: 195,
    driveNote: { en: 'Over the Confederation Bridge, 12.9 km long. Or take the seasonal ferry from Caribou.', fr: 'Par le pont de la Confédération, long de 12,9 km. Ou le traversier saisonnier depuis Caribou.' },
  },
  {
    from: 'halifax',
    to: 'fundy',
    driveMins: 195,
  },
  {
    from: 'halifax',
    to: 'st-johns',
    flightMins: 90,
    driveMins: 1260,
    driveNote: { en: 'Includes the ferry from North Sydney, about seven hours to Port aux Basques, then a full day across the island. Two days, realistically.', fr: 'Comprend le traversier depuis North Sydney, environ sept heures jusqu’à Port aux Basques, puis une journée entière pour traverser l’île. Deux jours, en réalité.' },
  },
  {
    from: 'st-johns',
    to: 'gros-morne',
    flightMins: 60,
    flightNote: { en: 'Fly to Deer Lake, then about 45 minutes by road.', fr: 'Vol jusqu’à Deer Lake, puis environ 45 minutes de route.' },
    driveMins: 450,
    driveNote: { en: 'About 700 km on the Trans-Canada. Watch for moose, especially at dusk.', fr: 'Environ 700 km par la Transcanadienne. Attention aux orignaux, surtout au crépuscule.' },
  },
];
