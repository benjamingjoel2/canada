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
    flightNote: { en: 'Direct flights run most of the year. Otherwise connect in Toronto or Montréal and add two or three hours.', fr: 'Des vols directs existent la majeure partie de l’année. Sinon, correspondance à Toronto ou Montréal : comptez deux ou trois heures de plus.', de: "Direktflüge gibt es fast das ganze Jahr. Sonst umsteigen in Toronto oder Montréal und zwei bis drei Stunden hinzurechnen.", es: "Hay vuelos directos casi todo el año. Si no, se hace escala en Toronto o Montreal y hay que sumar dos o tres horas." },
    driveMins: 3480,
    driveNote: { en: 'About 5,800 km. People do it. Allow a week, and more if you want to enjoy it.', fr: 'Environ 5 800 km. Certains le font. Prévoyez une semaine, davantage si vous voulez en profiter.', de: "Etwa 5.800 km. Manche machen das. Rechnen Sie mit einer Woche, mehr, wenn Sie es genießen wollen.", es: "Unos 5.800 km. Hay quien lo hace. Cuente con una semana, y más si quiere disfrutarlo." },
  },
  {
    from: 'vancouver',
    to: 'toronto',
    flightMins: 270,
    driveMins: 2520,
    driveNote: { en: 'About 4,400 km, much of it across the prairies. Four or five long days.', fr: 'Environ 4 400 km, en bonne partie à travers les Prairies. Quatre ou cinq longues journées.', de: "Etwa 4.400 km, ein Großteil durch die Prärie. Vier oder fünf lange Tage.", es: "Unos 4.400 km, buena parte por la pradera. Cuatro o cinco días largos." },
  },
  {
    from: 'vancouver',
    to: 'montreal',
    flightMins: 290,
    driveMins: 2760,
    driveNote: { en: 'About 4,600 km. The train takes four days and has better views.', fr: 'Environ 4 600 km. Le train met quatre jours, avec une meilleure vue.', de: "Etwa 4.600 km. Der Zug braucht vier Tage und hat die schönere Aussicht.", es: "Unos 4.600 km. El tren tarda cuatro días y tiene mejores vistas." },
  },
  {
    from: 'toronto',
    to: 'halifax',
    flightMins: 125,
    driveMins: 1080,
    driveNote: { en: 'About 1,800 km through Quebec and New Brunswick. Two days, comfortably.', fr: 'Environ 1 800 km par le Québec et le Nouveau-Brunswick. Deux jours, sans se presser.', de: "Etwa 1.800 km durch Québec und New Brunswick. Zwei Tage, ganz entspannt.", es: "Unos 1.800 km por Quebec y Nuevo Brunswick. Dos días, con calma." },
  },
  {
    from: 'montreal',
    to: 'halifax',
    flightMins: 110,
    driveMins: 750,
    driveNote: { en: 'There’s also an overnight train, a few days a week.', fr: 'Il existe aussi un train de nuit, quelques jours par semaine.', de: "Es gibt auch einen Nachtzug, an einigen Tagen pro Woche.", es: "También hay un tren nocturno, algunos días a la semana." },
  },
  {
    from: 'winnipeg',
    to: 'toronto',
    flightMins: 150,
    driveMins: 1260,
    driveNote: { en: 'About 2,100 km, most of it rock, lake and forest north of Lake Superior.', fr: 'Environ 2 100 km, surtout de la roche, des lacs et de la forêt au nord du lac Supérieur.', de: "Etwa 2.100 km, größtenteils Fels, See und Wald nördlich des Lake Superior.", es: "Unos 2.100 km, casi todo roca, lagos y bosque al norte del lago Superior." },
  },

  // ── British Columbia ───────────────────────────────────────────────────────
  {
    from: 'vancouver',
    to: 'victoria',
    flightMins: 35,
    flightNote: { en: 'Floatplane, harbour to harbour.', fr: 'En hydravion, d’un port à l’autre.', de: "Wasserflugzeug, von Hafen zu Hafen.", es: "Hidroavión, de puerto a puerto." },
    driveMins: 210,
    driveNote: { en: 'Includes the ferry (about 1 h 35) and the drive to and from the terminals. Book the ferry in summer.', fr: 'Traversier compris (environ 1 h 35) et trajets jusqu’aux terminaux. Réservez le traversier en été.', de: "Inklusive Fähre (etwa 1 h 35) und Fahrt zu und von den Terminals. Im Sommer die Fähre reservieren.", es: "Incluye el ferry (aprox. 1 h 35) y el trayecto a las terminales y desde ellas. En verano, reserve el ferry." },
  },
  {
    from: 'vancouver',
    to: 'whistler',
    driveMins: 120,
    driveNote: { en: 'The Sea-to-Sky Highway. Allow longer for the view, and in snow.', fr: 'La route Sea-to-Sky. Comptez plus pour la vue, et par temps de neige.', de: "Der Sea-to-Sky Highway. Mehr Zeit einplanen für die Aussicht und bei Schnee.", es: "La Sea-to-Sky Highway. Cuente con más tiempo por las vistas, y si nieva." },
  },
  {
    from: 'vancouver',
    to: 'tofino',
    flightMins: 50,
    flightNote: { en: 'Small scheduled planes and floatplanes. Weather permitting.', fr: 'Petits avions de ligne et hydravions. Si la météo le permet.', de: "Kleine Linienflugzeuge und Wasserflugzeuge. Wenn das Wetter mitspielt.", es: "Avionetas regulares e hidroaviones. Si el tiempo lo permite." },
    driveMins: 330,
    driveNote: { en: 'Includes the ferry to Nanaimo. The last stretch is winding and slow, and worth it.', fr: 'Traversier vers Nanaimo compris. La dernière portion est sinueuse et lente, et vaut le détour.', de: "Inklusive Fähre nach Nanaimo. Das letzte Stück ist kurvig und langsam, und es lohnt sich.", es: "Incluye el ferry a Nanaimo. El último tramo es sinuoso y lento, y merece la pena." },
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
    driveNote: { en: 'Mountain passes. In winter, check conditions and use winter tires.', fr: 'Cols de montagne. En hiver, vérifiez l’état des routes et roulez en pneus d’hiver.', de: "Bergpässe. Im Winter die Bedingungen prüfen und Winterreifen nutzen.", es: "Puertos de montaña. En invierno, consulte el estado de la carretera y use neumáticos de invierno." },
  },
  {
    from: 'vancouver',
    to: 'bella-coola',
    flightMins: 120,
    flightNote: { en: 'Small regional flights, not every day.', fr: 'Petits vols régionaux, pas tous les jours.', de: "Kleine Regionalflüge, nicht täglich.", es: "Pequeños vuelos regionales, no todos los días." },
    driveMins: 720,
    driveNote: { en: 'About 1,000 km. The last part includes "the Hill": gravel, switchbacks and grades up to 18 percent. Not for rental-car nerves.', fr: 'Environ 1 000 km. La fin passe par « the Hill » : gravier, lacets et pentes jusqu’à 18 %. Pas pour les nerfs fragiles.', de: "Etwa 1.000 km. Das letzte Stück umfasst „the Hill“: Schotter, Serpentinen und bis zu 18 Prozent Gefälle. Nichts für die Nerven von Mietwagenfahrern.", es: "Unos 1.000 km. El último tramo incluye «the Hill»: grava, curvas cerradas y pendientes de hasta el 18 por ciento. No apto para nervios de coche de alquiler." },
  },
  {
    from: 'vancouver',
    to: 'prince-rupert',
    flightMins: 120,
    driveMins: 960,
    driveNote: { en: 'About 1,500 km. Or take the Inside Passage ferry from Port Hardy, which is the better idea.', fr: 'Environ 1 500 km. Ou prenez le traversier du passage de l’Intérieur depuis Port Hardy, ce qui est une meilleure idée.', de: "Etwa 1.500 km. Oder nehmen Sie ab Port Hardy die Fähre durch die Inside Passage, die bessere Idee.", es: "Unos 1.500 km. O tome el ferry del Inside Passage desde Port Hardy, que es mejor idea." },
  },
  {
    from: 'vancouver',
    to: 'haida-gwaii',
    flightMins: 120,
    flightNote: { en: 'Direct to Sandspit or Masset on some days.', fr: 'Vols directs vers Sandspit ou Masset certains jours.', de: "An manchen Tagen direkt nach Sandspit oder Masset.", es: "Algunos días, directo a Sandspit o Masset." },
    driveNote: { en: 'No road. Drive to Prince Rupert, then take the ferry across Hecate Strait.', fr: 'Pas de route. Rejoignez Prince Rupert en voiture, puis prenez le traversier sur le détroit d’Hecate.', de: "Keine Straße. Fahrt nach Prince Rupert, dann mit der Fähre über die Hecate Strait.", es: "No hay carretera. En coche hasta Prince Rupert y luego en ferry por el estrecho de Hecate." },
  },
  {
    from: 'prince-rupert',
    to: 'haida-gwaii',
    driveNote: { en: 'No road. The ferry takes about seven hours across Hecate Strait, which has opinions about the weather.', fr: 'Pas de route. Le traversier met environ sept heures pour franchir le détroit d’Hecate, qui a son mot à dire sur la météo.', de: "Keine Straße. Die Fähre braucht etwa sieben Stunden über die Hecate Strait, die zum Wetter ihre eigene Meinung hat.", es: "No hay carretera. El ferry tarda unas siete horas en cruzar el estrecho de Hecate, que tiene sus propias opiniones sobre el tiempo." },
  },

  // ── Alberta & the Rockies ──────────────────────────────────────────────────
  {
    from: 'calgary',
    to: 'banff',
    driveMins: 90,
    driveNote: { en: 'Add 20 minutes from the airport.', fr: 'Ajoutez 20 minutes depuis l’aéroport.', de: "20 Minuten vom Flughafen hinzurechnen.", es: "Sume 20 minutos desde el aeropuerto." },
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
    driveNote: { en: 'Via the Icefields Parkway. Four hours without stopping. Nobody manages it without stopping.', fr: 'Par la promenade des Glaciers. Quatre heures sans arrêt. Personne n’y arrive sans s’arrêter.', de: "Über den Icefields Parkway. Ohne Halt vier Stunden. Niemand schafft es ohne Halt.", es: "Por la Icefields Parkway. Cuatro horas sin parar. Nadie lo consigue sin parar." },
  },
  {
    from: 'lake-louise',
    to: 'jasper',
    driveMins: 200,
    driveNote: { en: 'Little phone signal and one fuel stop on the way. Fill up first.', fr: 'Peu de réseau et une seule station-service en route. Faites le plein avant.', de: "Kaum Handyempfang und nur eine Tankstelle unterwegs. Vorher volltanken.", es: "Apenas hay cobertura y solo una gasolinera por el camino. Llene el depósito antes." },
  },
  {
    from: 'calgary',
    to: 'jasper',
    flightNote: { en: 'No scheduled flights to Jasper. Fly to Edmonton or Calgary and drive.', fr: 'Pas de vols réguliers vers Jasper. Atterrissez à Edmonton ou Calgary, puis prenez la route.', de: "Keine Linienflüge nach Jasper. Nach Edmonton oder Calgary fliegen und fahren.", es: "No hay vuelos regulares a Jasper. Vuele a Edmonton o Calgary y siga en coche." },
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
    driveNote: { en: 'About 970 km over several mountain passes. Better as two days.', fr: 'Environ 970 km par plusieurs cols. Mieux en deux jours.', de: "Etwa 970 km über mehrere Bergpässe. Besser auf zwei Tage verteilt.", es: "Unos 970 km por varios puertos de montaña. Mejor en dos días." },
  },
  {
    from: 'vancouver',
    to: 'banff',
    flightMins: 90,
    flightNote: { en: 'Fly to Calgary, then about 1 h 45 by road. There’s no airport in Banff.', fr: 'Vol jusqu’à Calgary, puis environ 1 h 45 de route. Il n’y a pas d’aéroport à Banff.', de: "Flug nach Calgary, dann etwa 1 h 45 auf der Straße. Banff hat keinen Flughafen.", es: "Vuelo a Calgary y luego aprox. 1 h 45 por carretera. Banff no tiene aeropuerto." },
    driveMins: 540,
  },
  {
    from: 'vancouver',
    to: 'jasper',
    flightMins: 90,
    flightNote: { en: 'Fly to Edmonton, then about four hours by road. Or take the train: around 20 hours, mostly worth it.', fr: 'Vol jusqu’à Edmonton, puis environ quatre heures de route. Ou le train : une vingtaine d’heures, qui valent presque toutes le coup.', de: "Flug nach Edmonton, dann etwa vier Stunden auf der Straße. Oder mit dem Zug: rund 20 Stunden, die sich größtenteils lohnen.", es: "Vuelo a Edmonton y luego unas cuatro horas por carretera. O en tren: unas 20 horas, que en su mayoría merecen la pena." },
    driveMins: 540,
  },
  {
    from: 'whistler',
    to: 'jasper',
    driveMins: 570,
    driveNote: { en: 'A long, quiet day through the BC interior. Most people split it.', fr: 'Une longue journée tranquille à travers l’intérieur de la Colombie-Britannique. La plupart des gens la coupent en deux.', de: "Ein langer, ruhiger Tag durch das Innere von BC. Die meisten teilen ihn auf.", es: "Una jornada larga y tranquila por el interior de Columbia Británica. Casi todo el mundo la divide." },
  },

  // ── The North ──────────────────────────────────────────────────────────────
  {
    from: 'vancouver',
    to: 'whitehorse',
    flightMins: 145,
    driveMins: 1560,
    driveNote: { en: 'About 2,400 km, much of it on the Alaska Highway. Three days at least. Wildlife on the road is normal.', fr: 'Environ 2 400 km, en grande partie sur la route de l’Alaska. Trois jours minimum. Croiser des animaux sur la route est normal.', de: "Etwa 2.400 km, ein Großteil auf dem Alaska Highway. Mindestens drei Tage. Wildtiere auf der Straße sind normal.", es: "Unos 2.400 km, buena parte por la Alaska Highway. Tres días como mínimo. Encontrarse fauna en la carretera es lo normal." },
  },
  {
    from: 'whitehorse',
    to: 'dawson-city',
    flightMins: 75,
    driveMins: 360,
    driveNote: { en: 'About 530 km on the Klondike Highway. Very few services between towns.', fr: 'Environ 530 km par la route du Klondike. Très peu de services entre les villages.', de: "Etwa 530 km auf dem Klondike Highway. Zwischen den Orten sehr wenig Infrastruktur.", es: "Unos 530 km por la Klondike Highway. Muy pocos servicios entre poblaciones." },
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
    flightNote: { en: 'Usually via Edmonton or Calgary. There may be a seasonal direct flight some years.', fr: 'Généralement via Edmonton ou Calgary. Certaines années, un vol direct saisonnier existe.', de: "Meist über Edmonton oder Calgary. In manchen Jahren gibt es einen saisonalen Direktflug.", es: "Normalmente vía Edmonton o Calgary. Algunos años puede haber un vuelo directo de temporada." },
    driveMins: 1800,
    driveNote: { en: 'Possible, through northern BC and Alberta. About 30 hours. We wouldn’t.', fr: 'Possible, par le nord de la Colombie-Britannique et de l’Alberta. Environ 30 heures. Nous ne le ferions pas.', de: "Möglich, durch das nördliche BC und Alberta. Etwa 30 Stunden. Wir würden es nicht tun.", es: "Es posible, por el norte de Columbia Británica y Alberta. Unas 30 horas. Nosotros no lo haríamos." },
  },
  {
    from: 'edmonton',
    to: 'yellowknife',
    flightMins: 115,
    driveMins: 960,
    driveNote: { en: 'About 1,500 km. Long, straight, and very quiet after the Alberta border.', fr: 'Environ 1 500 km. Long, droit et très calme après la frontière de l’Alberta.', de: "Etwa 1.500 km. Lang, gerade und hinter der Grenze zu Alberta sehr ruhig.", es: "Unos 1.500 km. Largo, recto y muy tranquilo pasada la frontera de Alberta." },
  },
  {
    from: 'yellowknife',
    to: 'fort-simpson',
    flightMins: 75,
    driveMins: 420,
    driveNote: { en: 'Includes a river crossing by ferry in summer and by ice road in winter. Closed for weeks at freeze-up and break-up.', fr: 'Comprend une traversée de rivière par bac en été et par route de glace en hiver. Fermée plusieurs semaines au gel et au dégel.', de: "Inklusive Flussüberquerung per Fähre im Sommer und per Eisstraße im Winter. Beim Zufrieren und Aufbrechen wochenlang gesperrt.", es: "Incluye cruzar un río en ferry en verano y por carretera de hielo en invierno. Cerrado durante semanas cuando se congela y cuando se deshiela." },
  },
  {
    from: 'winnipeg',
    to: 'churchill',
    flightMins: 150,
    driveNote: { en: 'There’s no road to Churchill. Really. The train takes about two days from Winnipeg.', fr: 'Il n’y a pas de route jusqu’à Churchill. Vraiment. Le train met environ deux jours depuis Winnipeg.', de: "Nach Churchill führt keine Straße. Wirklich. Der Zug braucht ab Winnipeg etwa zwei Tage.", es: "A Churchill no llega ninguna carretera. De verdad. El tren tarda unos dos días desde Winnipeg." },
  },
  {
    from: 'toronto',
    to: 'churchill',
    flightMins: 480,
    flightNote: { en: 'Via Winnipeg, with a typical connection. Most people stay a night in Winnipeg.', fr: 'Via Winnipeg, avec une correspondance classique. La plupart des gens passent une nuit à Winnipeg.', de: "Über Winnipeg, mit üblicher Umsteigezeit. Die meisten übernachten in Winnipeg.", es: "Vía Winnipeg, con una escala normal. Casi todo el mundo pasa una noche en Winnipeg." },
    driveNote: { en: 'No road. Drive or fly to Winnipeg, then fly or take the train.', fr: 'Pas de route. Rejoignez Winnipeg, puis l’avion ou le train.', de: "Keine Straße. Fahrt oder Flug nach Winnipeg, dann Flug oder Zug.", es: "No hay carretera. En coche o avión hasta Winnipeg y luego en avión o tren." },
  },
  {
    from: 'vancouver',
    to: 'churchill',
    flightMins: 420,
    flightNote: { en: 'Via Winnipeg. Usually with an overnight stop, because the connections rarely line up.', fr: 'Via Winnipeg. Souvent avec une nuit sur place, car les correspondances s’enchaînent rarement bien.', de: "Über Winnipeg. Meist mit Übernachtung, weil die Anschlüsse selten passen.", es: "Vía Winnipeg. Normalmente con una noche de por medio, porque las conexiones rara vez encajan." },
    driveNote: { en: 'No road to Churchill.', fr: 'Pas de route jusqu’à Churchill.', de: "Keine Straße nach Churchill.", es: "No hay carretera a Churchill." },
  },
  {
    from: 'ottawa',
    to: 'iqaluit',
    flightMins: 180,
    driveNote: { en: 'No road to Nunavut. Everything comes by plane, or once a year by sea.', fr: 'Aucune route ne mène au Nunavut. Tout arrive par avion, ou une fois par an par bateau.', de: "Keine Straße nach Nunavut. Alles kommt per Flugzeug oder einmal im Jahr übers Meer.", es: "No hay carretera a Nunavut. Todo llega en avión o, una vez al año, por mar." },
  },
  {
    from: 'montreal',
    to: 'iqaluit',
    flightMins: 195,
    driveNote: { en: 'No road.', fr: 'Pas de route.', de: "Keine Straße.", es: "No hay carretera." },
  },
  {
    from: 'iqaluit',
    to: 'pond-inlet',
    flightMins: 240,
    flightNote: { en: 'Often with a stop in another community. Weather delays are normal; we plan spare days.', fr: 'Souvent avec une escale dans une autre communauté. Les retards météo sont normaux ; nous prévoyons des jours de marge.', de: "Oft mit Zwischenstopp in einer anderen Gemeinde. Wetterverspätungen sind normal; wir planen Reservetage ein.", es: "A menudo con escala en otra comunidad. Los retrasos por el tiempo son normales; dejamos días de margen." },
    driveNote: { en: 'No road. About 1,000 km of Baffin Island in between.', fr: 'Pas de route. Environ 1 000 km de terre de Baffin entre les deux.', de: "Keine Straße. Dazwischen liegen etwa 1.000 km Baffin Island.", es: "No hay carretera. Entre medias, unos 1.000 km de isla de Baffin." },
  },

  // ── Ontario ────────────────────────────────────────────────────────────────
  {
    from: 'toronto',
    to: 'niagara-falls',
    driveMins: 90,
    driveNote: { en: 'More on a summer Friday. Much more.', fr: 'Davantage un vendredi d’été. Beaucoup plus.', de: "Mehr an einem Sommerfreitag. Viel mehr.", es: "Más un viernes de verano. Mucho más." },
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
    driveNote: { en: 'The train takes about five hours, centre to centre, and you can read.', fr: 'Le train met environ cinq heures, de centre-ville à centre-ville, et on peut lire.', de: "Der Zug braucht von Zentrum zu Zentrum etwa fünf Stunden, und Sie können lesen.", es: "El tren tarda unas cinco horas de centro a centro, y se puede leer." },
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
    flightNote: { en: 'It exists. The drive or the train is usually easier.', fr: 'Ça existe. La route ou le train sont généralement plus simples.', de: "Gibt es. Auto oder Zug sind meist einfacher.", es: "Existe. El coche o el tren suelen ser más fáciles." },
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
    driveNote: { en: 'Includes the short free ferry across the Saguenay at the end.', fr: 'Comprend, à la fin, le court traversier gratuit sur le Saguenay.', de: "Inklusive der kurzen kostenlosen Fähre über den Saguenay am Ende.", es: "Incluye el corto ferry gratuito por el Saguenay al final." },
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
    driveNote: { en: 'Over the Confederation Bridge, 12.9 km long. Or take the seasonal ferry from Caribou.', fr: 'Par le pont de la Confédération, long de 12,9 km. Ou le traversier saisonnier depuis Caribou.', de: "Über die 12,9 km lange Confederation Bridge. Oder mit der saisonalen Fähre ab Caribou.", es: "Por el puente de la Confederación, de 12,9 km. O en el ferry de temporada desde Caribou." },
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
    driveNote: { en: 'Includes the ferry from North Sydney, about seven hours to Port aux Basques, then a full day across the island. Two days, realistically.', fr: 'Comprend le traversier depuis North Sydney, environ sept heures jusqu’à Port aux Basques, puis une journée entière pour traverser l’île. Deux jours, en réalité.', de: "Inklusive Fähre ab North Sydney, etwa sieben Stunden bis Port aux Basques, dann ein ganzer Tag quer über die Insel. Realistisch zwei Tage.", es: "Incluye el ferry desde North Sydney, unas siete horas hasta Port aux Basques, y luego un día entero cruzando la isla. Dos días, siendo realistas." },
  },
  {
    from: 'st-johns',
    to: 'gros-morne',
    flightMins: 60,
    flightNote: { en: 'Fly to Deer Lake, then about 45 minutes by road.', fr: 'Vol jusqu’à Deer Lake, puis environ 45 minutes de route.', de: "Flug nach Deer Lake, dann etwa 45 Minuten auf der Straße.", es: "Vuelo a Deer Lake y luego unos 45 minutos por carretera." },
    driveMins: 450,
    driveNote: { en: 'About 700 km on the Trans-Canada. Watch for moose, especially at dusk.', fr: 'Environ 700 km par la Transcanadienne. Attention aux orignaux, surtout au crépuscule.', de: "Etwa 700 km auf dem Trans-Canada Highway. Achten Sie auf Elche, besonders in der Dämmerung.", es: "Unos 700 km por la Transcanadiense. Atención a los alces, sobre todo al anochecer." },
  },
];
