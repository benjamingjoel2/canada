/**
 * French translation review tracker.
 *
 *   npm run i18n:sync     add every French UI message key to data/translation-review.json
 *                         (new keys start as "needs-human-review"; existing statuses are kept)
 *   npm run i18n:report   list everything French that a native speaker hasn't approved yet
 *
 * To approve: set the record's `frReview: 'approved'` in /data, the key's status in
 * data/translation-review.json, or `frReview: 'approved'` in a French story's meta.
 */
import fs from 'node:fs';
import path from 'node:path';
import { provinces } from '../data/provinces';
import { regions } from '../data/regions';
import { journeys } from '../data/journeys';
import { experiences, experienceGroups } from '../data/experiences';
import { stays } from '../data/stays';
import { wildEvents } from '../data/wild-events';
import { specialists } from '../data/specialists';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faq';
import { indigenousPage, aboutPage, howWeWorkSteps } from '../data/pages';
import { places } from '../data/places';
import { worldPairs } from '../data/world-pairs';
import { mediaFrReview } from '../data/media';
import { siteFrReview } from '../config/site';

const root = path.resolve(__dirname, '..');
const reviewFile = path.join(root, 'data/translation-review.json');
type Status = 'needs-human-review' | 'approved';

function flatten(obj: Record<string, unknown>, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' && !Array.isArray(v) ? flatten(v as Record<string, unknown>, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
}

function readReview(): { messages: Record<string, Status> } {
  if (!fs.existsSync(reviewFile)) return { messages: {} };
  return JSON.parse(fs.readFileSync(reviewFile, 'utf8'));
}

function sync() {
  const fr = JSON.parse(fs.readFileSync(path.join(root, 'messages/fr.json'), 'utf8'));
  const keys = flatten(fr);
  const current = readReview().messages;
  const messages: Record<string, Status> = {};
  for (const k of keys) messages[k] = current[k] ?? 'needs-human-review';
  const out = {
    _readme:
      'French UI strings (messages/fr.json) are machine-assisted drafts. Each key stays "needs-human-review" until a native French speaker approves it. Content in /data carries its own frReview field. Run `npm run i18n:report`.',
    messages,
  };
  fs.writeFileSync(reviewFile, JSON.stringify(out, null, 2) + '\n');
  console.log(`Synced ${keys.length} French message keys.`);
}

function report() {
  const list = process.argv.includes('--list');
  const groups: [string, { id?: string; slug?: string; frReview: Status }[]][] = [
    ['data/provinces.ts', provinces],
    ['data/regions.ts', regions],
    ['data/places.ts', places],
    ['data/world-pairs.ts', worldPairs],
    ['data/journeys.ts', journeys],
    ['data/experiences.ts (groups)', experienceGroups],
    ['data/experiences.ts', experiences],
    ['data/stays.ts', stays],
    ['data/wild-events.ts', wildEvents],
    ['data/specialists.ts', specialists],
    ['data/testimonials.ts', testimonials],
    ['data/faq.ts', faqs],
    ['data/media.ts + config/site.ts', [mediaFrReview, siteFrReview]],
    ['data/pages.ts', [{ id: 'indigenousPage', ...indigenousPage }, { id: 'aboutPage', ...aboutPage }, ...howWeWorkSteps]],
  ];
  let pending = 0;
  let total = 0;
  console.log('\nFrench review status (needs-human-review / total)\n');
  for (const [file, records] of groups) {
    const todo = records.filter((r) => r.frReview !== 'approved');
    pending += todo.length;
    total += records.length;
    console.log(`  ${file.padEnd(32)} ${String(todo.length).padStart(4)} / ${records.length}`);
    if (list) todo.forEach((r) => console.log(`      - ${r.id ?? r.slug}`));
  }
  const msgs = readReview().messages;
  const msgTodo = Object.entries(msgs).filter(([, s]) => s !== 'approved');
  pending += msgTodo.length;
  total += Object.keys(msgs).length;
  console.log(`  ${'messages/fr.json'.padEnd(32)} ${String(msgTodo.length).padStart(4)} / ${Object.keys(msgs).length}`);
  if (list) msgTodo.forEach(([k]) => console.log(`      - ${k}`));
  const storyDir = path.join(root, 'content/stories/fr');
  const stories = fs.readdirSync(storyDir).filter((f) => f.endsWith('.mdx'));
  const storyTodo = stories.filter((f) => !/frReview:\s*['"]approved['"]/.test(fs.readFileSync(path.join(storyDir, f), 'utf8')));
  pending += storyTodo.length;
  total += stories.length;
  console.log(`  ${'content/stories/fr/*.mdx'.padEnd(32)} ${String(storyTodo.length).padStart(4)} / ${stories.length}`);
  if (list) storyTodo.forEach((f) => console.log(`      - ${f}`));
  console.log(`\n  ${pending} of ${total} French items still need a native speaker's review.\n`);
}

if (process.argv[2] === 'sync') sync();
else report();
