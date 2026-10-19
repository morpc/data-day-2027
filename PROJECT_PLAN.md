# Data Day Planning & Facilitation Plan

> **Audience:** internal / MORPC staff only. Dates and details are not final; see
> [the website](https://morpc.github.io/data-day-2027/) for official communication.
> **Owner:** Jordan Inskeep (Data Day Coordinator). **Last updated:** October 19, 2026.
> **Purpose:** one document a new staff lead can use to run Data Day planning from kickoff
> to post-event evaluation.

---

## 1. Introduction

### Summary

Data Day is MORPC's annual one-day conference for Central Ohio's public-sector data
community. **Data Day 2027** is the **5th annual** event: **Thursday, February 18, 2027**, at
the **Center for Workforce Development at Columbus State Community College**, under the theme
**"Plotting What's Next: Five years forward for Central Ohio's data community."**

Planning runs on a ~13-month cycle and takes roughly **208 staff hours**, most of it from the
Data team. This plan covers every planning area in one place: what it is, where its files
live, a dated task schedule, and suggested AI prompts for producing or updating its
materials. Section 2 is the single **master timeline**; the area sections break the same
dates out by topic.

### Project overview

**The event.** A single-day conference for data users, practitioners, and analysts across
local governments, nonprofits, educational institutions, and civic-minded businesses. It
offers keynotes, breakout sessions across skill levels, and time to network.

**The client.** The Mid-Ohio Regional Planning Commission (MORPC), a regional council of
governments and MPO covering 95+ local governments in a 15-county region. MORPC convenes the
**Regional Data Roundtable (RDR)**, which hosts Data Day. Data Day is a "Signature Event" in
the RDR's [2026–2028 Regional Data Agenda](https://www.morpc.org/wp-content/uploads/2026/08/Regional-Data-Agenda-2026-2028.pdf) and supports its
Education & Outreach pillar.

**2027 quick facts**

| Item | Detail |
|---|---|
| Date | Thursday, February 18, 2027 |
| Hours | Registration 8:30 AM; program 9:00 AM–3:45 PM |
| Venue | Center for Workforce Development at Columbus State Community College (3rd straight year). Official address: The Conference Center, 315 Cleveland Avenue, 4th floor, Columbus, OH 43215 |
| Theme | Plotting What's Next. Subhead (locked): *Five years forward for Central Ohio's data community* |
| Program | 2 keynotes (morning + lunch), Intern Showcase, 14 breakouts (lecture, panel, 90-min workshop), posters, vendor tabling |
| Target attendance | 200+ |
| Volunteer model | Data Day Champions (replaces the monthly Working Group) |
| Website | <https://morpc.github.io/data-day-2027/> |
| Repository | <https://github.com/morpc/data-day-2027> |

**Event history** (from `Archive/Data_Day_Historical_Reference.xlsx`)

| Year | Edition | Attendees | Sponsorship | Overall rating |
|---|---|---|---|---|
| 2023 | 1st (Mar 1, OU Dublin) | not recorded | not recorded | n/a |
| 2024 | 2nd | 152 | $4,000 | 4.31 / 5 |
| 2025 | 3rd | 208 | $9,000 | 4.31 / 5 |
| 2026 | 4th (Feb 10) | 196 | $10,000 | 4.41 / 5 |
| 2027 | 5th (Feb 18) | target 200+ | target > $10,000 | target ≥ 4.4 |

### Roles and owners

Owner codes match `Archive/master_timeline.xlsx`.

| Code | Who | Owns |
|---|---|---|
| **Data** | MORPC Data team; Data Day Coordinator | Overall plan, keynotes, CFP and sessions, Champions, sponsor recruiting, survey, repo |
| **CE** | Communications & Engagement | Website updates, design, brochures, signage, promo graphics |
| **Events** | MORPC Events | Venue contract, registration (Eventbrite), catering, sponsor invoicing, name tags |
| **IT** | MORPC IT | Session-room laptops and AV support |
| **RDR** | Regional Data Roundtable | Direction: theme, program balance, judgment calls (quarterly meetings) |
| **Champions** | Volunteers | Connect, amplify, host. Never own a deadline |

**Staff hours (2026 cycle baseline):** ~208 total. Data 161, shared team meetings 30,
CE + Data 8, Events + Data 5, IT + Data 3, Events 1.

### Planning principles

1. **Staff own the critical path.** Champions connect, amplify, and host. MORPC owns
   decisions, money, and commitments. Every milestone must be reachable even if zero
   Champions deliver.
2. **Kit before ask.** Never send Champions an ask until its resource kit exists.
3. **The theme drives everything downstream.** Lock it by late August; CFP, keynotes,
   sponsorship, and marketing all key off it.
4. **Three audiences, three voices, separate files.** Outward (Regional Data Agenda voice),
   Champion-facing (warm, second person), internal (direct). See [voice-style.md](voice-style.md).
5. **2027 content priorities:** data governance, management, analysis, and infrastructure.
   GIS is welcome as one tag among many, not a stated preference (Data Day does not compete
   with the Ohio GIS Conference).

### How to use this plan

- **Section 2** is the dated schedule. Work from it week to week.
- **Sections 3–10** explain each planning area, link its files, and repeat its tasks.
- **[README.md](README.md)** keeps the status checklist. After every merged PR, update task
  status in both the README checklist and Section 2 here.
- **Prompts** in blockquotes are starting points for Claude (see Section 12). Paste them
  into Claude Code from the repo root so it can read the referenced files.

> **Prompt (weekly check-in):** "Read PROJECT_PLAN.md Section 2 and README.md. Today is
> [date]. List what is overdue, what is due in the next two weeks, and any Champion ask whose
> resource kit is not finished yet."

---

## 2. Master timeline

Completed items are reconstructed from the repo's commit history. Upcoming dates follow the
2026 cycle (`Archive/master_timeline.xlsx`, event Feb 10, 2026), shifted to the Feb 18, 2027
event, and avoid weekends and federal holidays (MLK Day Jan 18; Presidents' Day Feb 15).
**Status:** Done · Overdue · Next (within 2 weeks) · Planned · TBD (date to confirm).

### Completed (April–October 2026)

| Date | Area | Task | Owner | Status |
|---|---|---|---|---|
| Apr 21, 2026 | Repo | Create GitHub repo, folders, and Champions roster table | Data | Done |
| May 5, 2026 | Planning | Draft 2027 task list in README; add folder READMEs | Data | Done |
| Jun 15, 2026 | Champions | Lock Phase 1 decisions; draft Ways to Help, FAQ, recruitment emails, launch checklist | Data | Done |
| Jun 18, 2026 | Theme / Program | Draft theme concepts, program schedule, breakout formats; keynote form spec | Data | Done |
| Jun 22, 2026 | Champions | Champion sign-up form live; Ask 5 renamed "Take a day-of role" | Data | Done |
| Jul 2026 | Planning | Internal team meeting; RDR Q3 update | Data | Done |
| Jul 14, 2026 | Website | Design system (palette, logo, icons); launch site with Champions, Keynotes, Sponsors pages | Data, CE | Done |
| Jul 15, 2026 | Marketing | "What People Say" page and speaker/sponsor one-pager | Data | Done |
| Jul 21, 2026 | Theme / Sponsors | Select "Plotting What's Next"; keep classic palette; draft sponsorship brochure | Data, RDR | Done |
| Aug 2026 | Champions | Broad recruitment call sent to 205 contacts | Data | Done |
| Aug 12, 2026 | Champions | Announce Champions program at RIDG | Data | Done |
| Aug 25, 2026 | Venue | Select CSCC; map program to rooms; set schedule | Data, Events | Done |
| Aug 26, 2026 | Logistics | Move date to Thu, Feb 18, 2027; lock subhead and palette | Data | Done |
| Sep 2026 | Planning | Internal team meeting | All | Done |
| Sep 14, 2026 | Champions / CFP | Keynote and sponsor warm-intro kits; topic tag model; checklist refresh | Data | Done |
| Sep 25, 2026 | Venue / Website | Book venue; add About page | Events, Data | Done |
| Sep 29, 2026 | Champions / CFP | Send keynote request to Champions (Ask 1); CFP draft passes 1–3; retime to 9:00–3:45 | Data | Done |
| Oct 8, 2026 | Keynotes | Lunch panel planning meeting | Data | Done |
| Oct 16, 2026 | Keynotes | Morning keynote candidate research and scoring tracker | Data | Done |
| Oct 19, 2026 | Champions | Draft keynote suggestion reminder email | Data | Done |

### Upcoming (October 2026–April 2027)

| Date | Area | Task | Owner | Status |
|---|---|---|---|---|
| Overdue (Aug–Sep) | Sponsors | Compile prior/potential sponsor list; align with MORPC-wide sponsor asks; start shared sponsor-contact log | Data, Events | Overdue |
| Overdue (Sep) | Sponsors | Finalize package and tiers; link brochure PDF from Sponsors page | Data, CE | Overdue |
| Overdue (Jul–Aug) | Champions | Champion tracking sheet with critical-path coverage view; name staff fallback owners | Data | Overdue |
| Tue, Oct 20 | Keynotes | Verify current roles for Tier 1 candidates; pull Champion suggestions into tracker | Data | Next |
| Tue, Oct 20 | Champions | Send keynote reminder email | Data | Next |
| Thu, Oct 22 | CFP | Finalize CFP (fill placeholders); build online form; update CFP website section | Data, CE | Next |
| Thu, Oct 22 | CFP / Champions | Finish CFP promo kit (slide, social graphic, copy, "why present" blurb, key dates) | Data, CE | Next |
| Fri, Oct 23 | Keynotes | Invite first-choice morning keynote; hold backup | Data | Next |
| Mon, Oct 26 | CFP | Release CFP: email list, website, Champions Ask 2 | Data, CE | Next |
| Wed, Oct 28 | Planning | RDR Q4 update | Data | TBD |
| Fri, Oct 30 | Keynotes | Follow up once; move to backup if no answer | Data | Next |
| Fri, Oct 30 | Registration | Collect registration email list; decide free vs. paid | Events, Data | Next |
| Sat, Oct 31 | Champions | Keynote suggestion form closes | Data | Next |
| Mon, Nov 2 | Program | Open intern project and student poster call | Data | Planned |
| Fri, Nov 6 | Registration | Registration promo kit done (email + social per push) | CE, Data | Planned |
| Mon, Nov 9 | CFP | CFP reminder email; Champion nudge | Data | Planned |
| Tue, Nov 10 | Registration | Stand up Eventbrite; open registration; update website; Champions Ask 4 | Events, CE | Planned |
| Nov 2026 | Planning | Internal team meeting | All | TBD |
| Fri, Nov 13 | CFP | CFP closes | Data | Planned |
| Fri, Nov 13 | Keynotes | Finalize morning keynote and lunch panel | Data | Planned |
| Mon, Nov 16–Fri, Dec 4 | CFP | Review and score proposals; draft program balance | Data, RDR | Planned |
| Fri, Nov 20 | Keynotes | Collect bios and headshots; update Keynotes page | Data, CE | Planned |
| Fri, Nov 20 | Sponsors | Close active recruiting; Champions Ask 3 window ends | Data | Planned |
| Fri, Dec 4 | Venue | Confirm Room 420 setup and power, parking, catering options, AV costs | Events | Planned |
| Fri, Dec 11 | CFP | Notify accepted and declined speakers | Data | Planned |
| Fri, Dec 18 | CFP | Speaker acceptances confirmed; backfill from waitlist | Data | Planned |
| Fri, Dec 18 | Champions | Facilitator / day-of cheat sheet and run-of-show (kit for Ask 5) | Data | Planned |
| Fri, Jan 8 | Program | Finalize agenda, session schedule, room assignments | Data | Planned |
| Fri, Jan 8 | Program | Intern project and student poster submissions due | Data | Planned |
| Fri, Jan 8 | Sponsors | Confirm sponsorships; collect logos | Events, Data | Planned |
| Mon, Jan 11–Fri, Jan 15 | Champions | Ask 5: assign day-of roles | Data | Planned |
| Fri, Jan 15 | Website | Publish agenda; registration push 2 | CE, Data | Planned |
| Fri, Jan 15 | Program | Select Intern Showcase talks and posters | Data | Planned |
| Fri, Jan 15 | Sponsors | Invoice confirmed sponsors | Events | Planned |
| Tue, Jan 19 | Keynotes | Final details: confirm topic, send panel questions, request slides | Data | Planned |
| Fri, Jan 22 | Sessions | Collect session slide decks | Data | Planned |
| Fri, Jan 22 | Logistics | Finalize catering with headcount estimate | Events | Planned |
| Jan 2027 | Planning | Internal team meeting | All | TBD |
| Fri, Jan 29 | Program | Program brochure to print (final sponsor logos) | CE | Planned |
| Mon, Feb 1 | Logistics | Order signage | CE | Planned |
| Mon, Feb 1–Fri, Feb 5 | Champions | Facilitators connect with their speakers | Champions, Data | Planned |
| Fri, Feb 5 | Survey | Finalize post-event survey and QR code | Data | Planned |
| Sun, Feb 7 | Registration | Close registration (last-call push Mon, Feb 1) | Events | Planned |
| Fri, Feb 12 | Registration | Final attendee email with instructions | Events | Planned |
| Fri, Feb 12 | Logistics | Slides for breaks, session intros, keynote intros, sponsor thanks, survey QR | CE, Data | Planned |
| Tue, Feb 16 | Logistics | Load session laptops; brief day-of roles; print name tags | IT, Data, Events | Planned |
| Wed, Feb 17 | Logistics | Final check with venue (rooms, AV, catering, signage) | Events | Planned |
| **Thu, Feb 18** | **Event** | **Data Day 2027**; survey QR shown at lunch recognition | All | Planned |
| Fri, Feb 19 | Survey | Email post-event survey | Data | Planned |
| Mon, Feb 22–Fri, Feb 26 | Recognition | Thank speakers, sponsors, Champions; list Champions on website; send Champion survey | Data, CE | Planned |
| Feb 2027 | Planning | RDR Q1 update; internal team meeting | Data | TBD |
| Thu, Feb 25 | Survey | Survey reminder | Data | Planned |
| Fri, Mar 5 | Survey | Close attendee and Champion surveys | Data | Planned |
| Fri, Mar 19 | Survey | Results summary to RDR; send session ratings to speakers | Data | Planned |
| Wed, Mar 24 | Evaluation | Internal debrief and lessons learned | All | Planned |
| Fri, Mar 26 | Repo | Archive 2027 materials; update historical reference; roll this plan to 2028 | Data | Planned |
| Fri, Apr 30 | 2028 | Select 2028 date and venue | Events, Data | Planned |

---

## 3. Theme & program concept

### Overview

The theme gives every downstream piece a shared story. 2027's theme, **Plotting What's
Next**, plays on plotting data points and plotting a route forward, anchored on the 5th
anniversary. The subhead is locked and used verbatim everywhere. Design kept the classic Data
Day palette and logo so the anniversary carries the message instead of a rebrand.

**Key files:** [Theme/theme-concept-plotting-whats-next.md](Theme/theme-concept-plotting-whats-next.md) ·
[Design/design-brief.md](Design/design-brief.md) · [Design/palette.md](Design/palette.md) ·
[Design/icons/](Design/icons/) · [voice-style.md](voice-style.md)

**Rules of use:** keep the tone forward-looking (plot a course, not a retrospective chart).
Sessions do not have to fit the theme; keynotes carry it.

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Jun 18, 2026 | Draft theme concept options | Data | Done |
| Jul 21, 2026 | Select theme with RDR input | Data, RDR | Done |
| Aug 26, 2026 | Lock subhead and palette | Data | Done |
| Ongoing | Use theme language in CFP, keynote framing, sponsorship, marketing | Data, CE | Ongoing |
| Fri, Mar 26, 2027 | Record what worked for the 2028 theme discussion | Data | Planned |
| **Late Aug (each cycle)** | **Hard deadline to lock next year's theme** | Data, RDR | Next cycle |

### Prompts

> **Prompt (new cycle):** "Read Theme/theme-concept-plotting-whats-next.md, the Regional
> Data Agenda pillars in CLAUDE.md, and the last two years of survey topic suggestions in
> Archive/Data_Day_Historical_Reference.xlsx. Propose three theme concepts for Data Day
> [year], each with a one-line idea, a subhead, how it threads through program, Champions,
> marketing, and sponsorship, and a visual motif. Use the outward MORPC voice and no em
> dashes."

> **Prompt (copy check):** "Check [file] against the locked theme and subhead in
> Theme/theme-concept-plotting-whats-next.md and the rules in voice-style.md. List any
> wording that drifts from the subhead, reads as backward-looking, or breaks venue naming."

---

## 4. Keynotes

### Overview

Two keynote slots: a **50-minute morning keynote** (9:10–10:00) and a **55-minute lunch
keynote** (12:40–1:35), both in the 400 Ballroom. Past plenaries rated below the breakouts
(2024: 3.74 morning, 3.72 lunch), so speaker fit and engagement matter more than profile.
2027 is looking for **local, no-cost speakers**. The lunch slot is being developed as a
moderated **program-evaluation panel** (planning notes in `Keynotes/Lunch/`).

Champions help by **suggesting and introducing** candidates (Ask 1). Staff do all inviting
and negotiating.

**Key files:** [Keynotes/](Keynotes/) (candidate research and scoring tracker in
`Keynotes/Morning/`, currently on the `keynote-morning-shortlist` branch) ·
[keynote criteria one-pager](Champions/Engagements/Keynotes/keynote-criteria-one-pager.md) ·
[suggestion form spec](Champions/Engagements/Keynotes/keynote-suggestion-form.md) ·
[warm-intro template](Champions/Engagements/Keynotes/keynote-intro-template.md) ·
[request email](Champions/Engagements/Keynotes/keynote-request-email.md) ·
[reminder email](Champions/Engagements/Keynotes/keynote-reminder-email.md) ·
[Keynotes web page](docs/keynote.html)

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Jun 18, 2026 | Keynote suggestion form spec; form live | Data | Done |
| Sep 14, 2026 | Keynote criteria one-pager and warm-intro kit | Data | Done |
| Sep 29, 2026 | Champions Ask 1: keynote request email | Data | Done |
| Oct 8, 2026 | Lunch panel planning meeting (format, moderator questions) | Data | Done |
| Oct 16, 2026 | Morning candidate research and scoring tracker | Data | Done |
| Tue, Oct 20 | Verify Tier 1 roles; pull Champion form responses into tracker; send reminder | Data | Next |
| Fri, Oct 23 | Invite first choice; hold the second as backup (do not invite both) | Data | Next |
| Fri, Oct 30 | Follow up once; move to backup if no reply | Data | Next |
| Sat, Oct 31 | Suggestion form closes | Data | Next |
| Fri, Nov 13 | Both keynotes confirmed | Data | Planned |
| Fri, Nov 20 | Bios and headshots collected; Keynotes page updated; thank Champions whose leads landed | Data, CE | Planned |
| Tue, Jan 19 | Confirm topic and title; send panel questions; request slides by Fri, Feb 5 | Data | Planned |
| Fri, Feb 12 | Keynote intro slides built | CE, Data | Planned |
| Mon, Feb 22 | Thank-you notes to keynote speakers | Data | Planned |

### Prompts

> **Prompt (score candidates):** "Add these candidates to the morning keynote tracker:
> [names, roles, links]. Score each 1–3 against every criterion in
> keynote-criteria-one-pager.md, note public talks we can verify, and flag anyone outside the
> region or likely to need an honorarium."

> **Prompt (invitation):** "Draft a keynote invitation to [name, role] for the Data Day 2027
> morning keynote. Use the outward MORPC voice. Include date, venue, 50-minute slot, theme,
> audience size (200+), why we thought of them, and a reply-by date of [date]. Under 200
> words, no em dashes."

> **Prompt (panel prep):** "Using Keynotes/Lunch/meeting_notes.md, draft a run sheet for the
> lunch panel: timing for each speaker, moderator intro, eight moderator questions ordered
> from concrete to big-picture, and a plan for audience Q&A."

---

## 5. Call for Proposals & breakout program

### Overview

The CFP fills **14 breakouts** across four blocks (10:15, 11:15, 2:00, 3:00), plus the
**Intern Showcase** (lightning talks at lunch) and **posters**. Formats: 45-min lecture,
45-min panel, 90-min hands-on workshop (Room 420). There are no tracks. Speakers pick up to
two public **topic tags** and a skill level; staff also capture internal metadata (Regional
Data Agenda focus area, action pillar, reflection prompt) to balance the program. 2027 leads
with governance, management, analysis, and infrastructure.

Champions help by **sharing the CFP and nudging strong presenters** (Ask 2). Staff review
and select.

**Key files:** [CFP draft](Breakouts/CFP/cfp-2027-draft.md) ·
[tagging model](Breakouts/CFP/session-tagging-model-draft.md) ·
[ways to participate](Breakouts/ways-to-participate-draft.md) ·
[workshop format](Breakouts/workshop-format-draft.md) ·
[program schedule](Logistics-Venue/program-schedule-draft.md) ·
`Archive/2025/Data Day 2025 Session Proposals Submissions.xlsx` (past submissions)

> **Note:** The CFP is about four weeks behind the 2026 cycle (released Oct 1, 2025). A
> Nov 13 close gives under three weeks of open time. Consider moving the close to
> **Fri, Nov 20** if submissions are thin by Nov 9. Also check `ways-to-participate-draft.md`
> for stale room names (Terrace A/B, Grand Ballroom) before publishing.

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Aug 2026 | Decide session formats (lecture, workshop, panel, lightning, posters) | Data | Done |
| Sep 14, 2026 | Topic tag model | Data | Done |
| Sep 29, 2026 | CFP draft passes 1–3 | Data | Done |
| Thu, Oct 22 | Fill CFP placeholders (release date, deadline, form link, officer names); build online form; CFP promo kit; website section | Data, CE | Next |
| Mon, Oct 26 | Release: email list, website, Champions Ask 2 | Data, CE | Next |
| TBD | Promote at the Summit on Sustainability and other partner events | Data | TBD |
| Mon, Nov 2 | Open intern project and student poster call (size/format specs, display plan) | Data | Planned |
| Mon, Nov 9 | Reminder email and Champion nudge; decide on deadline extension | Data | Planned |
| Fri, Nov 13 | CFP closes | Data | Planned |
| Nov 16–Dec 4 | Review and score; balance tags, skill levels, constituencies, formats | Data, RDR | Planned |
| Fri, Dec 11 | Notify accepted and declined speakers | Data | Planned |
| Fri, Dec 18 | Acceptances confirmed; backfill from waitlist | Data | Planned |
| Fri, Jan 8 | Agenda and room assignments final; intern/poster submissions due | Data | Planned |
| Fri, Jan 15 | Intern Showcase and poster selections; publish agenda | Data, CE | Planned |
| Fri, Jan 22 | Collect session slide decks | Data | Planned |
| Fri, Feb 12 | Session intro slides | CE, Data | Planned |
| Tue, Feb 16 | Load decks onto session laptops | IT, Data | Planned |

### Prompts

> **Prompt (finalize CFP):** "Read Breakouts/CFP/cfp-2027-draft.md. List every bracketed
> placeholder and every claim that needs verification. Then fill dates using PROJECT_PLAN.md
> Section 2 and leave the rest flagged."

> **Prompt (CFP promo kit):** "Build the CFP promo kit for Champions: a two-sentence
> 'why present' blurb, three social posts (LinkedIn length), a 100-word email Champions can
> forward, and a key-dates block. Champion-facing voice, no em dashes. Source facts only from
> cfp-2027-draft.md."

> **Prompt (review submissions):** "Here is the CFP submission export [file]. Build a review
> sheet: one row per proposal with format, tags, skill level, focus area, pillar, and
> constituency. Then summarize gaps: which tags, skill levels, or constituencies are thin,
> and which proposals overlap."

> **Prompt (build agenda):** "Using the accepted sessions [file] and
> Logistics-Venue/program-schedule-draft.md, place sessions into the four blocks and four
> rooms. Avoid putting same-tag sessions against each other, put panels opposite workshops,
> and keep room capacity in mind. Show the grid as a table."

---

## 6. Data Day Champions

### Overview

Champions replace the monthly Working Group with opt-in, time-boxed asks. **Target pool:**
12–20 (7 signed up as of Sep 14, 2026). **Coordinator:** Jordan Inskeep. **Direction:** RDR.
Champions register like other attendees (no comp) and are recognized with program credit, a
website listing, and an event thank-you.

**The five asks**

| # | Ask | Window | Kit | Status |
|---|---|---|---|---|
| 1 | Connect with potential keynote speakers | Aug–Oct | Criteria one-pager, suggestion form, intro template | Running |
| 2 | Share the CFP and recruit speakers | late Oct–Nov 13 | CFP promo kit | Kit not built |
| 3 | Solicit sponsors (intros only) | Sep–Nov 20 | Brochure, sponsor intro template, contact log | Contact log not built |
| 4 | Encourage registration | Nov 10–Feb 7 | Registration promo kit | Kit not built |
| 5 | Take a day-of role (facilitator anchor) | Assign Jan, execute Feb 18 | Facilitator cheat sheet, run-of-show | Kit not built |

**Watch-outs:** facilitators have always been MORPC staff, so Champion facilitators are new
in 2027 and need a staff backup in every room. Recruit beyond existing networks to support
the Regional Data Agenda's representation pillar. The roster and direct-ask list contain
personal contact data and are git-ignored.

**Key files:** [Champions/CLAUDE.md](Champions/CLAUDE.md) ·
[launch checklist](Champions/launch_checklist.md) ·
[Ways to Help](Champions/Recruitment/ways_to_help.md) · [FAQ](Champions/Recruitment/faq.md) ·
[recruitment emails](Champions/Recruitment/) · [sign-up form spec](Champions/Recruitment/signup-form.md) ·
[engagement kits](Champions/Engagements/) · forms:
[sign-up](https://forms.cloud.microsoft/r/7cFXhbQeMc),
[suggest a keynote](https://forms.cloud.microsoft/r/mYmz1bctPH)

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Jun 15, 2026 | Phase 1 decisions; Ways to Help, FAQ, emails, checklist | Data | Done |
| Jun 22, 2026 | Sign-up form live | Data | Done |
| Aug 2026 | Broad call to 205 contacts; RIDG announcement (Aug 12) | Data | Done |
| Sep 14, 2026 | Keynote and sponsor warm-intro kits | Data | Done |
| Sep 29, 2026 | Ask 1 sent | Data | Done |
| Overdue | Tracking sheet with critical-path coverage view; staff fallback owner for each ask | Data | Overdue |
| Overdue | Send personalized asks to high-value prospects; welcome note to signed-up Champions | Data | Overdue |
| Tue, Oct 20 | Ask 1 reminder | Data | Next |
| Thu, Oct 22 | CFP promo kit done (gate for Ask 2) | Data, CE | Next |
| Mon, Oct 26 | Ask 2: share the CFP | Data | Next |
| Fri, Nov 6 | Registration promo kit done (gate for Ask 4) | CE, Data | Planned |
| Tue, Nov 10 | Ask 4: encourage registration | Data | Planned |
| Fri, Nov 20 | Ask 3 window closes; thank Champions for leads | Data | Planned |
| Fri, Dec 18 | Facilitator cheat sheet and run-of-show done (gate for Ask 5) | Data | Planned |
| Jan 11–15 | Ask 5: assign day-of roles | Data | Planned |
| Fri, Jan 15 | Registration push 2 (agenda live) | Data | Planned |
| Mon, Feb 1 | Registration last call | Data | Planned |
| Feb 1–5 | Facilitators connect with speakers | Champions | Planned |
| Tue, Feb 16 | Day-of role briefing | Data | Planned |
| Feb 22–26 | Recognize Champions; close the loop on impact; send Champion survey | Data, CE | Planned |
| Fri, Mar 5 | Champion survey closes | Data | Planned |
| Wed, Mar 24 | Review Champion metrics in debrief; flag returners for 2028 | Data | Planned |

**Before every ask:** check the tracking sheet. Each critical-path ask needs both a Champion
and a named staff fallback.

### Prompts

> **Prompt (tracking sheet):** "Build Champions/champion-tracker.xlsx: one row per Champion
> with asks opted into and status per ask, plus a coverage tab that flags any ask with no
> Champion or no staff fallback. Leave names blank; I'll paste them from the roster."

> **Prompt (next ask email):** "Draft the Ask [n] email to Champions. Read
> Champions/Recruitment/ways_to_help.md for the ask and match the shape and tone of
> Champions/Engagements/Keynotes/keynote-request-email.md. Confirm the kit exists first and
> stop if it doesn't."

> **Prompt (facilitator kit):** "Build the facilitator cheat sheet: speaker intro template,
> time cues (10, 5, 1 minutes), five Q&A prompts for a quiet room, what to do if AV fails,
> survey QR reminder, and an AV contact placeholder. Champion-facing, one page."

---

## 7. Sponsorship

### Overview

Sponsorship revenue grew from $4,000 (2024) to $10,000 (2026). 2027 tiers: **Platinum
$5,000, Gold $3,000, Silver $1,500, Bronze $500**; all include logo placement. The 5th
anniversary is the main pitch ("invest in the trajectory"). Staff own package, pricing, ask,
and invoicing. Champions make introductions only (Ask 3). Ask a prospect to sponsor first;
invite them to be a Champion only after they decline.

**Key files:** [sponsorship brochure](Sponsors/DataDay2027_SponsorshipBrochure.md) ·
[sponsor intro template](Champions/Engagements/Sponsors/sponsor-intro-template.md) ·
[Sponsors web page](docs/sponsors.html) · `Archive/2026/Data Day 2026 Sponsorship Tracking.xlsx`

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Jul 21, 2026 | Draft sponsorship brochure | Data | Done |
| Jul 14, 2026 | Sponsors web page live | Data, CE | Done |
| Sep 14, 2026 | Sponsor warm-intro template | Data | Done |
| Overdue | Prior/potential sponsor list; align with MORPC-wide asks; shared contact log | Data, Events | Overdue |
| Overdue | Finalize tiers; link brochure PDF from Sponsors page | Data, CE | Overdue |
| Oct–Nov 20 | Recruit sponsors (staff asks + Champion intros) | Data | Next |
| Fri, Jan 8 | Confirm sponsorships; collect logos and tabling needs | Events, Data | Planned |
| Fri, Jan 15 | Invoice confirmed sponsors | Events | Planned |
| Fri, Jan 29 | Final logos into printed program | CE | Planned |
| Fri, Feb 12 | Sponsor recognition slide | CE | Planned |
| Thu, Feb 18 | Recognition at 1:35 PM; tabling in 415 Gallery | Data | Planned |
| Mon, Feb 22 | Thank-you notes with attendance numbers | Data | Planned |
| Fri, Mar 19 | Confirm all invoices paid | Events | Planned |

### Prompts

> **Prompt (prospect list):** "From Archive/2026/Data Day 2026 Sponsorship Tracking.xlsx
> and the historical reference workbook, list every past sponsor with years and tier. Mark
> lapsed sponsors and suggest which tier to ask each for. Keep the output in the git-ignored
> Archive folder."

> **Prompt (sponsor ask):** "Draft a sponsorship ask to [organization] for the [tier] tier.
> Lead with the 5th anniversary, 200+ attendees, and the four constituencies. Attach-ready
> reference to the brochure. Outward MORPC voice, under 175 words."

---

## 8. Marketing, communications & registration

### Overview

Marketing has historically been the lightest part of the process and is the biggest growth
opportunity in the anniversary year. Channels: the website, MORPC email lists, partner
newsletters, LinkedIn, Champions' networks, and partner events. Registration runs through
**Eventbrite**, owned by Events. Three registration pushes: **open** (Nov 10), **agenda live**
(Jan 15), **last call** (Feb 1).

Social proof is ready: 4.4/5 satisfaction (2026), 200+ attendees each of the last two years,
75+ organizations.

**Key files:** [What People Are Saying](Marketing/what-people-are-saying.md) ·
[website](docs/) · [Registration/](Registration/) ·
`Archive/2026/Registration_Final.xlsx` and `Archive/Data_Day_Consolidated_Attendees.xlsx`
(past attendee lists; contain personal data)

**Open decision:** registration free or paid. This changes the marketing hooks and the
Eventbrite setup.

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Jul 14, 2026 | Save-the-date website | Data, CE | Done |
| Jul 15, 2026 | Testimonials page and one-pager | Data | Done |
| Aug 25, 2026 | Site banner (save the date, keynote suggestions) | Data | Done |
| Fri, Oct 30 | Decide free vs. paid; collect registration email list | Events, Data | Next |
| Fri, Nov 6 | Registration promo kit (email + social + graphics for each push) | CE, Data | Planned |
| Tue, Nov 10 | Eventbrite live; website register button; push 1; Champions Ask 4 | Events, CE | Planned |
| Fri, Jan 15 | Agenda on website; push 2 | CE, Data | Planned |
| Mon, Feb 1 | Push 3: last call | CE, Data | Planned |
| Sun, Feb 7 | Close registration | Events | Planned |
| Fri, Feb 12 | Final attendee email (parking, check-in, agenda, Wi-Fi) | Events | Planned |
| Tue, Feb 16 | Print name tags | Events | Planned |
| Thu, Feb 18 | Photos and live social posts | CE / Champions | Planned |
| Feb 22–26 | Recap post with photos and stats | CE | Planned |

### Prompts

> **Prompt (marketing plan):** "Draft a Data Day 2027 marketing plan for MORPC staff:
> audiences (the four constituencies plus students), channels, one message per push, owners,
> and a week-by-week calendar from Nov 10 to Feb 7. Use the dates in PROJECT_PLAN.md
> Section 2. Internal voice."

> **Prompt (registration push):** "Write registration push [1/2/3]: a 120-word email, a
> LinkedIn post, and a short version Champions can forward. Use the theme and subhead,
> the 200+ attendees stat, and [new hook]. Outward voice, no em dashes."

> **Prompt (attendance analysis):** "Using Archive/Data_Day_Consolidated_Attendees.xlsx,
> show repeat vs. new attendees by year and the top 15 organizations. Report counts only, no
> names."

---

## 9. Venue, logistics & day-of operations

### Overview

The venue is booked: the Center for Workforce Development at CSCC (official address above),
third straight year. Four rooms run all day with no reconfiguration: **400 Ballroom**
(300, banquet rounds; keynotes, Intern Showcase, lunch, lecture/panel breakouts),
**Room 420** (64; workshops), **Rooms 412 and 414** (84 each; lectures). The **415 Gallery**
hosts vendor tabling; posters line the circulation areas.

**Run of show:** 8:30 registration · 9:00 welcome · 9:10 morning keynote · 10:15 Block 1 ·
11:15 Block 2 · 12:00 lunch pickup · 12:15 Intern Showcase · 12:40 lunch keynote ·
1:35 recognition and 2028 teaser · 2:00 Block 3 · 3:00 Block 4 · 3:45 end.

**Key files:** [venue details](Logistics-Venue/venue-details.md) ·
[program schedule](Logistics-Venue/program-schedule-draft.md) · venue contacts in
venue-details.md

**Still to confirm with the venue:** Room 420 tables and power, divider staying open,
lunch pickup timing, parking, catering options, AV rental costs.

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Aug 25, 2026 | Select venue; map rooms; set schedule | Data, Events | Done |
| Aug 26, 2026 | Date set to Feb 18, 2027 | Data | Done |
| Sep 25, 2026 | Venue booked | Events | Done |
| Fri, Dec 4 | Close out venue confirmations listed above | Events | Planned |
| Fri, Dec 18 | Run-of-show and facilitator cheat sheet | Data | Planned |
| Fri, Jan 22 | Finalize catering (dietary needs from registration) | Events | Planned |
| Mon, Feb 1 | Order signage (rooms, directional, sponsor, poster areas) | CE | Planned |
| Fri, Feb 12 | All event slides (breaks, intros, sponsor thanks, survey QR) | CE, Data | Planned |
| Tue, Feb 16 | Laptops loaded; day-of role briefing; name tags printed | IT, Data, Events | Planned |
| Wed, Feb 17 | Final venue check | Events | Planned |
| Thu, Feb 18 | Event day: staff arrive 7:30 AM (proposed) | All | Planned |

### Prompts

> **Prompt (run-of-show):** "Turn Logistics-Venue/program-schedule-draft.md into a minute-by-
> minute run-of-show for staff: who is where, what slide is up, cues for each room, and a
> contact column. Start at 7:30 AM setup and end at 4:30 PM teardown."

> **Prompt (signage list):** "List every sign we need for Data Day 2027 based on the rooms,
> sessions, sponsors, posters, and tabling in the program schedule. Give wording, size, and
> location for each."

---

## 10. Post-event survey & evaluation

### Overview

The attendee survey is the main evidence of Data Day's value and feeds next year's topics,
speaker choices, and the "What People Say" materials. The 2024–2026 surveys used a
consistent core, which makes year-over-year comparison possible. **Keep the core questions
unchanged** and add 2027-specific items.

**Core questions (keep):** how did you hear about the event; overall rating (1–5); did it
meet expectations (and why not); morning and lunch plenary ratings with comments; session
attended and rating for each block; would you attend next year; what should MORPC change;
suggested topics, speakers, or features; opt-in for future MORPC emails.

**Add for 2027:**
- Block times updated to 10:15, 11:15, 2:00, 3:00; include both workshops.
- Rate the Intern Showcase and the posters.
- "How did you hear" gains **"A Data Day Champion or colleague invited me"** (Champion
  attribution metric).
- One optional question on the theme's topic tags: which tags do you want more of next year.

**Also run:** a short **Champion survey** (what worked, what was unclear, would you return)
and a speaker/sponsor thank-you that asks for one line of feedback.

**Success metrics:** overall rating ≥ 4.4; plenaries closer to breakout ratings; ≥ 25%
response rate; Champion metrics from the launch checklist (leads, intros, CFP submissions,
registrations, roles filled, retention).

**Key files:** `Archive/2024/2024 Data Day Post-Event Survey(1-39).xlsx` (question set) ·
`Archive/Data_Day_Historical_Reference.xlsx` (Survey Results sheet) ·
[Marketing/what-people-are-saying.md](Marketing/what-people-are-saying.md)

### Schedule

| Date | Task | Owner | Status |
|---|---|---|---|
| Fri, Jan 22 | Draft survey in Microsoft Forms from the core + 2027 additions | Data | Planned |
| Fri, Feb 5 | Finalize survey; session lists match the agenda; generate QR code | Data | Planned |
| Fri, Feb 12 | QR code on lunch recognition slide and closing slides in every room | CE | Planned |
| Thu, Feb 18 | Announce survey at 1:35 PM recognition and in the last block | Data, facilitators | Planned |
| Fri, Feb 19 | Email survey to all registrants | Data | Planned |
| Mon, Feb 22 | Send Champion survey | Data | Planned |
| Thu, Feb 25 | Reminder email | Data | Planned |
| Fri, Mar 5 | Close both surveys; export to `Archive/2027/` | Data | Planned |
| Fri, Mar 19 | Results summary (ratings, comments themes, topic requests, YoY) to RDR; ratings to each speaker | Data | Planned |
| Wed, Mar 24 | Internal debrief | All | Planned |
| Fri, Mar 26 | Add 2027 to historical reference; refresh "What People Say" | Data | Planned |

### Prompts

> **Prompt (build survey):** "Read the 2024 survey column headers in Archive/2024 and the
> final 2027 agenda. Write the 2027 survey question list: keep the core questions verbatim,
> update block times and session lists, and add the 2027 items in PROJECT_PLAN.md Section 10.
> Output as a Forms-ready list with question types."

> **Prompt (analyze results):** "Analyze the 2027 survey export [file]. Report response
> rate, overall and plenary ratings, every session's average with n, themes in open comments
> (with counts), top requested topics, and comparisons to 2024–2026 from the historical
> reference. Then write a one-page summary for the RDR in the outward voice. Don't quote
> anyone by name."

> **Prompt (debrief agenda):** "Using the survey summary, Champion metrics, and the
> launch checklist, draft a 60-minute internal debrief agenda: what worked, what didn't,
> decisions for 2028, and owners."

---

## 11. GitHub repository & website

### Repository

**Repo:** <https://github.com/morpc/data-day-2027>. A no-code planning repo: Markdown
documents, PDFs, spreadsheets, and the website source.

| Folder | Contents |
|---|---|
| `README.md` | Staff-only notice, overview, status checklist (update after every merged PR) |
| `PROJECT_PLAN.md` | This plan |
| `CLAUDE.md`, `voice-style.md` | Context and style rules for Claude; read first |
| `Theme/`, `Design/` | Theme concept, design brief, palette, logo, icons |
| `Keynotes/` | Candidate research, tracker, lunch panel notes |
| `Breakouts/` | CFP, tagging model, formats |
| `Champions/` | Program checklist, recruitment materials, engagement kits |
| `Sponsors/`, `Registration/`, `Marketing/`, `Logistics-Venue/` | Area materials |
| `docs/` | Website source (deployed automatically) |
| `Assets/` | MORPC logos for PDFs |
| `Archive/` | Past years' data (**git-ignored**; local only; contains personal data and dollar amounts) |
| `.claude/skills/create-pdf/` | Branded PDF builder |

**Workflow**
1. Never commit to `main`. Create one short topic branch per change
   (e.g. `cfp-2027-release`).
2. Commit in logical units with clear messages.
3. Open a PR into `main`; merge when reviewed.
4. After merge, update the README checklist and Section 2 of this plan.
5. When a Markdown file has a PDF companion, rebuild the PDF in the same PR:
   `python3 .claude/skills/create-pdf/build_pdf.py path/to/file.md`

**Data handling:** the Champion roster (`champions-roster.csv`), the direct-ask target list,
and everything in `Archive/` are git-ignored because they hold names, emails, or sponsorship
figures. Keep it that way. Get these files from the Coordinator's machine or shared drive
during handoff.

**File conventions:** label each document's audience in a header blockquote (outward,
Champion-facing, or internal); never mix audiences in one file. When a decision fills a
placeholder, update every affected file in the same PR.

### Website

**URL:** <https://morpc.github.io/data-day-2027/>. Static HTML in `docs/`, deployed to GitHub
Pages by `.github/workflows/deploy-pages.yml` on every push to `main` that touches `docs/`.
Shared styles in `docs/styles.css`; navigation in `docs/nav.js`; announcement banner on the
homepage.

| Page | File | Update when |
|---|---|---|
| Home | `index.html` | Each milestone (CFP open, registration open, agenda live) |
| About | `about.html` | RDR or Regional Data Agenda changes |
| Keynotes | `keynote.html` | Speakers confirmed (Nov 20) |
| Sponsors | `sponsors.html` | Brochure PDF link; confirmed sponsor logos (Jan) |
| Champions, Ways to Help, FAQ | `champions.html`, `ways-to-help.html`, `faq.html` | Ask changes; post-event Champion recognition |
| What People Say | `what-people-say.html` | After the survey (Mar) |

**Still to add:** CFP section (Oct 22), registration button (Nov 10), agenda page (Jan 15),
Champion recognition (Feb 26). The footer notes the site was produced with the help of AI;
keep it.

### Prompts

> **Prompt (site update):** "On a new branch, update docs/index.html for [milestone]: change
> the hero call to action and the announcement banner, match the existing style and voice,
> and preview the page locally. Then open a PR."

> **Prompt (agenda page):** "Create docs/agenda.html from the final agenda [file], using
> the existing page template, styles.css classes, and topic icons from Design/icons/topic/.
> Add it to nav.js. It must work at phone width."

> **Prompt (post-merge upkeep):** "PR #[n] just merged. Update the README checklist and
> PROJECT_PLAN.md Section 2 to reflect what changed, and bump the 'Last reviewed' dates."

---

## 12. Claude & AI use

### How AI supports this project

Most 2027 materials were drafted with **Claude Code** working directly in this repo:
research, first drafts, copy editing, the website, PDFs, spreadsheets, and timeline upkeep.
Staff make every decision and review every output before it goes out.

**What Claude reads automatically**
- `CLAUDE.md` (root) and `Champions/CLAUDE.md`: project facts, principles, open decisions.
- `voice-style.md`: audience voices and venue naming.
- Claude's memory for this project (user profile, style rules like "no em dashes," sponsor
  ask sequencing, topic priorities). A new staff lead starts with no memory; tell Claude your
  preferences and it will save them.

**Skills in this repo:** `create-pdf` renders any Markdown file to a MORPC-branded PDF.

### Good uses

- First drafts of emails, CFP text, web copy, promo kits, and checklists.
- Turning spreadsheets (submissions, survey exports, attendee lists) into summaries.
- Consistency checks across files (dates, venue naming, theme wording, placeholders).
- Keeping the README checklist and this plan current after each PR.
- Candidate research with sources you then verify.

### Guardrails

1. **Verify facts before outward use:** names, titles, dates, weekdays, dollar amounts, and
   the current RDR name and officers. Claude can be confidently wrong.
2. **Human review for everything outward-facing.** Claude drafts; staff send.
3. **Personal data stays local.** Don't paste rosters, attendee lists, or survey exports
   into tools outside MORPC's approved setup, and don't commit them.
4. **Don't let Claude make commitments.** Invitations, prices, and acceptances are staff
   decisions.
5. **Disclose AI help** where MORPC policy expects it (the website footer already does).
6. **Keep it in the repo.** Ask Claude to save drafts as files on a branch so there's a
   record and a review step.

### Prompt library (general)

> **Prompt (orientation for a new lead):** "I'm taking over Data Day planning. Read
> CLAUDE.md, PROJECT_PLAN.md, README.md, and Champions/launch_checklist.md. Give me a
> one-page brief: where we are, the next five deadlines, open decisions, and risks."

> **Prompt (consistency audit):** "Check every Markdown file and docs/*.html for the event
> date, hours, venue naming, theme subhead, and form links. List mismatches with file and
> line."

> **Prompt (date check):** "List every date in [file] with its weekday and flag any that
> fall on a weekend, a federal holiday, or conflict with PROJECT_PLAN.md Section 2."

> **Prompt (PDF):** "Rebuild the PDF for [file] with the create-pdf skill and check page 1
> visually."

> **Prompt (fill a decision everywhere):** "We decided [decision]. Find every file that has
> a placeholder or statement about it, update them all on one branch, and list what changed."

---

## 13. Open decisions & handoff checklist

### Open decisions

| Decision | Affects | Needed by |
|---|---|---|
| Registration free or paid | Eventbrite, marketing copy, FAQ | Fri, Oct 30 |
| Staff fallback owner for each Champion ask | Launch checklist, critical path | Now (overdue) |
| CFP deadline: Nov 13 or Nov 20 | CFP, promo kit, review schedule | Thu, Oct 22 |
| Current RDR name (RDR vs. RDAC) and board officers | CFP, signed materials | Thu, Oct 22 |
| Intern/poster call: deadlines, specs, selection committee | Program, signage | Mon, Nov 2 |
| Catering menu and budget | Events, registration fee | Fri, Jan 22 |

### Handoff checklist

- [ ] Repo access (write) on `morpc/data-day-2027` and GitHub Pages settings
- [ ] Copies of git-ignored files: `Archive/`, `champions-roster.csv`, direct-ask target list
- [ ] Owner access to both Microsoft Forms (Champion sign-up, keynote suggestion) and the CFP form
- [ ] Eventbrite account access (Events)
- [ ] Venue contact at CSCC Conference Services (see venue-details.md)
- [ ] Introductions to confirmed keynote speakers, sponsors, and active Champions
- [ ] Spot on the RDR quarterly agenda
- [ ] Walk through Section 2 together and agree on the next two weeks
- [ ] Claude Code set up on the repo; run the orientation prompt in Section 12

### Rolling the plan to the next year

1. After the March debrief, copy this file into the new year's repo (or a new branch).
2. Shift every date by the gap between event dates, then fix weekends and holidays.
3. Use these offsets from event day as the default: theme locked ~6 months out; CFP open
   ~4.5 months out for 6 weeks; keynotes final ~3 months out; registration open ~3.5 months
   out; agenda live ~5 weeks out; registration closes ~11 days out.
4. Move completed rows to an archive and reset statuses to Planned.
