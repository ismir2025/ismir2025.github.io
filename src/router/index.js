import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import CallForMusicPage from '../views/CallForMusicPage.vue';
import KoreanTraditionalMusicConcertPage from '../views/KoreanTraditionalMusicConcertPage.vue';

//import ProgramAtGlancePage from '../views/ProgramAtGlancePage.vue';
//import KeynotePresentationsPage from '../views/ProgramKeynotePresentationsPage.vue';
import ProgramTutorialsPage from '../views/ProgramTutorialsPage.vue';
import RenconPage from '../views/RenconPage.vue';
import HCMIR25Page from '../views/HCMIR25Page.vue';
import DLfM12thPage from '../views/DLfM12thPage.vue';
import LLM4MAPage from '../views/LLM4MAPage.vue';
import ProgramAcceptedPapersPage from '../views/ProgramAcceptedPapersPage.vue';
import ProgramPage from '../views/ProgramPage.vue';

import CallForPapersPage from '../views/CallForPapersPage.vue';
import CallForLateBreakingDemoPage from '../views/CallForLateBreakingDemoPage.vue';
import CallForTutorialsPage from '../views/CallForTutorialsPage.vue';
import CallForVolunteersPage from '../views/CallForVolunteersPage.vue';
import KeynotePage from '../views/KeynotePage.vue';
import AuthorGuidelinesPage from '../views/AuthorGuidelinesPage.vue';
import PresenterGuidelinesPage from '../views/PresenterGuidelinesPage.vue';
import DetailedSchedulePage from '../views/DetailedSchedulePage.vue';
import AccommodationPage from '../views/AccommodationPage.vue';
import RegistrationPage from '../views/RegistrationPage.vue';
import GrantPage from '../views/GrantPage.vue';
import SponsorshipOpportunitiesPage from '../views/SponsorshipOpportunitiesPage.vue';
import MeetTheSponsorsPage from '../views/MeetTheSponsorsPage.vue';
import CodeOfConductPage from '../views/CodeOfConduct.vue';
import VisaEntryGuidePage from '../views/VisaEntryGuide.vue';
import AttendVenuePage from '../views/AttendVenuePage.vue';
//import ImportantDatesPage from '../views/ImportantDatesPage.vue';

import AttendTransportationPage from '../views/AttendTransportationPage.vue';
import CampusMapPage from '../views/CampusMapPage.vue';

import OrganizingCommitteePage from '../views/OrganizingCommitteePage.vue';

import MentoringPage from '../views/MentoringPage.vue';
import NewcomerSquadPage from '../views/NewcomerSquadPage.vue';
//import AccessibilityPage from '../views/AccessibilityPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/organizing-committee',
    name: 'OrganizingCommitteePage',
    component: OrganizingCommitteePage,
  },
  
  {
    path: '/program-tutorials',
    name: 'ProgramTutorialsPage',
    component: ProgramTutorialsPage,
  },
  {
    path: '/rencon',
    name: 'RenconPage',
    component: RenconPage,
  },
  
  {
    path: '/cfp',
    name: 'cfp',
    component: CallForPapersPage,
  },
  
  {
    path: '/call-for-lbd',
    name: 'CallForLateBreakingDemoPage',
    component: CallForLateBreakingDemoPage,
  },
  
  {
    path: '/author-guidelines',
    name: 'author-guidelines',
    component: AuthorGuidelinesPage,
  },
  {
    path: '/presenter-guidelines',
    name: 'presenter-guidelines',
    component: PresenterGuidelinesPage,
  },
  {
    path: '/accommodation',
    name: 'AccommodationPage',
    component: AccommodationPage,
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: RegistrationPage,
  },
  {
    path: '/financial-support',
    name: 'GrantPage',
    component: GrantPage,
  },
  {
    path: '/call-for-tutorials',
    name: 'CallForTutorialsPage',
    component: CallForTutorialsPage,
  },
  {
    path: '/call-for-volunteers',
    name: 'CallForVolunteersPage',
    component: CallForVolunteersPage,
  },
  
  {
    path: '/HCMIR25Page',
    name: 'HCMIR25Page',
    component: HCMIR25Page,
  },
  {
    path: '/DLfM12thPage',
    name: 'DLfM12thPage',
    component: DLfM12thPage,
  },
  {
    path: '/LLM4MAPage',
    name: 'LLM4MAPage',
    component: LLM4MAPage,
  },
  {
    path: '/new-to-ismir-mentoring-program-2025',
    name: 'new-to-ismir-mentoring-program-2025',
    component: MentoringPage,
  },
  {
    path: '/newcomer-squad',
    name: 'NewcomerSquadPage',
    component: NewcomerSquadPage,
  },
  {
    path: '/sponsorship-opportunities',
    name: 'SponsorshipOpportunitiesPage',
    component: SponsorshipOpportunitiesPage,
  },
  {
    path: '/meet-the-sponsors',
    name: 'MeetTheSponsorsPage',
    component: MeetTheSponsorsPage,
  },
  {
    path: '/call-for-music',
    name: 'CallForMusicPage',
    component: CallForMusicPage,
  },
  {
    path: '/korean-traditional-music-concert',
    name: 'KoreanTraditionalMusicConcertPage',
    component: KoreanTraditionalMusicConcertPage,
  },
  
  {
    path: '/program',
    name: 'ProgramPage',
    component: ProgramPage,
  },
  {
    path: '/keynote',
    name: 'KeynotePage',
    component: KeynotePage,
  },
  {
    path: '/accepted-papers',
    name: 'ProgramAcceptedPapersPage',
    component: ProgramAcceptedPapersPage,
  },
  {
    path: '/detailed-schedule',
    name: 'DetailedSchedulePage',
    component: DetailedSchedulePage,
  },
  
  {
    path: '/code-of-conduct',
    name: 'CodeOfConductPage',
    component: CodeOfConductPage,
  },
  {
    path: '/visa-entry-guide',
    name: 'VisaEntryGuidePage',
    component: VisaEntryGuidePage,
  },
  {
    path: '/venue-page',
    name: 'VenuePage',
    component: AttendVenuePage,
  },
  {
    path: '/transportation-page',
    name: 'TransportationPage',
    component: AttendTransportationPage,
  },
  {
    path: '/campus-map',
    name: 'CampusMapPage',
    component: CampusMapPage,
  },
  
  /*
  {
    path: '/manuscript-accessibility',
    name: 'AccessibilityPage',
    component: AccessibilityPage,
  },
*/
  /*
  {
    path: '/venue-page',
    name: 'VenuePage',
    component: AttendVenuePage,
  },
  {
    path: '/accommodation-page',
    name: 'AccommodationPage',
    component: AttendAccommodationPage,
  },
  {
    path: '/important-dates',
    name: 'ImportantDatesPage',
    component: ImportantDatesPage,
  },
 

  {
    path: '/program-at-glance',
    name: 'ProgramAtGlancePage',
    component: ProgramAtGlancePage,
  },
  {
    path: '/keynote-presentations',
    name: 'KeynotePresentationsPage',
    component: KeynotePresentationsPage,
  },
  {
    path: '/accepted-papers',
    name: 'AcceptedPapersPage',
    component: AcceptedPapersPage,
  },
  {
    path: '/tutorials',
    name: 'TutorialsPage',
    component: TutorialsPage,
  },
  */
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
