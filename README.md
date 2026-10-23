# ISMIR 2025 Conference Website

Source code of the [ISMIR 2025](https://ismir2025.ismir.net/) website (Daejeon, Korea, September 2025).
It is a Vue 3 single-page application with Vuetify 3 and Vue Router 4, built with Vue CLI and served as a static site on GitHub Pages.

A technical report describing how the site was built, what pages were needed when, and recommendations for future web chairs is in preparation.

## Develop and deploy

```bash
npm install
npm run serve      # dev server (./start.sh runs it on port 4444)
npm run build      # production build in dist/
npm run deploy     # build and push dist/ to the gh-pages branch
```

No API keys or environment variables are needed.

## Layout

| Path | Contents |
|---|---|
| `src/router/index.js` | All routes. Path prefixes follow the menu: `/call-for-*`, `/program-*`, `/attend-*`, `/about-*`, `/satellite-*`, `/diversity-*` |
| `src/views/` | One thin view per page; each composes section components |
| `src/components/section/` | Page content (`SectionCallForPaper.vue`, `SectionVenue.vue`, `SectionProgramPage.vue`, ...) |
| `src/components/base/` | Shared building blocks (headings, cards, important-dates table) |
| `src/components/AppbarPage.vue`, `DrawerPage.vue`, `FooterPage.vue` | Navigation bar, mobile drawer, footer |
| `src/services/icsService.js` | iCalendar (`.ics`) export of the program |
| `src/data/sponsors.js` | Sponsor list |
| `public/AcceptedPapersWithAffiliationsFixed.json` | Accepted papers (ID, title, authors with affiliations) |
| `public/CNAME` | Custom domain |

## Reusing this site for another conference

Most content is written inline in the section components, so porting means editing files rather than swapping a config.
Strings tied to the year or location (`2025`, `Daejeon`, `KAIST`, `Korea`) appear in 49 of the 119 source files.

1. **Identity**: replace logos and cover images in `src/assets/`, colors in `src/styles/variables.scss` and the components that set them inline, and the domain in `public/CNAME`.
2. **Pages**: delete or rename routes in `src/router/index.js`, then update the links in `AppbarPage.vue`, `DrawerPage.vue`, and the home-page menu (`SectionMenuCover.vue`). These four must be kept in sync by hand.
3. **Content**: use `SectionCallForPaper.vue` as the template for new calls and event pages.
4. **Dates**: important dates appear in `SectionHomeAboutDates.vue` and in individual call pages; search for each date when it changes.
5. **Accepted papers**: replace the JSON file above (fields `Paper ID`, `Paper Title`, `Authors` as `Name (Affiliation);Name (Affiliation)`).
6. **Program**: replace the schedule data in `SectionProgramPage.vue` and the date and room mappings in `src/services/icsService.js`.

The most useful improvement for the next adopter would be to move pages, navigation, dates, and the program into data files so that they are defined once.

## License

Code: [MIT](LICENSE). Photographs, logos, and documents in `src/assets/` and `public/` are not covered by the license.
