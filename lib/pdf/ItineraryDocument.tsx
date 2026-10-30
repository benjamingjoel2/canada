import { Document, Page, StyleSheet, Text, View, Svg, Circle, Path } from '@react-pdf/renderer';
import type { Journey, Locale } from '@/data/types';
import { site } from '@/config/site';
import { pricing } from '@/config/pricing';
import { getEvent, getStay } from '@/lib/content';
import { getPlace } from '@/lib/travel';
import { dayLabel, plain, tr } from '@/lib/l10n';

const c = { forest: '#1f3a2e', lake: '#1f6f6c', granite: '#5e6468', birch: '#f4efe4', maple: '#b8322a', ink: '#18201c' };

const s = StyleSheet.create({
  page: { padding: 48, paddingBottom: 64, fontFamily: 'Helvetica', fontSize: 10.5, color: c.ink, lineHeight: 1.5 },
  cover: { padding: 0, backgroundColor: c.forest, color: c.birch },
  coverInner: { padding: 56, flex: 1, justifyContent: 'space-between' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brandText: { fontFamily: 'Times-Roman', fontSize: 16 },
  eyebrow: { fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: c.lake, marginBottom: 6 },
  title: { fontFamily: 'Times-Roman', fontSize: 40, lineHeight: 1.1 },
  h2: { fontFamily: 'Times-Roman', fontSize: 20, color: c.forest, marginTop: 20, marginBottom: 8 },
  h3: { fontFamily: 'Times-Bold', fontSize: 12, color: c.forest },
  muted: { color: c.granite },
  rule: { borderBottomWidth: 0.5, borderBottomColor: '#cfd2cf', marginVertical: 10 },
  dayRow: { flexDirection: 'row', gap: 14, paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: '#e3e4e2' },
  dayLabel: { width: 70, fontFamily: 'Times-Italic', color: c.lake, fontSize: 11 },
  note: { backgroundColor: c.birch, padding: 12, marginTop: 10 },
  footer: { position: 'absolute', bottom: 28, left: 48, right: 48, fontSize: 7.5, color: c.granite, flexDirection: 'row', justifyContent: 'space-between' },
});

const L = {
  en: { journey: 'A private journey', days: 'days', overview: 'Overview', honest: 'An honest note', route: 'The route', itinerary: 'Day by day', includes: "What's included", stays: 'Where you might stay', events: 'Natural events on this route (verify yearly)', price: 'From', perPerson: 'per person, in Canadian dollars', priceNote: `Every journey is private and priced to your dates. Journeys generally start around CA$${pricing.fromPerPersonPerDayCAD.toLocaleString('en-CA')} per person per day, excluding international flights.`, prepared: 'Prepared for', contact: 'Talk to us', page: 'Page', placeholder: '(placeholder)' },
  fr: { journey: 'Un voyage privé', days: 'jours', overview: 'Aperçu', honest: 'En toute honnêteté', route: 'L’itinéraire', itinerary: 'Jour par jour', includes: 'Ce qui est inclus', stays: 'Où vous pourriez séjourner', events: 'Événements naturels sur le parcours (à vérifier chaque année)', price: 'À partir de', perPerson: 'par personne, en dollars canadiens', priceNote: `Chaque voyage est privé et chiffré selon vos dates. Nos voyages commencent généralement autour de ${pricing.fromPerPersonPerDayCAD.toLocaleString('fr-CA')} $ CA par personne et par jour, hors vols internationaux.`, prepared: 'Préparé pour', contact: 'Nous contacter', page: 'Page', placeholder: '(exemple)' },
};

function Mark({ color }: { color: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={10.5} stroke={color} strokeWidth={1} fill="none" />
      <Path d="M12 3.5 L14.6 12 L12 10.6 L9.4 12 Z" fill={c.maple} />
      <Path d="M12 20.5 L9.4 12 L12 13.4 L14.6 12 Z" fill={color} />
    </Svg>
  );
}

export function ItineraryDocument({ journey, locale, preparedFor }: { journey: Journey; locale: Locale; preparedFor: string }) {
  const t = L[locale];
  const route = journey.route.map((id) => getPlace(id)).filter((p) => p !== undefined).map((p) => tr(p.name, locale));
  const stays = journey.stayIds.map(getStay).filter((x) => x !== undefined);
  const events = journey.eventIds.map(getEvent).filter((x) => x !== undefined);
  const price = journey.fromPerPersonCAD.toLocaleString(locale === 'fr' ? 'fr-CA' : 'en-CA');
  const footer = (
    <View style={s.footer} fixed>
      <Text>{site.name} · {site.contact.email}</Text>
      <Text render={({ pageNumber, totalPages }) => `${t.page} ${pageNumber} / ${totalPages}`} />
    </View>
  );

  return (
    <Document title={`${plain(tr(journey.title, locale))} — ${site.name}`} author={site.name} language={locale}>
      <Page size="A4" style={s.cover}>
        <View style={s.coverInner}>
          <View style={s.brand}>
            <Mark color={c.birch} />
            <Text style={s.brandText}>{site.name}</Text>
          </View>
          <View>
            <Text style={[s.eyebrow, { color: '#c8e8e6' }]}>{t.journey} · {journey.days} {t.days}</Text>
            <Text style={s.title}>{plain(tr(journey.title, locale))}</Text>
            <Text style={{ marginTop: 16, fontSize: 12, maxWidth: 380, color: '#e9e4d8' }}>{tr(journey.summary, locale)}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 9, color: '#c9c4b8' }}>{t.prepared}: {preparedFor}</Text>
            <Text style={{ fontFamily: 'Times-Italic', fontSize: 14, marginTop: 6 }}>{site.tagline[locale]}</Text>
          </View>
        </View>
      </Page>

      <Page size="A4" style={s.page}>
        <Text style={s.eyebrow}>{t.overview}</Text>
        <Text style={{ fontSize: 12 }}>{tr(journey.intro, locale)}</Text>
        {journey.honestNote && (
          <View style={s.note}>
            <Text style={s.h3}>{t.honest}</Text>
            <Text style={{ marginTop: 4 }}>{tr(journey.honestNote, locale)}</Text>
          </View>
        )}
        <Text style={s.h2}>{t.route}</Text>
        <Text style={s.muted}>{route.join('  ›  ')}</Text>

        <Text style={s.h2}>{t.itinerary}</Text>
        {journey.itinerary.map((d, i) => (
          <View key={i} style={s.dayRow} wrap={false}>
            <Text style={s.dayLabel}>{dayLabel(d.days, locale)}</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.h3}>{plain(tr(d.title, locale))}</Text>
              <Text style={{ marginTop: 2 }}>{tr(d.body, locale)}</Text>
            </View>
          </View>
        ))}

        <View wrap={false}>
          <Text style={s.h2}>{t.includes}</Text>
          {journey.includes.map((x, i) => (
            <Text key={i}>—  {tr(x, locale)}</Text>
          ))}
        </View>

        {stays.length > 0 && (
          <View wrap={false}>
            <Text style={s.h2}>{t.stays}</Text>
            {stays.map((st) => (
              <Text key={st.id}>
                <Text style={s.h3}>{st.name}</Text> {t.placeholder} — {tr(st.style, locale)}
              </Text>
            ))}
          </View>
        )}

        {events.length > 0 && (
          <View wrap={false}>
            <Text style={s.h2}>{t.events}</Text>
            {events.map((e) => (
              <Text key={e.id}>—  {tr(e.title, locale)}</Text>
            ))}
          </View>
        )}

        <View wrap={false} style={[s.note, { marginTop: 24 }]}>
          <Text style={s.h3}>{t.price} {locale === 'fr' ? `${price} $ CA` : `CA$${price}`} {t.perPerson}</Text>
          <Text style={[s.muted, { marginTop: 4 }]}>{t.priceNote}</Text>
        </View>


        <View wrap={false} style={{ marginTop: 20 }}>
          <Text style={s.h2}>{t.contact}</Text>
          <Text>{site.contact.email}</Text>
          <Text style={s.muted}>{site.url}</Text>
          <Text style={[s.muted, { marginTop: 8, fontSize: 8 }]}>{site.address.lines.join(', ')}</Text>
        </View>
        {footer}
      </Page>
    </Document>
  );
}
