# Data Day 2028 Planning & Facilitation Plan

> **Audience:** internal / MORPC staff only. Forward plan for the 2028 cycle; dates are
> proposed targets, not commitments.
> **Prepared by:** Jordan Inskeep (Data Day 2027 Coordinator). **Drafted:** October 19, 2026.
> **Purpose:** give the next Data Day lead everything needed to run Data Day 2028 from
> kickoff to post-event evaluation.

---

## 1. Introduction

### Summary

Data Day is MORPC's annual one-day conference for Central Ohio's public-sector data
community. **Data Day 2028 will be the 6th annual event.** This plan lays out how to run it:
what each planning area needs to accomplish, what to reuse from 2027, which decisions come
first, and a dated schedule for every task. All dates key off a **proposed event date of
Thursday, February 17, 2028**; confirm it by April 30, 2027 and shift the schedule if it
changes (see Appendix B).

Planning runs on a ~12-month cycle starting in March 2027, right after the 2027 debrief.
Expect roughly **200–210 staff hours**, most of it from the Data team. The 2027 cycle built a
reusable toolkit (the Champions program, resource kits, a design system, a website, a CFP
with topic tags, and AI-assisted workflows), so 2028 should start earlier and spend less time
building from scratch.

### Project overview

**The event.** A single-day conference for data users, practitioners, and analysts across
local governments, nonprofits, educational institutions, and civic-minded businesses.
Keynotes, breakout sessions across skill levels, posters, vendor tabling, and time to
network.

