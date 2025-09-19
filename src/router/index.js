import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import CallForMusicPage from '../views/CallForMusicPage.vue';
import KoreanTraditionalMusicConcertPage from '../views/KoreanTraditionalMusicConcertPage.vue';
import ProgramMusic from '../views/ProgramMusic.vue';
import ProgramKCultureNight from '../views/ProgramKCultureNight.vue';
import ProgramSpecialSessionPage from '../views/ProgramSpecialSessionPage.vue';

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
import KeynotePage from '../views/ProgramKeynotePage.vue';
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

import AttendTransportationPage from '../views/AttendTransportationPage.vue';
import AirportToDaejeonPage from '../views/AirportToDaejeonPage.vue';
import LocalTransportationPage from '../views/LocalTransportationPage.vue';
import CampusMapPage from '../views/CampusMapPage.vue';

import OrganizingCommitteePage from '../views/AboutOrganizingCommitteePage.vue';
import AboutVolunteersPage from '../views/AboutVolunteersPage.vue';

import MentoringPage from '../views/MentoringPage.vue';
import NewcomerSquadPage from '../views/NewcomerSquadPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about-organizing-committee',
    name: 'about-organizing-committee',
    component: OrganizingCommitteePage,
  },
  {
    path: '/about-volunteers',
    name: 'about-volunteers',
    component: AboutVolunteersPage,
  },
  
  {
    path: '/program-tutorials',
    name: 'program-tutorials',
    component: ProgramTutorialsPage,
  },
  {
    path: '/program-rencon',
    name: 'program-rencon',
    component: RenconPage,
  },
  
  {
    path: '/call-for-papers',
    name: 'call-for-papers',
    component: CallForPapersPage,
  },
  
  {
    path: '/call-for-late-breaking-demo',
    name: 'call-for-late-breaking-demo',
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
    path: '/attend-accommodation',
    name: 'attend-accommodation',
    component: AccommodationPage,
  },
  {
    path: '/attend-registration',
    name: 'attend-registration',
    component: RegistrationPage,
  },
  {
    path: '/attend-financial-support',
    name: 'attend-financial-support',
    component: GrantPage,
  },
  {
    path: '/call-for-tutorials',
    name: 'call-for-tutorials',
    component: CallForTutorialsPage,
  },
  {
    path: '/call-for-volunteers',
    name: 'call-for-volunteers',
    component: CallForVolunteersPage,
  },
  
  {
    path: '/satellite-hcmir25',
    name: 'satellite-hcmir',
    component: HCMIR25Page,
  },
  {
    path: '/satellite-dlfm12th',
    name: 'satellite-dlfm',
    component: DLfM12thPage,
  },
  {
    path: '/satellite-llm4ma',
    name: 'satellite-llm4ma',
    component: LLM4MAPage,
  },
  {
    path: '/diversity-mentoring',
    name: 'diversity-mentoring',
    component: MentoringPage,
  },
  {
    path: '/diversity-newcomer-squad',
    name: 'diversity-newcomer-squad',
    component: NewcomerSquadPage,
  },
  {
    path: '/sponsorship-opportunities',
    name: 'sponsor-opportunities',
    component: SponsorshipOpportunitiesPage,
  },
  {
    path: '/meet-the-sponsors',
    name: 'sponsor-meet',
    component: MeetTheSponsorsPage,
  },
  {
    path: '/call-for-music',
    name: 'call-for-music',
    component: CallForMusicPage,
  },
  {
    path: '/program-baraji-concert',
    name: 'program-baraji-concert',
    component: KoreanTraditionalMusicConcertPage,
  },
  {
    path: '/program-music',
    name: 'program-music',
    component: ProgramMusic,
  },
  {
    path: '/program-kculture-night',
    name: 'program-kculture-night',
    component: ProgramKCultureNight,
  },
  {
    path: '/program-special-session',
    name: 'program-special-session',
    component: ProgramSpecialSessionPage,
  },
  
  {
    path: '/program',
    name: 'program-overview',
    component: ProgramPage,
  },
  {
    path: '/program-keynote',
    name: 'program-keynote',
    component: KeynotePage,
  },
  {
    path: '/program-accepted-papers',
    name: 'program-accepted-papers',
    component: ProgramAcceptedPapersPage,
  },
  {
    path: '/program-detailed-schedule',
    name: 'program-detailed-schedule',
    component: DetailedSchedulePage,
  },
  
  {
    path: '/attend-code-of-conduct',
    name: 'attend-code-of-conduct',
    component: CodeOfConductPage,
  },
  {
    path: '/attend-visa-entry-guide',
    name: 'attend-visa-guide',
    component: VisaEntryGuidePage,
  },
  {
    path: '/attend-venue',
    name: 'attend-venue',
    component: AttendVenuePage,
  },
  {
    path: '/attend-transportation',
    name: 'attend-transportation',
    component: AttendTransportationPage,
  },
  {
    path: '/attend-airport-to-daejeon',
    name: 'attend-airport-to-daejeon',
    component: AirportToDaejeonPage,
  },
  {
    path: '/attend-local-transportation',
    name: 'attend-local-transportation',
    component: LocalTransportationPage,
  },
  {
    path: '/attend-campus-map',
    name: 'attend-campus-map',
    component: CampusMapPage,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
