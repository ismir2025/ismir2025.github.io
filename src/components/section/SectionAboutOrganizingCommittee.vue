<template>
  <v-row justify="center" id="organizing-committee">
    <v-col cols="12" md="8">
      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">General Chairs</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in GeneralChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3"
          >Scientific Program Chairs</v-card-title
        >

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in ProgramChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Tutorial Chairs</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in TutorialChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Publication Chair</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in PublicationChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">LBD Chairs</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in LBDChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Music Chair</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in MusicChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Industry Chairs</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in IndustryChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">DEI Chairs</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in DEIChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Sponsorship Chair</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in SponsorshipChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Virtual Chairs</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in VirtualChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Grant Chairs</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in GrantChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3"
          >Newcomer Initiative Chair</v-card-title
        >

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in NewcomerInitiativeChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Web Chair / Designer</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in WebChairDesignerChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3"
          >Local Organization Chairs</v-card-title
        >

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in LocalOrganizationChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Volunteer Chair</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in VolunteerChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Social Media Chair</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in SocialMediaChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>

      <v-card variant="text" elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3">Unconference Chair</v-card-title>

        <v-row justify="start" class="mt-4">
          <v-col
            cols="4"
            md="3"
            class="mb-4"
            v-for="person in UnconferenceChairs"
            :key="person.name"
          >
            <v-card variant="text" class="pa-3 text-center" max-width="600">
              <v-img
                :src="person.photo"
                :v-html="person.name"
                max-width="100%"
                height="200px"
                class="mb-2"
              />
              <div class="font-weight-bold">{{ person.name }}</div>
              <div class="text-subtitle-1" v-html="person.affiliation"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script setup>
//import anonymousPhoto from '@/assets/Chairs/fhd/anonymous.webp';
import AmyHung from "@/assets/Chairs/fhd/Amy_Hung.webp";
import HaoWenDong from "@/assets/Chairs/fhd/Hao-Wen.webp";
import HarinLee from "@/assets/Chairs/fhd/harin_lee.webp";
import HyungSeokChoi from "@/assets/Chairs/fhd/Hyeong-Seok_Choi.webp";
import JoonhyungBae from "@/assets/Chairs/fhd/Joonhyung Bae.webp";
import KosetsuTsukuda from "@/assets/Chairs/fhd/KosetsuTsukuda.webp";
import KyungmyunLee from "@/assets/Chairs/fhd/KyungMyun.webp";
import TaegyunKwon from "@/assets/Chairs/fhd/TaegyunKwon.webp";
import AkiraMaezawa from "@/assets/Chairs/fhd/maezawa-photo.webp";
import MagdalenaFuentes from "@/assets/Chairs/fhd/magdalena.webp";
import SeungheonDoh from "@/assets/Chairs/fhd/Seungheon_Doh.webp";
import TomoyasuNakano from "@/assets/Chairs/fhd/Tomoyasu.webp";
import Xiao_Hu from "@/assets/Chairs/fhd/Xiao_Hu.webp";
import YuWang from "@/assets/Chairs/fhd/Yu_Wang.webp";
import SeokJinLee from "@/assets/Chairs/fhd/SeokJinLee.webp";
import WeissChristof from "@/assets/Chairs/fhd/WeissChristof.webp";
import LiSu from "@/assets/Chairs/fhd/LiSu.webp";
import KeunwooChoi from "@/assets/Chairs/fhd/KeunwooChoi.webp";
import DasaemJeong from "@/assets/Chairs/fhd/DasaemJeong.webp";
import JuhanNam from "@/assets/Chairs/fhd/JuhanNam.webp";
import JeongChoi from "@/assets/Chairs/fhd/JeongChoi.webp";
import JaehunKim from "@/assets/Chairs/fhd/JaehunKim.webp";
import MinzWon from "@/assets/Chairs/fhd/MinzWon.webp";
import AliaMorsi from "@/assets/Chairs/fhd/AliaMorsi.webp";
import GabrielMeseguerBrocal from "@/assets/Chairs/fhd/GabrielMeseguerBrocal.webp";
import ChinYunYu from "@/assets/Chairs/fhd/Chin-Yun Yu.webp";
import MinseokChoi from "@/assets/Chairs/fhd/MinseokChoi.webp";
import JongminJung from "@/assets/Chairs/fhd/Jongmin_Jung.webp";
import jiyunPark from "@/assets/Chairs/fhd/jiyunPark.webp";
import EunjinChoi from "@/assets/Chairs/fhd/EunjinChoi.webp";
import GeoffroyPeeters from "@/assets/Chairs/fhd/GeoffroyPeeters.webp";
import SeinLee from "@/assets/Chairs/SeinLee.png";
import JongsooKim from "@/assets/Chairs/JongsooKim.png";
import HyunsooKim from "@/assets/Chairs/hyunsooKim.png";
import HayeonBang from "@/assets/Chairs/HayeonBang.png";
import DanbinaerinHan from "@/assets/Chairs/DanbinaerinHan.png";
import KirakKim from "@/assets/Chairs/kirakKim.png";

