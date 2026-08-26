# Data Day 2027 Champions: Sign-Up Form (BUILD SPEC)

**Live form:** <https://forms.cloud.microsoft/r/7cFXhbQeMc>

> **Status:** the form is **built and live** at the link above. This doc is the source of
> truth for its content and settings. Edit here, then update the live form to match. The
> link is wired into the `[sign-up link]` placeholders in
> [`ways_to_help.md`](ways_to_help.md) and [`faq.md`](faq.md).
> **Purpose:** capture who wants to be a Champion and which of the five ways to help
> they're interested in, so staff can follow up with details and timing for each.
> **Boundary:** signing up is opt-in and non-binding: Champions can take on as many or
> as few ways to help as they like, and can step back anytime.

---

## Form-level settings

- **Title:** Become a Data Day 2027 Champion
- **Description (shown under the title):**
  > Data Day brings together Central Ohio's data community (across local governments,
  > nonprofits, educational institutions, and civic-minded businesses) to advance how
  > our region uses data. As a Champion, you help make our fifth annual event
  > (Thursday, February 18, 2027) happen at a few key moments through the year, in the
  > ways that fit you best. It's light, opt-in, and you choose what you take on. There's
  > no committee and no recurring meetings. Tell us a little about you and which ways
  > you'd like to help, and we'll follow up with the details and timing for each. Takes
  > about 2 minutes.
- **Settings to enable:**
  - *Record name*: if shared inside the MORPC/partner tenant, turn on "Record name" so
    responses carry the respondent's identity. Q1–Q3 below still collect name, org, and
    email explicitly so the data lands cleanly in the roster regardless of tenant.
  - *Who can respond:* **Anyone can respond** (the link will be shared in recruitment
    emails and may reach people outside the tenant).
  - *One response per person:* off.
  - *Accept responses:* on through at least **early February 2027** (sign-ups are useful
    all cycle; day-of roles are still being filled in January).
  - *Shuffle questions:* off.
  - *Email receipt:* allow respondents to receive a copy of their response (optional).

---

## Questions

> Keep it short: six questions, four required. Question types in **[brackets]**.

**Q1. Your name** *[Short answer]* *(Required)*

**Q2. Your organization** *[Short answer]* *(Required)*
Help text: *Where you work or the community you're part of.*

**Q3. Your email** *[Short answer]* *(Required)*
Help text: *So we can follow up with details and timing.*
*(In Microsoft Forms, set this question's restriction to "Email" so the address validates.)*

**Q4. Phone (optional)** *[Short answer]* *(Optional)*
Help text: *Only if you'd prefer we reach you by phone for anything time-sensitive.*

**Q5. Which ways would you like to help?** *[Choice: checkboxes, multiple allowed]* *(Required)*
Help text: *Pick as many or as few as you like. Each one is a specific, time-bound opportunity, and we'll share what you need before anything's due. Not sure yet? Check "I'm interested: help me find the right fit."*
Options:
- **Connect us with potential keynote speakers** (Aug–Oct): suggest names and open doors where you have a relationship.
- **Share the Call for Proposals and recruit speakers** (late Sep–early Nov): spread the CFP and nudge strong presenters to submit.
- **Help solicit sponsors** (Sep–Nov): suggest organizations and make warm introductions; staff handle the package and the ask.
- **Encourage registration** (Nov–late Jan): invite your network and colleagues once registration opens.
- **Take a day-of role** (Feb 18): session facilitator, workshop session assistant, greeter, or social/photo.
- **I'm interested: help me find the right fit.**

**Q6. Anything else you'd like us to know?** *[Long answer]* *(Optional)*
Help text: *Questions, a way to help we didn't list, or anything else. Optional.*

---

## Confirmation message (shown after submit)

> Thank you for stepping up. You're on the Data Day 2027 Champions list. We'll follow up
> with the details and timing for the ways you chose, and you can always take on more or
> less as the year goes on. Questions anytime: Jordan Inskeep, jinskeep@morpc.org.
> Thank you for helping us make year five the best one yet.

---

## Notes for staff

- **Roster:** responses map directly to [`champions-roster.csv`](champions-roster.csv)
  (name, organization, email, phone). Record the sign-up date as `responsedate`; use
  `notes` to capture the ways-to-help selections and anything from Q6.
- **Follow-up:** signing up is interest, not assignment. Reach out per ask when its
  resource kit is ready (the kit-before-ask gate) and the timing window opens. Don't
  send an ask before its kit exists.
- **Sponsors:** treated like any other ask: listed openly and activated the same way.
  The universal Champions boundary still applies (as it does to every ask): Champions make
  introductions only; staff own the package, pricing, ask, and invoicing, and handle any
  Champion's-own-employer cases. A shared contact log is still good practice to avoid two
  Champions surfacing the same lead.
- **Coverage:** cross-reference sign-ups against the critical-path coverage rule in the
  [launch checklist](../launch_checklist.md): every high-stakes ask still needs a named
  staff fallback even where Champions volunteer.
- **Link hygiene:** once the form is live, paste its URL above and replace the
  `[sign-up link]` placeholder in `ways_to_help.md` and `faq.md` so all three stay in sync.
</content>