**The client.** The Mid-Ohio Regional Planning Commission (MORPC), a regional council of
governments and MPO covering 95+ local governments in a 15-county region. MORPC convenes the
**Regional Data Roundtable (RDR)**, which hosts Data Day. Data Day is a "Signature Event" in
the RDR's
[2026–2028 Regional Data Agenda](https://www.morpc.org/wp-content/uploads/2026/08/Regional-Data-Agenda-2026-2028.pdf).
**2028 is the final year of that Agenda**, so Data Day 2028 is a natural place to report on
it and to preview what comes next.

**Event history** (from `Archive/Data_Day_Historical_Reference.xlsx`)

| Year | Edition | Attendees | Sponsorship | Overall rating |
|---|---|---|---|---|
| 2023 | 1st (Mar 1, OU Dublin) | not recorded | not recorded | n/a |
| 2024 | 2nd | 152 | $4,000 | 4.31 / 5 |
| 2025 | 3rd | 208 | $9,000 | 4.31 / 5 |
| 2026 | 4th (Feb 10) | 196 | $10,000 | 4.41 / 5 |
| 2027 | 5th (Feb 18, "Plotting What's Next") | _fill after debrief_ | _fill_ | _fill_ |

### 2028 at a glance

| Item | Starting assumption | Decide by |
|---|---|---|
| Date | Thursday, February 17, 2028 (proposed) | Fri, Apr 30, 2027 |
| Venue | Center for Workforce Development at Columbus State Community College, if 2027 went well (would be the 4th year) | Fri, May 14, 2027 |
| Format | Carry forward 2027: 8:30 registration, 9:00–3:45 program, 2 keynotes, Intern Showcase, ~14 breakouts, posters, tabling | Fri, Jun 25, 2027 |
| Theme | Open. Lock by late August | Fri, Aug 20, 2027 |
| Volunteer model | Data Day Champions, year 2 | Fri, May 28, 2027 |
| Registration | Free vs. paid (carry 2027 decision unless the debrief says otherwise) | Fri, Oct 29, 2027 |
| Repo and website | New `data-day-2028` repo and site, seeded from 2027 | Fri, Apr 9, 2027 |

### Goals for 2028

Set final targets at the April kickoff once 2027 results are in. Starting proposals:

1. **Attendance:** 220+ registered attendees.
2. **Sponsorship:** exceed the 2027 total; at least one returning Platinum or Gold sponsor.
3. **Quality:** overall rating ≥ 4.4; close the gap between plenary and breakout ratings.
4. **On-time pipeline:** CFP open by Oct 1 for six weeks; keynotes invited in September.
5. **Champions:** 20 active Champions, half of them returning, every ask covered by a
   Champion and a staff fallback.
6. **Reach:** grow first-time attendees and organizations outside the usual networks
   (the Agenda's representation pillar).

### Lessons carried forward from 2027

- **Start the CFP earlier.** In 2027 it slipped about four weeks behind 2026, leaving under
  three weeks open. Release by Oct 1.
- **Keynote outreach needs September, not late October.** Use the Champion suggestion form in
  August and send invitations by late September.
- **Kits before asks worked; build them all early.** Have every Champion kit drafted by
  July 30, since most can be reused with new dates.
- **Name staff fallbacks at kickoff,** not after asks are running.
- **Sponsor prep slipped.** Start the prospect list and contact log in June.
- **Check weekdays on every date.** "Friday, October 31" (a Saturday) went out in 2027.
- _Add debrief findings here after Wed, Mar 24, 2027._

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

**Staff hours (2026 baseline):** ~208 total. Data 161, shared team meetings 30, CE + Data 8,
Events + Data 5, IT + Data 3, Events 1.

### Planning principles

1. **Staff own the critical path.** Champions connect, amplify, and host. MORPC owns
   decisions, money, and commitments. Every milestone must be reachable even if zero
   Champions deliver.
2. **Kit before ask.** Never send Champions an ask until its resource kit exists.
3. **The theme drives everything downstream.** Lock it by late August.
4. **Three audiences, three voices, separate files.** Outward (Regional Data Agenda voice),
   Champion-facing (warm, second person), internal (direct). See [voice-style.md](voice-style.md).
5. **Own Data Day's niche.** Lead with data governance, management, analysis, and
   infrastructure. GIS is welcome as one topic among many; Data Day does not compete with
   the Ohio GIS Conference.

### How to use this plan

- **Sections 2–10** cover each planning area: goals, what to reuse, decisions, a detailed
  task schedule, and AI prompts.
- **Sections 11–12** cover the repo, website, and Claude.
- **Appendix A** is the single master timeline with every dated task. Work from it week to
  week and update statuses after each merged PR.
- **Prompts** in blockquotes are starting points for Claude Code, run from the repo root so
  it can read the referenced files (see Section 12).

> **Prompt (weekly check-in):** "Read PROJECT_PLAN.md Appendix A. Today is [date]. List what
> is overdue, what is due in the next two weeks, and any Champion ask whose kit isn't
> finished."

---

## 2. Planning phases at a glance

| Phase | Window | Outcomes |
|---|---|---|
| 0. Close out 2027 & kick off | Mar–Apr 2027 | Debrief, archive, 2028 repo, goals, roles, date |
| 1. Foundations | May–Jul 2027 | Venue booked, Champions re-recruited, save-the-date site, sponsor package, all early kits |
| 2. Theme & outreach | Aug–Sep 2027 | Theme locked, keynote invitations out, sponsor asks underway, CFP ready |
| 3. Calls & registration | Oct–Dec 2027 | CFP open six weeks, keynotes confirmed, registration open, sessions selected |
| 4. Program build | Jan 2028 | Agenda live, day-of roles assigned, sponsors confirmed, materials to print |
| 5. Event | Feb 2028 | Final logistics; Data Day on Thu, Feb 17 |
| 6. Evaluate & roll forward | Feb–Apr 2028 | Survey, recognition, debrief, 2029 date |

---

## 3. Theme & program concept

### Overview

The theme gives every downstream piece one story. 2027's "Plotting What's Next" leaned on the
5th anniversary. 2028 has no anniversary hook, but it does have the **close of the 2026–2028
Regional Data Agenda**, which suggests a theme about results, impact, or the region's next
agenda. Whatever the theme, keep a locked subhead used verbatim everywhere and a simple visual
motif that works with the established Data Day palette.

**Reuse from 2027:** [theme concept format](Theme/theme-concept-plotting-whats-next.md),
[design brief](Design/design-brief.md), [palette](Design/palette.md),
[icons](Design/icons/).

**Decisions:** theme and subhead; whether to keep the classic palette (recommended) or
refresh it; how the theme frames the two keynotes.

### Schedule

| Date | Task | Owner |
|---|---|---|
| Wed, Mar 24, 2027 | Capture 2027 theme lessons in the debrief | Data |
| Fri, Jun 11, 2027 | Draft three theme options with subheads and motifs | Data |
| Fri, Jun 25, 2027 | Internal review; narrow to two | Data, CE |
| Wed, Jul 28, 2027 | Present options at RDR Q3 | Data, RDR |
| Fri, Aug 20, 2027 | **Lock theme, subhead, and palette** | Data, RDR |
| Fri, Aug 27, 2027 | Update design brief, website hero, and templates | CE, Data |

### Prompts

> **Prompt (theme options):** "Read the 2027 theme concept, the Regional Data Agenda pillars
> and focus areas in CLAUDE.md, and the 2027 survey topic suggestions. Propose three Data Day
> 2028 themes that speak to the final year of the 2026–2028 Regional Data Agenda. For each:
> one-line idea, subhead, how it threads through program, Champions, marketing, and
> sponsorship, and a visual motif that works with Design/palette.md. Outward voice, no em
> dashes."

> **Prompt (copy check):** "Check [file] against the locked 2028 theme and subhead and the
> rules in voice-style.md. List any wording that drifts or breaks venue naming."

---

## 4. Keynotes

### Overview

Two slots: a **50-minute morning keynote** and a **55-minute lunch keynote** (2027 used a
moderated panel at lunch). Plenaries have rated below breakouts (2024: 3.74 morning, 3.72
lunch), so pick for fit and engagement, not profile. Favor local, no-cost speakers. Champions
**suggest and introduce** candidates (Ask 1); staff invite and negotiate.

**Reuse from 2027:**
[keynote criteria one-pager](Champions/Engagements/Keynotes/keynote-criteria-one-pager.md),
[suggestion form spec](Champions/Engagements/Keynotes/keynote-suggestion-form.md) and the
[live form](https://forms.cloud.microsoft/r/mYmz1bctPH) (reset responses),
[warm-intro template](Champions/Engagements/Keynotes/keynote-intro-template.md),
[request](Champions/Engagements/Keynotes/keynote-request-email.md) and
[reminder](Champions/Engagements/Keynotes/keynote-reminder-email.md) emails, the morning
candidate research and scoring tracker (`Keynotes/Morning/`), and unused 2027 candidates as a
head start.

**Decisions:** keynote vs. panel at lunch; honorarium budget (if any); how keynotes frame the
theme.

### Schedule

| Date | Task | Owner |
|---|---|---|
| Fri, Jul 16, 2027 | Update criteria one-pager for the 2028 theme; reset suggestion form | Data |
| Mon, Aug 2, 2027 | Champions Ask 1: suggestion request email | Data |
| Fri, Aug 27, 2027 | Reminder email | Data |
| Fri, Sep 10, 2027 | Suggestion form closes | Data |
| Fri, Sep 17, 2027 | Score candidates; pick first choice and backup for each slot | Data |
| Fri, Sep 24, 2027 | Invite first choices (one per slot; hold backups) | Data |
| Fri, Oct 1, 2027 | Follow up once; move to backup if no reply | Data |
| Fri, Nov 12, 2027 | Both keynotes confirmed | Data |
| Fri, Nov 19, 2027 | Bios and headshots; Keynotes page updated; thank Champions whose leads landed | Data, CE |
| Tue, Jan 18, 2028 | Confirm title and topic; send panel questions; request slides by Fri, Feb 4 | Data |
| Fri, Feb 11, 2028 | Keynote intro slides | CE, Data |
| Tue, Feb 22, 2028 | Thank-you notes | Data |

### Prompts

> **Prompt (score candidates):** "Add these candidates to the keynote tracker: [names, roles,
> links]. Score each 1–3 against the criteria in keynote-criteria-one-pager.md, list public
> talks we can verify, and flag anyone outside the region or likely to need an honorarium."

> **Prompt (invitation):** "Draft a keynote invitation to [name, role] for the Data Day 2028
> [morning/lunch] slot. Include date, venue, length, theme, audience size, why we thought of
> them, and a reply-by date of [date]. Outward voice, under 200 words, no em dashes."

> **Prompt (panel run sheet):** "Draft a lunch panel run sheet: speaker timing, moderator
> intro, eight moderator questions from concrete to big-picture, and audience Q&A."

---

## 5. Call for Proposals & breakout program

### Overview

The CFP fills about **14 breakouts** across four blocks, plus the **Intern Showcase**
(lightning talks at lunch) and **posters**. Formats: 45-min lecture, 45-min panel, 90-min
hands-on workshop. No tracks: speakers choose up to two public **topic tags** and a skill
level, and staff capture internal Regional Data Agenda metadata to balance the program.
Champions **share the CFP and nudge strong presenters** (Ask 2); staff review and select.

**Reuse from 2027:** [CFP](Breakouts/CFP/cfp-2027-draft.md),
[tagging model](Breakouts/CFP/session-tagging-model-draft.md),
[ways to participate](Breakouts/ways-to-participate-draft.md),
[workshop format](Breakouts/workshop-format-draft.md),
[program schedule grid](Logistics-Venue/program-schedule-draft.md), the 2027 CFP form and
promo kit.

**Decisions:** topic tag list updates (use 2027 survey requests); number of blocks (4, or 5
if over-subscribed); intern and student poster call details (deadlines, specs, selection
committee); whether to give workshops their own call.

### Schedule

| Date | Task | Owner |
|---|---|---|
| Fri, Aug 27, 2027 | Update tag list and formats from 2027 survey results | Data |
| Fri, Sep 17, 2027 | Finalize 2028 CFP text (theme, dates, RDR officers) | Data, RDR |
| Fri, Sep 24, 2027 | Online form, CFP website section, CFP promo kit | Data, CE |
| **Fri, Oct 1, 2027** | **Release CFP:** email list, website, Champions Ask 2 | Data, CE |
| TBD (Oct 2027) | Promote at the Summit on Sustainability and partner events | Data |
| Mon, Oct 4, 2027 | Open intern project and student poster call | Data |
| Mon, Nov 1, 2027 | Reminder email and Champion nudge | Data |
| Fri, Nov 12, 2027 | CFP closes | Data |
| Mon, Nov 15–Fri, Dec 3, 2027 | Review and score; balance tags, skill levels, constituencies, formats | Data, RDR |
| Fri, Dec 10, 2027 | Notify accepted and declined speakers | Data |
| Fri, Dec 17, 2027 | Acceptances confirmed; backfill from waitlist | Data |
| Fri, Jan 7, 2028 | Agenda and rooms final; intern/poster submissions due | Data |
| Fri, Jan 14, 2028 | Intern Showcase and poster selections; publish agenda | Data, CE |
| Fri, Jan 21, 2028 | Collect session slide decks | Data |
| Fri, Feb 11, 2028 | Session intro slides | CE, Data |
| Tue, Feb 15, 2028 | Load decks onto session laptops | IT, Data |

### Prompts

> **Prompt (roll the CFP):** "Copy the 2027 CFP to Breakouts/CFP/cfp-2028-draft.md. Update
> the theme, dates from PROJECT_PLAN.md Appendix A, and topic tags. List every placeholder and
> claim that still needs verification."

> **Prompt (CFP promo kit):** "Build the 2028 CFP promo kit for Champions: a 'why present'
> blurb, three LinkedIn posts, a 100-word forwardable email, and a key-dates block. Champion
> voice, no em dashes, facts only from the 2028 CFP."

> **Prompt (review submissions):** "From the CFP export [file], build a review sheet with
> format, tags, skill level, focus area, pillar, and constituency per proposal. Summarize gaps
> and overlaps."

> **Prompt (build agenda):** "Place accepted sessions [file] into the program grid. Keep
> same-tag sessions apart, put panels opposite workshops, and respect room capacity. Show the
> grid as a table."

---

## 6. Data Day Champions

### Overview

Champions replaced the monthly Working Group in 2027 with opt-in, time-boxed asks. Year 2 is
about **retention and coverage**: re-recruit 2027 Champions early, recruit beyond existing
networks, name a staff fallback for every ask on day one, and run each ask on time with a kit
ready. Champions register like other attendees and are recognized with program credit, a
website listing, and an event thank-you (revisit in the debrief).

**The five asks (2028 windows)**

| # | Ask | Window | Kit |
|---|---|---|---|
| 1 | Connect with potential keynote speakers | Aug 2–Sep 10 | Criteria one-pager, suggestion form, intro template |
| 2 | Share the CFP and recruit speakers | Oct 1–Nov 12 | CFP promo kit |
| 3 | Solicit sponsors (intros only) | Sep 1–Nov 19 | Brochure, sponsor intro template, contact log |
| 4 | Encourage registration | Nov 2–Feb 6 | Registration promo kit |
| 5 | Take a day-of role (facilitator anchor) | Assign Jan 10–14; execute Feb 17 | Facilitator cheat sheet, run-of-show |

**Reuse from 2027:** [Champions/CLAUDE.md](Champions/CLAUDE.md),
[launch checklist](Champions/launch_checklist.md),
[Ways to Help](Champions/Recruitment/ways_to_help.md), [FAQ](Champions/Recruitment/faq.md),
[recruitment emails](Champions/Recruitment/),
[sign-up form spec](Champions/Recruitment/signup-form.md) and
[live form](https://forms.cloud.microsoft/r/7cFXhbQeMc), [engagement kits](Champions/Engagements/),
the Champion tracker, and the 2027 Champion survey results.

**Watch-outs:** facilitators were historically MORPC staff, so keep a staff backup in every
room. The roster contains personal contact data and stays git-ignored.

**Decisions:** Coordinator for 2028; staff fallback per ask; target pool size; any change to
recognition or comp.

### Schedule

| Date | Task | Owner |
|---|---|---|
| Fri, Apr 9, 2027 | Name Coordinator and a staff fallback for each ask | Data |
| Fri, May 28, 2027 | Update Ways to Help, FAQ, sign-up form for 2028; invite returning Champions | Data |
| Tue, Jul 13, 2027 | Broad recruitment call; personalized asks to new prospects | Data |
| Fri, Jul 30, 2027 | Kits for Asks 1–3 ready; welcome note to new Champions; tracker updated | Data, CE |
| Mon, Aug 2, 2027 | Ask 1: keynote suggestions | Data |
| Wed, Sep 1, 2027 | Ask 3: sponsor introductions | Data |
| Fri, Oct 1, 2027 | Ask 2: share the CFP | Data |
| Fri, Oct 29, 2027 | Registration promo kit ready (gate for Ask 4) | CE, Data |
| Tue, Nov 2, 2027 | Ask 4: encourage registration | Data |
| Fri, Nov 19, 2027 | Ask 3 closes; thank Champions for leads | Data |
| Fri, Dec 17, 2027 | Facilitator cheat sheet and run-of-show ready (gate for Ask 5) | Data |
| Mon, Jan 10–Fri, Jan 14, 2028 | Ask 5: assign day-of roles; registration push 2 | Data |
| Mon, Jan 31–Fri, Feb 4, 2028 | Facilitators connect with speakers; registration last call | Champions, Data |
| Tue, Feb 15, 2028 | Day-of role briefing | Data |
| Tue, Feb 22–Fri, Feb 25, 2028 | Recognize Champions; close the loop on impact; send Champion survey | Data, CE |
| Wed, Mar 22, 2028 | Review Champion metrics; flag returners for 2029 | Data |

**Before every ask:** check the tracker. Each ask needs both a Champion and a named staff
fallback.

### Prompts

> **Prompt (year-2 refresh):** "Update Champions/Recruitment/ways_to_help.md, faq.md, and
> signup-form.md for 2028 using the windows in PROJECT_PLAN.md Section 6. Change only dates,
> theme, and anything the 2027 Champion survey says was unclear. List every change."

> **Prompt (returning Champion invite):** "Draft a short note inviting 2027 Champions back
> for 2028. Thank them with one specific 2027 result, list the asks and windows, and link the
> sign-up form. Champion voice, under 150 words."

> **Prompt (ask email):** "Draft the Ask [n] email. Use ways_to_help.md for the ask and match
> the tone of keynote-request-email.md. Confirm the kit exists first and stop if it doesn't."

---

## 7. Sponsorship

### Overview

Revenue grew from $4,000 (2024) to $10,000 (2026). 2027 tiers were Platinum $5,000, Gold
$3,000, Silver $1,500, and Bronze $500, all with logo placement. In 2028, start earlier
(June), go back to every past sponsor first, and connect the pitch to the theme and the
Regional Data Agenda's results. Staff own package, pricing, ask, and invoicing. Champions make
introductions only (Ask 3). Ask a prospect to sponsor first; invite them to be a Champion
only after they decline.

**Reuse from 2027:** [sponsorship brochure](Sponsors/DataDay2027_SponsorshipBrochure.md),
[sponsor intro template](Champions/Engagements/Sponsors/sponsor-intro-template.md),
[Sponsors web page](docs/sponsors.html), sponsorship tracking files in `Archive/`.

**Decisions:** tier prices and benefits; whether to add an in-kind or named-feature option
(e.g. Intern Showcase sponsor); alignment with MORPC-wide sponsor asks.

### Schedule

| Date | Task | Owner |
|---|---|---|
| Fri, Jun 11, 2027 | Past and prospective sponsor list; start shared contact log | Data, Events |
| Fri, Jun 25, 2027 | Update tiers and benefits; align with MORPC-wide asks | Data, Events |
| Fri, Jul 30, 2027 | 2028 brochure (md + PDF) and Sponsors page | Data, CE |
| Wed, Sep 1, 2027 | Start asks to returning sponsors; Champions Ask 3 | Data |
| Fri, Nov 19, 2027 | Close active recruiting | Data |
| Fri, Jan 7, 2028 | Confirm sponsorships; collect logos and tabling needs | Events, Data |
| Fri, Jan 14, 2028 | Invoice sponsors | Events |
| Fri, Jan 28, 2028 | Final logos into printed program | CE |
| Fri, Feb 11, 2028 | Sponsor recognition slide | CE |
| Thu, Feb 17, 2028 | Recognition after lunch keynote; tabling all day | Data |
| Tue, Feb 22, 2028 | Thank-you notes with attendance numbers | Data |
| Fri, Mar 17, 2028 | Confirm all invoices paid | Events |

### Prompts

> **Prompt (prospect list):** "From the sponsorship tracking files in Archive/, list every
> past sponsor with years and tier, mark lapsed sponsors, and suggest a tier to ask each for.
> Save the output inside Archive/ so it stays out of git."

> **Prompt (brochure):** "Copy the 2027 sponsorship brochure to a 2028 version. Update the
> theme, date, stats from the 2027 debrief, and tiers [details]. Then rebuild the PDF."

---

## 8. Marketing, communications & registration

### Overview

Marketing has been the lightest part of the process and is the biggest growth opportunity.
For 2028, write a marketing calendar at kickoff instead of reacting to milestones. Channels:
website, MORPC email lists, partner newsletters, LinkedIn, Champions' networks, and partner
events. Registration runs on **Eventbrite** (Events). Three pushes: **open** (Nov 2),
**agenda live** (Jan 14), **last call** (Jan 31).

**Reuse from 2027:** [What People Are Saying](Marketing/what-people-are-saying.md) (refresh
with 2027 survey quotes), the registration promo kit, site banner, past attendee lists in
`Archive/` (personal data, local only).

**Decisions:** free vs. paid; attendance target; new audiences to reach (students, smaller
jurisdictions, organizations new to Data Day).

### Schedule

| Date | Task | Owner |
|---|---|---|
| Fri, Apr 9, 2027 | Draft 2028 marketing calendar and audience list | Data, CE |
| Tue, Jun 15, 2027 | Save-the-date website and email | CE, Data |
| Fri, Aug 27, 2027 | Theme rollout on site and social | CE |
| Fri, Oct 29, 2027 | Decide free vs. paid; registration email list; registration promo kit | Events, Data, CE |
| Tue, Nov 2, 2027 | Eventbrite live; register button; push 1; Champions Ask 4 | Events, CE |
| Fri, Jan 14, 2028 | Agenda live; push 2 | CE, Data |
| Mon, Jan 31, 2028 | Push 3: last call | CE, Data |
| Sun, Feb 6, 2028 | Close registration | Events |
| Fri, Feb 11, 2028 | Final attendee email (parking, check-in, agenda, Wi-Fi) | Events |
| Tue, Feb 15, 2028 | Print name tags | Events |
| Thu, Feb 17, 2028 | Photos and live posts | CE, Champions |
| Tue, Feb 22–Fri, Feb 25, 2028 | Recap post with photos and stats | CE |

### Prompts

> **Prompt (marketing calendar):** "Draft the Data Day 2028 marketing calendar: audiences,
> channels, one message per moment, owners, and a week-by-week plan from June 2027 to
> February 2028 using Appendix A. Internal voice."

> **Prompt (registration push):** "Write registration push [1/2/3]: a 120-word email, a
> LinkedIn post, and a forwardable Champion version. Use the 2028 theme and [hook]. Outward
> voice, no em dashes."

> **Prompt (reach analysis):** "Using the consolidated attendee file in Archive/, show repeat
> vs. new attendees by year and which constituencies are under-represented. Counts only, no
> names."

---

## 9. Venue, logistics & day-of operations

### Overview

The 2027 setup at the Center for Workforce Development (official address: The Conference
Center, 315 Cleveland Avenue, 4th floor, Columbus, OH 43215) used four rooms all day with no
reconfiguration: the **400 Ballroom** (300, banquet rounds; keynotes, Intern Showcase, lunch,
ballroom breakouts), **Room 420** (workshops), and **Rooms 412 and 414** (lectures), plus the
**415 Gallery** for tabling. If the venue repeats, reuse the grid and fix what the 2027
debrief flags.

**Reuse from 2027:** [venue details and contacts](Logistics-Venue/venue-details.md),
[program schedule and room grid](Logistics-Venue/program-schedule-draft.md), run-of-show,
facilitator cheat sheet, signage list, slide templates.

**Decisions:** date and venue (first); room plan; catering budget; AV needs.

### Schedule

| Date | Task | Owner |
|---|---|---|
| Fri, Apr 30, 2027 | Pick date; request venue hold | Events, Data |
| Fri, May 14, 2027 | Book venue; sign contract | Events |
| Fri, Jun 25, 2027 | Confirm room plan and session grid | Data |
| Fri, Dec 3, 2027 | Confirm workshop room setup, parking, catering options, AV costs | Events |
| Fri, Dec 17, 2027 | Update run-of-show and facilitator cheat sheet | Data |
| Fri, Jan 21, 2028 | Finalize catering (dietary needs from registration) | Events |
| Mon, Jan 31, 2028 | Order signage | CE |
| Fri, Feb 11, 2028 | All event slides (breaks, intros, sponsor thanks, survey QR) | CE, Data |
| Tue, Feb 15, 2028 | Laptops loaded; day-of briefing; name tags printed | IT, Data, Events |
| Wed, Feb 16, 2028 | Final check with venue | Events |
| Thu, Feb 17, 2028 | **Data Day 2028** | All |

### Prompts

> **Prompt (run-of-show):** "Turn the program schedule into a minute-by-minute staff
> run-of-show from 7:30 AM setup to 4:30 PM teardown: who is where, which slide is up, room
> cues, and a contact column."

> **Prompt (signage list):** "List every sign we need from the rooms, sessions, sponsors,
> posters, and tabling in the 2028 program. Give wording, size, and location."

---

## 10. Post-event survey & evaluation

### Overview

The attendee survey is the main evidence of Data Day's value. It feeds next year's topics,
speaker choices, and the "What People Say" materials. The 2024–2027 surveys share a core
question set; **keep the core unchanged** for year-over-year comparison and add only what
2028 needs.

**Core questions (keep):** how did you hear about the event (include "a Data Day Champion or
colleague invited me"); overall rating (1–5); met expectations (and why not); morning and
lunch plenary ratings with comments; session attended and rating for each block; Intern
Showcase and poster ratings; would you attend next year; what should MORPC change; suggested
topics, speakers, or features; topic tags you want more of; opt-in for future MORPC emails.

**Also run:** a short Champion survey (what worked, what was unclear, would you return) and a
one-line feedback ask in speaker and sponsor thank-yous.

**Measure against Section 1 goals:** attendance, sponsorship, overall and plenary ratings,
response rate (target ≥ 25%), Champion metrics (leads, intros, CFP submissions,
registrations, roles filled, retention).

**Reuse:** the 2027 survey form (copy and update session lists), the Survey Results sheet in
the historical reference workbook.

### Schedule

| Date | Task | Owner |
|---|---|---|
| Fri, Jan 21, 2028 | Copy 2027 survey; update for the 2028 agenda | Data |
| Fri, Feb 4, 2028 | Finalize survey; generate QR code | Data |
| Fri, Feb 11, 2028 | QR code on recognition slide and closing slides in every room | CE |
| Thu, Feb 17, 2028 | Announce survey after lunch keynote and in the last block | Data, facilitators |
| Fri, Feb 18, 2028 | Email survey to all registrants | Data |
| Tue, Feb 22, 2028 | Send Champion survey | Data |
| Thu, Feb 24, 2028 | Reminder | Data |
| Fri, Mar 3, 2028 | Close surveys; export to `Archive/2028/` | Data |
| Fri, Mar 17, 2028 | Results summary to RDR; ratings to each speaker | Data |
| Wed, Mar 22, 2028 | Internal debrief; decisions for 2029 | All |
| Fri, Mar 24, 2028 | Add 2028 to historical reference; refresh "What People Say" | Data |

### Prompts

> **Prompt (build survey):** "Using the 2027 survey questions and the final 2028 agenda,
> write the 2028 survey: keep the core verbatim, update block times and session lists, and
> output a Forms-ready list with question types."

> **Prompt (analyze results):** "Analyze the 2028 survey export [file]: response rate,
> overall and plenary ratings, every session's average with n, comment themes with counts,
> top requested topics, and comparisons to 2024–2027. Then write a one-page RDR summary in the
> outward voice. Don't quote anyone by name."

> **Prompt (debrief agenda):** "Using the survey summary, Champion metrics, and Section 1
> goals, draft a 60-minute debrief agenda: what worked, what didn't, decisions for 2029, and
> owners."

---

## 11. GitHub repository & website

### Repository

**2027 repo:** <https://github.com/morpc/data-day-2027>. A no-code planning repo of Markdown
documents, PDFs, spreadsheets, and the website source.

**Recommended 2028 setup:** create `morpc/data-day-2028` from the 2027 repo at kickoff so
2027 stays a clean record. Carry over `CLAUDE.md`, `voice-style.md`, `Design/`,
`.claude/skills/`, `.github/workflows/`, `docs/` (as the site starting point), and the
templates listed in Appendix C. Update `CLAUDE.md` quick facts for 2028 first.

| Folder | Contents |
|---|---|
| `README.md` | Staff-only notice, overview, status checklist |
| `PROJECT_PLAN.md` | This plan |
| `CLAUDE.md`, `voice-style.md` | Context and style rules for Claude; read first |
| `Theme/`, `Design/` | Theme concept, design brief, palette, logo, icons |
| `Keynotes/` | Candidate research, tracker, panel notes |
| `Breakouts/` | CFP, tagging model, formats |
| `Champions/` | Program checklist, recruitment materials, engagement kits |
| `Sponsors/`, `Registration/`, `Marketing/`, `Logistics-Venue/` | Area materials |
| `docs/` | Website source (deployed automatically) |
| `Assets/` | MORPC logos for PDFs |
| `Archive/` | Past years' data (**git-ignored**; personal data and dollar amounts) |
| `.claude/skills/create-pdf/` | Branded PDF builder |

**Workflow**
1. Never commit to `main`. One short topic branch per change (e.g. `cfp-2028-release`).
2. Commit in logical units with clear messages.
3. Open a PR into `main`; merge when reviewed.
4. After merge, update the README checklist and Appendix A statuses.
5. Rebuild any PDF companion in the same PR:
   `python3 .claude/skills/create-pdf/build_pdf.py path/to/file.md`

**Data handling:** the Champion roster, direct-ask target lists, and everything in `Archive/`
are git-ignored because they hold names, emails, or sponsorship figures. Keep it that way and
hand these files over directly.

**File conventions:** label each document's audience in a header blockquote; never mix
audiences in one file. When a decision fills a placeholder, update every affected file in the
same PR.

### Website

The 2027 site (<https://morpc.github.io/data-day-2027/>) is static HTML in `docs/`, deployed
to GitHub Pages by `.github/workflows/deploy-pages.yml` on every push to `main` that touches
`docs/`. For 2028, copy it into the new repo, enable Pages (Settings → Pages → Source:
GitHub Actions), and decide whether the 2027 site stays up as an archive.

| Page | Publish or update by |
|---|---|
| Home (save the date) | Tue, Jun 15, 2027 |
| About (MORPC, RDR, Regional Data Agenda) | Tue, Jun 15, 2027 |
| Champions, Ways to Help, FAQ | Fri, May 28, 2027 |
| Keynotes (criteria, suggestion form) | Mon, Aug 2, 2027; speakers by Fri, Nov 19 |
| Sponsors (brochure PDF link) | Fri, Jul 30, 2027; logos by Fri, Jan 14, 2028 |
| Theme rollout | Fri, Aug 27, 2027 |
| Call for Proposals | Fri, Oct 1, 2027 |
| Register | Tue, Nov 2, 2027 |
| Agenda | Fri, Jan 14, 2028 |
| What People Say; Champion recognition | Fri, Feb 25 and Fri, Mar 24, 2028 |

Keep the footer note that the site was produced with the help of AI.

### Prompts

> **Prompt (new-year repo):** "We're starting Data Day 2028 in a new repo copied from
> data-day-2027. Update CLAUDE.md, README.md, and voice-style.md for 2028 using Section 1 of
> PROJECT_PLAN.md, and list every file that still says 2027."

> **Prompt (site update):** "On a new branch, update docs/index.html for [milestone]: hero
> call to action and banner, existing style and voice, works at phone width. Then open a PR."

> **Prompt (post-merge upkeep):** "PR #[n] merged. Update the README checklist and Appendix A
> statuses in PROJECT_PLAN.md."

---

## 12. Claude & AI use

### How AI supports this project

Most 2027 materials were drafted with **Claude Code** working directly in the repo: research,
first drafts, copy editing, the website, PDFs, spreadsheets, and timeline upkeep. Staff make
every decision and review every output before it goes out. Plan on the same for 2028; the
prompts in this plan are the starting set.

**What Claude reads automatically**
- `CLAUDE.md` (root) and `Champions/CLAUDE.md`: project facts, principles, open decisions.
  Update these first each cycle; stale facts here spread into every draft.
- `voice-style.md`: audience voices and venue naming.
- Claude's per-user memory. A new lead starts with none; tell Claude your preferences (for
  example "no em dashes") and it will remember them.

**Skills in the repo:** `create-pdf` renders any Markdown file to a MORPC-branded PDF.

### Good uses

- First drafts of emails, CFP text, web copy, promo kits, and checklists.
- Rolling last year's materials forward (dates, theme, stats) with a list of changes.
- Turning spreadsheets (submissions, surveys, attendee lists) into summaries.
- Consistency checks across files: dates and weekdays, venue naming, theme wording, links.
- Keeping the README and Appendix A current after each PR.
- Candidate research with sources you then verify.

### Guardrails

1. **Verify facts before outward use:** names, titles, dates and weekdays, dollar amounts,
   RDR name and officers.
2. **Human review for everything outward-facing.** Claude drafts; staff send.
3. **Personal data stays local.** Keep rosters, attendee lists, and survey exports out of git
   and out of tools outside MORPC's approved setup.
4. **No commitments by AI.** Invitations, prices, and acceptances are staff decisions.
5. **Disclose AI help** where MORPC policy expects it.
6. **Keep work in the repo** on a branch so there's a record and a review step.

### Prompt library (general)

> **Prompt (orientation for a new lead):** "I'm leading Data Day 2028. Read CLAUDE.md,
> PROJECT_PLAN.md, and README.md. Give me a one-page brief: the next five deadlines, decisions
> I need to make this month, reusable assets, and risks."

> **Prompt (consistency audit):** "Check every Markdown file and docs/*.html for the 2028
> date, hours, venue naming, theme subhead, and form links. List mismatches with file and
> line."

> **Prompt (date check):** "List every date in [file] with its weekday. Flag weekends, federal
> holidays, and conflicts with Appendix A."

> **Prompt (fill a decision everywhere):** "We decided [decision]. Find every file with a
> placeholder or statement about it, update them on one branch, and list what changed."

---

## 13. Key decisions & handoff

### Decisions to make, in order

| Decision | Affects | Decide by |
|---|---|---|
| 2028 Coordinator and staff fallbacks per Champion ask | Everything | Fri, Apr 9, 2027 |
| 2028 goals and budget | Sponsorship, catering, marketing | Fri, Apr 9, 2027 |
| Repo approach (new repo vs. reuse) | Repo, website | Fri, Apr 9, 2027 |
| Event date | Every date in this plan | Fri, Apr 30, 2027 |
| Venue | Program grid, logistics | Fri, May 14, 2027 |
| Format and room plan | CFP, schedule | Fri, Jun 25, 2027 |
| Sponsorship tiers | Brochure, Ask 3 | Fri, Jun 25, 2027 |
| Theme and subhead | CFP, keynotes, marketing, design | Fri, Aug 20, 2027 |
| Current RDR name and officers | CFP, signed materials | Fri, Sep 17, 2027 |
| Intern/poster call details | Program, signage | Mon, Oct 4, 2027 |
| Registration free vs. paid | Eventbrite, marketing | Fri, Oct 29, 2027 |

### Handoff checklist

- [ ] Write access to the GitHub repo(s) and Pages settings
- [ ] Copies of git-ignored files: `Archive/`, Champion roster, target lists
- [ ] Owner access to the Microsoft Forms (Champion sign-up, keynote suggestion, CFP, survey)
- [ ] Eventbrite access (Events)
- [ ] CSCC Conference Services contact (see venue-details.md)
- [ ] Introductions to returning sponsors, active Champions, and 2027 keynote leads not used
- [ ] Standing spot on the RDR quarterly agenda
- [ ] 2027 debrief notes and survey summary
- [ ] Claude Code set up on the repo; run the orientation prompt in Section 12

---

## Appendix A. Master timeline

Proposed dates for Data Day 2028 on **Thursday, February 17, 2028**. "Wks out" counts weeks
before the event (negative = after). Dates avoid weekends and federal holidays (Thanksgiving
Nov 25, 2027; MLK Day Jan 17, 2028; Presidents' Day Feb 21, 2028), except registration
closing on a Sunday. Add a **Status** column value (Done, Next, Overdue) as work progresses.

| Date | Wks out | Area | Task | Owner | Status |
|---|---|---|---|---|---|
| Wed, Mar 24, 2027 | 47 | Evaluation | 2027 debrief; capture lessons for 2028 | All | |
| Fri, Mar 26, 2027 | 46 | Repo | Archive 2027; create 2028 repo; update CLAUDE.md quick facts | Data | |
| Fri, Apr 9, 2027 | 44 | Planning | Kickoff: goals, budget, Coordinator, staff fallbacks, marketing calendar | All | |
| Wed, Apr 28, 2027 | 42 | Planning | RDR Q2: 2027 results and 2028 goals | Data, RDR | |
| Fri, Apr 30, 2027 | 41 | Logistics | Pick event date; request venue hold | Events, Data | |
| Fri, May 14, 2027 | 39 | Logistics | Book venue; sign contract | Events | |
| Fri, May 28, 2027 | 37 | Champions | Refresh Ways to Help, FAQ, sign-up form; invite returning Champions | Data | |
| Fri, Jun 11, 2027 | 35 | Theme | Draft three theme options | Data | |
| Fri, Jun 11, 2027 | 35 | Sponsors | Past and prospective sponsor list; start contact log | Data, Events | |
| Tue, Jun 15, 2027 | 35 | Website | Save-the-date site and email | CE, Data | |
| Fri, Jun 25, 2027 | 33 | Program | Confirm format, room plan, session grid | Data | |
| Fri, Jun 25, 2027 | 33 | Sponsors | Update tiers and benefits; align with MORPC-wide asks | Data, Events | |
| Fri, Jun 25, 2027 | 33 | Theme | Narrow theme options to two | Data, CE | |
| Jul 2027 | ~30 | Planning | Internal team meeting | All | |
| Tue, Jul 13, 2027 | 31 | Champions | Broad recruitment call; personalized asks | Data | |
| Fri, Jul 16, 2027 | 30 | Keynotes | Update criteria one-pager; reset suggestion form | Data | |
| Wed, Jul 28, 2027 | 29 | Theme | RDR Q3: theme options | Data, RDR | |
| Fri, Jul 30, 2027 | 28 | Champions | Kits for Asks 1–3 ready; welcome note; tracker updated | Data, CE | |
| Fri, Jul 30, 2027 | 28 | Sponsors | 2028 brochure and Sponsors page | Data, CE | |
| Mon, Aug 2, 2027 | 28 | Keynotes | Champions Ask 1: keynote suggestions | Data | |
| Fri, Aug 20, 2027 | 25 | Theme | **Lock theme, subhead, palette** | Data, RDR | |
| Fri, Aug 27, 2027 | 24 | Theme | Theme rollout on site; design brief updated | CE, Data | |
| Fri, Aug 27, 2027 | 24 | Keynotes | Suggestion reminder | Data | |
| Fri, Aug 27, 2027 | 24 | CFP | Update tag list and formats from 2027 survey | Data | |
| Wed, Sep 1, 2027 | 24 | Sponsors | Start sponsor asks; Champions Ask 3 | Data | |
| Sep 2027 | ~22 | Planning | Internal team meeting | All | |
| Fri, Sep 10, 2027 | 22 | Keynotes | Suggestion form closes | Data | |
| Fri, Sep 17, 2027 | 21 | Keynotes | Score candidates; pick first choice and backup | Data | |
| Fri, Sep 17, 2027 | 21 | CFP | Finalize CFP text; confirm RDR name and officers | Data, RDR | |
| Fri, Sep 24, 2027 | 20 | Keynotes | Invite first choices | Data | |
| Fri, Sep 24, 2027 | 20 | CFP | Online form, website section, CFP promo kit | Data, CE | |
| Fri, Oct 1, 2027 | 19 | CFP | **Release CFP**; Champions Ask 2 | Data, CE | |
| Fri, Oct 1, 2027 | 19 | Keynotes | Follow up; move to backup if needed | Data | |
| Mon, Oct 4, 2027 | 19 | Program | Open intern project and student poster call | Data | |
| TBD (Oct 2027) | ~18 | CFP | Promote at the Summit on Sustainability | Data | |
| Wed, Oct 27, 2027 | 16 | Planning | RDR Q4 update | Data, RDR | |
| Fri, Oct 29, 2027 | 15 | Registration | Free vs. paid; email list; registration promo kit | Events, Data, CE | |
| Mon, Nov 1, 2027 | 15 | CFP | Reminder email and Champion nudge | Data | |
| Tue, Nov 2, 2027 | 15 | Registration | **Open registration**; website; Champions Ask 4 | Events, CE | |
| Nov 2027 | ~14 | Planning | Internal team meeting | All | |
| Fri, Nov 12, 2027 | 13 | CFP | CFP closes | Data | |
| Fri, Nov 12, 2027 | 13 | Keynotes | **Both keynotes confirmed** | Data | |
| Mon, Nov 15–Fri, Dec 3, 2027 | 13–10 | CFP | Review and score proposals | Data, RDR | |
| Fri, Nov 19, 2027 | 12 | Keynotes | Bios, headshots, Keynotes page | Data, CE | |
| Fri, Nov 19, 2027 | 12 | Sponsors | Close active recruiting; Ask 3 ends | Data | |
| Fri, Dec 3, 2027 | 10 | Logistics | Venue confirmations (rooms, parking, catering, AV) | Events | |
| Fri, Dec 10, 2027 | 9 | CFP | Notify speakers | Data | |
| Fri, Dec 17, 2027 | 8 | CFP | Acceptances confirmed; waitlist backfill | Data | |
| Fri, Dec 17, 2027 | 8 | Champions | Facilitator cheat sheet and run-of-show | Data | |
| Fri, Jan 7, 2028 | 5 | Program | **Agenda final**; intern/poster submissions due | Data | |
| Fri, Jan 7, 2028 | 5 | Sponsors | Confirm sponsorships; collect logos | Events, Data | |
| Mon, Jan 10–Fri, Jan 14, 2028 | 5–4 | Champions | Ask 5: assign day-of roles | Data | |
| Fri, Jan 14, 2028 | 4 | Website | **Agenda live**; registration push 2 | CE, Data | |
| Fri, Jan 14, 2028 | 4 | Program | Intern Showcase and poster selections | Data | |
| Fri, Jan 14, 2028 | 4 | Sponsors | Invoice sponsors | Events | |
| Tue, Jan 18, 2028 | 4 | Keynotes | Final details; panel questions; slide request | Data | |
| Fri, Jan 21, 2028 | 3 | Sessions | Collect session slide decks | Data | |
| Fri, Jan 21, 2028 | 3 | Logistics | Finalize catering | Events | |
| Fri, Jan 21, 2028 | 3 | Survey | Draft 2028 survey | Data | |
| Wed, Jan 26, 2028 | 3 | Planning | RDR Q1 update (confirm date); internal team meeting | Data | |
| Fri, Jan 28, 2028 | 2 | Program | Program brochure to print | CE | |
| Mon, Jan 31, 2028 | 2 | Logistics | Order signage | CE | |
| Mon, Jan 31, 2028 | 2 | Registration | Push 3: last call | CE, Data | |
| Mon, Jan 31–Fri, Feb 4, 2028 | 2–1 | Champions | Facilitators connect with speakers | Champions, Data | |
| Fri, Feb 4, 2028 | 1 | Survey | Finalize survey and QR code | Data | |
| Sun, Feb 6, 2028 | 1 | Registration | Close registration | Events | |
| Fri, Feb 11, 2028 | 0 | Registration | Final attendee email | Events | |
| Fri, Feb 11, 2028 | 0 | Logistics | All event slides | CE, Data | |
| Tue, Feb 15, 2028 | 0 | Logistics | Laptops; day-of briefing; name tags | IT, Data, Events | |
| Wed, Feb 16, 2028 | 0 | Logistics | Final venue check | Events | |
| **Thu, Feb 17, 2028** | **0** | **Event** | **Data Day 2028** | All | |
| Fri, Feb 18, 2028 | −1 | Survey | Email attendee survey | Data | |
| Tue, Feb 22–Fri, Feb 25, 2028 | −1 | Recognition | Thank-yous; Champion recognition; Champion survey; recap post | Data, CE | |
| Thu, Feb 24, 2028 | −1 | Survey | Reminder | Data | |
| Fri, Mar 3, 2028 | −2 | Survey | Close surveys | Data | |
| Fri, Mar 17, 2028 | −4 | Evaluation | Results summary to RDR; ratings to speakers; invoices paid | Data, Events | |
| Wed, Mar 22, 2028 | −5 | Evaluation | Internal debrief | All | |
| Fri, Mar 24, 2028 | −5 | Repo | Archive 2028; update historical reference; roll plan to 2029 | Data | |
| Fri, Apr 28, 2028 | −10 | 2029 | Pick 2029 date and venue | Events, Data | |

---

## Appendix B. Shifting the schedule

If the event date changes, move every date by the same number of days, then fix weekends and
holidays. Default offsets from event day:

| Milestone | Offset |
|---|---|
| Kickoff | ~44 weeks before |
| Date and venue locked | ~40 weeks before |
| Champion kits for Asks 1–3 | ~28 weeks before |
| Theme locked | ~25 weeks before |
| Keynote invitations | ~20 weeks before |
| CFP open (six weeks) | ~19 weeks before |
| Registration open | ~15 weeks before |
| Keynotes confirmed | ~13 weeks before |
| Speakers notified | ~9 weeks before |
| Agenda live | ~5 weeks before |
| Registration closes | ~11 days before |
| Survey closes | ~2 weeks after |
| Debrief | ~5 weeks after |

> **Prompt (reschedule):** "The 2028 event moved to [date]. Shift every date in
> PROJECT_PLAN.md by the same offset, move anything that lands on a weekend or federal holiday
> to the nearest weekday, and update the weekday labels. List any task whose new date
> conflicts with another."

---

## Appendix C. Reusable assets from 2027

| Asset | Location | Roll forward by |
|---|---|---|
| Champions handout, FAQ, recruitment emails, sign-up form | `Champions/Recruitment/` | Update dates and theme |
| Keynote kit (criteria, form, intro template, request and reminder emails) | `Champions/Engagements/Keynotes/` | Update theme and dates; reset form |
| Sponsor intro template | `Champions/Engagements/Sponsors/` | Update tiers |
| Launch checklist | `Champions/launch_checklist.md` | Reset checkboxes; keep the phases |
| CFP, tagging model, formats | `Breakouts/` | Update theme, dates, tags |
| Program grid and venue details | `Logistics-Venue/` | Confirm rooms and times |
| Sponsorship brochure | `Sponsors/` | Update tiers and stats |
| Testimonials one-pager | `Marketing/` | Add 2027 quotes and stats |
| Design system (palette, logo, icons, brief) | `Design/` | Keep; add theme motif |
| Website | `docs/` | Copy; update content per Section 11 |
| PDF builder | `.claude/skills/create-pdf/` | Keep |
| Historical reference workbook | `Archive/` (local only) | Add 2027 and 2028 rows |
