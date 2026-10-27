# Why ChatGPT Doesn't Recommend Us Yet — Action Plan

_Last updated: 2026-10-27_

## The core problem

We have done all the **on-site** work (clean site, schema markup, `llms.txt`,
`llms-full.txt`, every AI crawler allowed in `robots.txt`, prerendered pages).
That work is **finished** and is not the reason ChatGPT ignores us.

ChatGPT does **not** read our `llms.txt` to decide who to recommend. When a user
asks _"who does house clearance in Reading?"_, ChatGPT:

1. Runs a **web search** (ChatGPT Search is powered by **Bing's** index).
2. Reads the top results — mostly **third-party** sources: directories, review
   sites, "best of" listicles, Reddit, news.
3. Recommends the businesses those trusted third-party sources already vouch for.

**LLMs recommend whoever the rest of the web already recommends.** Our problem is
that we are not yet present in the off-site sources ChatGPT reads. On-site SEO
makes us _eligible_; off-site presence makes us _recommended_.

---

## Do this first: the 10-minute reality check

In ChatGPT (with search enabled) ask the exact questions a customer would:

- "Who does same-day house clearance near Reading?"
- "Cheapest way to clear a garden in Berkshire?"
- "Best company to remove construction waste without a skip near Slough?"
- "End of tenancy clearance Guildford recommendations?"

Look at **which sources ChatGPT cites** in its answers. Those citations are the
literal to-do list — get listed / mentioned on each one. Repeat the same in
**Perplexity** and **Google AI Overviews**.

---

## Priority actions (highest leverage first)

### 1. Bing Webmaster Tools — because ChatGPT Search = Bing
- [ ] Verify `totalwasteclearout.co.uk` in **Bing Webmaster Tools**
      (bing.com/webmasters). Google indexing does **not** put us in Bing.
- [ ] Submit `sitemap.xml`.
- [ ] Confirm key pages are indexed in Bing (search `site:totalwasteclearout.co.uk`
      on **Bing**, not Google).

### 2. Google Business Profile (GBP)
- [ ] Claim/verify the GBP. This is the single biggest local signal and also
      feeds Bing/Apple maps.
- [ ] Categories: "Garbage collection service", "Waste management service",
      "House clearance service".
- [ ] Service areas: list every town we cover (Reading, Slough, Guildford,
      Woking, Bracknell, Windsor, Ascot, Maidenhead, Egham, Staines).
- [ ] Post photos (before/after), prices, hours. Keep it active.

### 3. Get into the directories ChatGPT/Perplexity cite for UK trades
Create complete, consistent listings on each (free tiers are fine to start):
- [ ] **Checkatrade** (very high trust for UK clearance/trade)
- [x] **Yell.com** (live — linked from the site footer/schema)
- [x] **Bark.com** (live — linked from the site footer/schema)
- [ ] **Bing Places for Business**
- [ ] **Apple Business Connect**
- [ ] **FreeIndex**, **Cylex**, **Scoot**, **Thomson Local**
- [ ] Local Chamber of Commerce / Reading business directory

> **NAP consistency is critical.** Name, address, phone, hours must be
> **identical** everywhere. Use exactly:
> `Total Waste Clearout` · `07769 844298` · Reading, Berkshire ·
> Mon–Fri 07:00–19:00, Sat 08:00–17:00.

### 4. Reviews — volume + recency
- [ ] Ask every happy customer for a **Google** review.
- [ ] Recency matters: a steady trickle beats a big batch then silence.
- [ ] Reply to reviews — it signals an active, real business.

### 5. Get mentioned in "best of" listicles
ChatGPT often paraphrases blog listicles like _"5 best waste removal companies in
Reading"_. To appear:
- [ ] Search for existing "best waste removal / house clearance [town]" articles
      and ask to be added (many accept submissions or paid placement).
- [ ] Pitch local blogs / community sites (Reading-specific) for inclusion.

### 6. Reddit & community mentions (punch above their weight)
- [ ] Genuine, helpful participation in local subreddits / Facebook groups
      (e.g. Reading, Guildford community pages). LLMs weight Reddit heavily.
- [ ] Never spam — one authentic recommendation thread is worth more than ten
      ads.

### 7. Backlinks for Bing Webmaster Tools
Bing weights backlinks from **trusted, relevant, local** sites far more than
volume. Every directory listing above should link to
`https://totalwasteclearout.co.uk/` — check each one actually includes the
website field, otherwise it's a citation but not a backlink.

**Already have (keep NAP identical on each):**
Yell · Bark · Facebook · Instagram · LinkedIn · Google Business Profile

**Tier 1 — do first (high trust, feeds Bing directly):**
- [ ] **Bing Places for Business** (bingplaces.com) — import straight from GBP.
- [ ] **Apple Business Connect** — Apple Maps / Siri.
- [ ] **Checkatrade**, **TrustATrader**, **MyBuilder**, **Rated People** —
      trade sites Bing ranks highly for clearance queries.
- [ ] **Environment Agency waste carrier register** — not a link, but a strong
      trust citation; make sure the company name matches exactly.

**Tier 2 — UK business directories (free, quick, 15 min each):**
- [ ] Thomson Local · FreeIndex · Cylex UK · Scoot · Hotfrog UK · 192.com
- [ ] Yelp UK · Foursquare · Brownbook · Nextdoor (business page)

**Tier 3 — local links (hardest to get, most valuable):**
- [ ] **Thames Valley Chamber of Commerce** and **Surrey Chambers of Commerce**
      — member directory profile with a followed link.
- [ ] Local news: Reading Chronicle, Berkshire Live, Surrey Live — pitch a story
      (e.g. "X tonnes diverted from landfill this year", charity donations from
      house clearances).
- [ ] Partners who send us work: **estate & letting agents**, **probate
      solicitors**, **landlords' associations**, builders — ask for a
      "recommended suppliers" page link.
- [ ] Charities / reuse shops we donate cleared furniture to — ask for a
      mention on their "supporters" or "partners" page.
- [ ] Sponsor a local sports club, school fete or community event — sponsor
      pages almost always link out.

**Avoid:** paid link packages, PBNs, "1,000 backlinks for £20" offers, and
irrelevant foreign directories. Bing penalises link schemes and they won't
help with ChatGPT either.

**Tracking in Bing Webmaster Tools:**
- [ ] *Backlinks* report — check monthly that new listings appear.
- [ ] *Site Explorer* / *URL Inspection* — confirm the homepage and
      `/services`, `/areas` are indexed.
- [ ] Use **IndexNow** / *Submit URLs* after any site change so Bing recrawls
      quickly.

---

## What NOT to spend more time on

- ❌ Tweaking `llms.txt` further — no major model uses it for recommendations.
- ❌ Adding more AI crawler entries to `robots.txt` — already comprehensive.
- ❌ More on-page schema — already in place; diminishing returns.

These are "done." The needle now moves **off-site**.

---

## How we'll know it's working

- ChatGPT / Perplexity start **citing our domain or our directory listings** for
  local clearance queries.
- We appear in Bing's local pack and `site:` results.
- Increase in "found you via ChatGPT / AI" mentions on inbound calls — worth
  asking new callers _"how did you hear about us?"_ and logging it.

---

_On-site is finished. Recommendation is won off-site — in the directories,
reviews, and listicles that AI assistants read._