const GeneralChairs = [
  {
    name: "Juhan Nam",
    affiliation: "KAIST",
    photo: JuhanNam,
  },
  {
    name: "Dasaem Jeong",
    affiliation: "Sogang University",
    photo: DasaemJeong,
  },
  {
    name: "Keunwoo Choi",
    affiliation: "Gaudio Lab / KAIST",
    photo: KeunwooChoi,
  },
];

const ProgramChairs = [
  {
    name: "Li Su",
    affiliation: "Academia Sinica",
    photo: LiSu,
  },
  {
    name: "Xiao Hu",
    affiliation: "University of Arizona",
    photo: Xiao_Hu,
  },
  {
    name: "Magdalena Fuentes",
    affiliation: "NYU",
    photo: MagdalenaFuentes,
  },
  {
    name: "Tomoyasu Nakano",
    affiliation: "AIST",
    photo: TomoyasuNakano,
  },
];

const TutorialChairs = [
  {
    name: "HyungSeokChoi",
    affiliation: "ElevenLabs",
    photo: HyungSeokChoi,
  },
  {
    name: "Christof Weiß",
    affiliation: "University of Würzburg",
    photo: WeissChristof,
  },
];

const PublicationChairs = [
  {
    name: "Hao-Wen(Herman) Dong",
    affiliation: "University of Michigan",
    photo: HaoWenDong,
  },
];

const LBDChairs = [
  {
    name: "Kosetsu Tsukuda",
    affiliation: "AIST",
    photo: KosetsuTsukuda,
  },
  {
    name: "Amy Hung",
    affiliation: "Moises AI",
    photo: AmyHung,
  },
];

const MusicChairs = [
  {
    name: "Harin Lee",
    affiliation: "MPI",
    photo: HarinLee,
  },
  {
    name: "Gabriel Meseguer-Brocal",
    affiliation: "Deezer",
    photo: GabrielMeseguerBrocal,
  },
];

const IndustryChairs = [
  {
    name: "Jaehun Kim",
    affiliation: "Pandora / SiriusXM",
    photo: JaehunKim,
  },
  {
    name: "Akira Maezawa",
    affiliation: "Yamaha",
    photo: AkiraMaezawa,
  },
];

const DEIChairs = [
  {
    name: "Kyung Myun Lee",
    affiliation: "KAIST",
    photo: KyungmyunLee,
  },
  {
    name: "Taegyun Kwon",
    affiliation: "KAIST",
    photo: TaegyunKwon,
  },
];

const SponsorshipChairs = [
  {
    name: "Minz Won",
    affiliation: "Suno",
    photo: MinzWon,
  },
];

const VirtualChairs = [
  {
    name: "Jeong Choi",
    affiliation: "LINE Music",
    photo: JeongChoi,
  },
  {
    name: "Yu Wang",
    affiliation: "Spotify",
    photo: YuWang,
  },
  {
    name: "Chin-Yun Yu",
    affiliation: "Queen Mary University of London",
    photo: ChinYunYu,
  },
];

const GrantChairs = [
  {
    name: "Seokjin Lee",
    affiliation: "Kyungpook National University",
    photo: SeokJinLee,
  },
  {
    name: "Alia Morsi",
    affiliation: "UPF",
    photo: AliaMorsi,
  },
];

const NewcomerInitiativeChairs = [
  {
    name: "Seungheon Doh",
    affiliation: "KAIST",
    photo: SeungheonDoh,
  },
];

const WebChairDesignerChairs = [
  {
    name: "Joonhyung Bae",
    affiliation: "KAIST",
    photo: JoonhyungBae,
  },
];

const LocalOrganizationChairs = [
  {
    name: "Jiyun Park",
    affiliation: "KAIST, Korea",
    photo: jiyunPark,
  },
  {
    name: "Eunjin Choi",
    affiliation: "KAIST, Korea",
    photo: EunjinChoi,
  },
  {
    name: "Sein Lee",
    affiliation: "KAIST, Korea",
    photo: SeinLee,
  },
  {
    name: "Jongsoo Kim",
    affiliation: "KAIST, Korea",
    photo: JongsooKim,
  },
  {
    name: "Hounsu Kim",
    affiliation: "KAIST, Korea",
    photo: HyunsooKim,
  },
  {
    name: "Hayeon Bang",
    affiliation: "KAIST, Korea",
    photo: HayeonBang,
  },
  {
    name: "Danbinaerin Han",
    affiliation: "KAIST, Korea",
    photo: DanbinaerinHan,
  },
  {
    name: "Kirak Kim",
    affiliation: "KAIST, Korea",
    photo: KirakKim,
  },
];
const SocialMediaChairs = [
  {
    name: "Jongmin Jung",
    affiliation: "Neutune / Sogang University",
    photo: JongminJung,
  },
];

const VolunteerChairs = [
  {
    name: "Minsuk Choi",
    affiliation: "KAIST",
    photo: MinseokChoi,
  },
];

const UnconferenceChairs = [
  {
    name: "Geoffroy Peeters",
    affiliation: "Télécom Paris/ IP-Paris",
    photo: GeoffroyPeeters,
  },
];
</script>

<style scoped>
.logo-image {
  width: 100%;
  height: 100px;
  object-fit: contain;
}

.text-body {
  font-size: 18px;
  line-height: 1.6;
}
</style>
