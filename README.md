# README

## Features:

- Added validation to the form which triggers on submit event.
- Added a sticky form on desktop view.
- Added a id to form section to enable quickly navigate to form on get started button click.

## Decisions and Assumptions made:

- Few Company logos in Top Partners and Top Clients do not have svg format in adobe design file. So used some duplicate logos to avoid irregular styling because of different image formats.
- Used Breakpoints according to the data from https://learn.microsoft.com/en-us/windows/apps/design/layout/screen-sizes-and-breakpoints-for-responsive-design
- When generating a lighthouse report, using a incognito tab helps measure better - by lighthouse
- Nextjs Image does not optimize SVGs, as I have used SVGs instead of other formats, they will not be converted to webp, so lighthouse might show performance degrade.
