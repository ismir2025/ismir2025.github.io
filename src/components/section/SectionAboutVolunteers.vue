<template>
  <v-row justify="center" id="volunteers">
    <v-col cols="12" md="10">
      
      <!-- ===================== Header Section ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold text-center">
          ISMIR 2025 Volunteers
          </v-card-title>
        <v-card-text class="text-body text-center mb-4">
          Meet our dedicated volunteers who are helping to make ISMIR 2025 a success. 
          Our volunteer team consists of passionate researchers, students, and professionals 
          from the Music Information Retrieval community around the world.
        </v-card-text>
      </v-card>

      <!-- ===================== Volunteers Grid ===================== -->
      <v-row>
        <!-- Volunteer Card for each person -->
        <v-col 
          v-for="volunteer in volunteers" 
          :key="volunteer.name"
          cols="12" 
          sm="6" 
          md="4" 
          lg="3"
        >
          <v-card 
            class="volunteer-card mx-auto" 
            elevation="2"
            height="100%"
          >
            <!-- Profile Image -->
            <div class="volunteer-image-container">
            <v-img
                :src="volunteer.image"
                :alt="volunteer.name + ' Profile Picture'"
                class="volunteer-image"
                cover
              >
                <template v-slot:error>
                  <div class="volunteer-image-placeholder">
                    <v-icon size="64" color="grey">mdi-account-circle</v-icon>
          </div>
                </template>
              </v-img>
          </div>

            <!-- Volunteer Info -->
            <v-card-title class="volunteer-name text-h6 font-weight-bold">
              {{ volunteer.name }}
            </v-card-title>

            <v-card-text class="volunteer-bio">
              <p class="text-body-2">{{ volunteer.bio }}</p>
            </v-card-text>

            <!-- Personal URL Button -->
            <v-card-actions v-if="volunteer.url" class="pa-3">
              <v-btn
                :href="volunteer.url"
                target="_blank"
                color="primary"
                variant="outlined"
                size="small"
                block
              >
                <v-icon left size="small">mdi-web</v-icon>
                Visit Profile
              </v-btn>
            </v-card-actions>
          </v-card>
              </v-col>
            </v-row>

      <!-- ===================== Thank You Section ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-6" style="background-color: #f8f9fa">
        <v-card-title class="text-h5 mb-3 font-weight-bold text-center">
          Thank You to Our Volunteers!
        </v-card-title>
        <v-card-text class="text-body text-center">
          We are incredibly grateful to all our volunteers for their dedication and hard work. 
          Their contributions are essential to the success of ISMIR 2025, and we couldn't do it without them.
          If you're interested in volunteering for future ISMIR conferences, please stay connected with the ISMIR community.
        </v-card-text>
      </v-card>

      <br /><br />
    </v-col>
  </v-row>
</template>

<script>
// Import volunteer images
import HaesunJoungImg from '@/assets/Volunteers/Haeseon_Jung.png'
import MichaelXieImg from '@/assets/Volunteers/Michael_Xie.png'
import BaotongTianImg from '@/assets/Volunteers/Baotong_Tian.png'
import AnonymousImg from '@/assets/Volunteers/anonymous.png'
import MichaellaMoonImg from '@/assets/Volunteers/Michaella_Moon.png'
import AhnEekgyunImg from '@/assets/Volunteers/EK_Ahn.png'
import RobieGonzalesImg from '@/assets/Volunteers/Robie_Gonzales.png'
import LuisaLuImg from '@/assets/Volunteers/Luisa_Lu.png'
import ThiagoMartinPoppeImg from '@/assets/Volunteers/Thiago_Martin_Poppe.png'
import JingweiZhaoImg from '@/assets/Volunteers/Jingwei_Zhao.png'
import MeilinLyuImg from '@/assets/Volunteers/Meilin_Lyu.png'
import HyeyoonChoImg from '@/assets/Volunteers/Hyeyoon_Cho.png'
import ZhengXunImg from '@/assets/Volunteers/ZX.png'
import KihongKimImg from '@/assets/Volunteers/KiHong_Kim.png'
import YujinKimImg from '@/assets/Volunteers/Yujin_Kim.png'
import PedroRamonedaImg from '@/assets/Volunteers/Pedro_Ramoneda_Franco.png'
import ChristosPlachourasImg from '@/assets/Volunteers/Christos_Plachouras.png'

export default {
  data() {
    return {
      volunteers: [
        {
          name: "Haesun Joung",
          bio: "I am a PhD candidate in Music Information Retrieval at Seoul National University. With a background in Composition, Musicology, and Computer Science, my current research focuses on Musical Instrument Retrieval, Music Tagging, Music Captioning, and Audio Reasoning. In my free time, I enjoy singing and playing instruments such as piano and various guitars, so feel free to come and chat with me anytime! :)",
          image: HaesunJoungImg,
          url: "https://haesun.kr"
        },
        {
          name: "Michael Xie",
          bio: "Hi, I'm Michael, currently a master's student in Music Technology at New York University, where I also completed my bachelor's degree earlier this year. These days, I'm mostly diving into instrument performance analysis, also curious about music source separation and other cool aspects of MIR. Outside of research, I enjoy playing electric guitar, bass, and piano, as well as playing with VOCALOID or singing voice synthesis.",
          image: MichaelXieImg,
          url: "https://www.linkedin.com/in/michael-xie-501a63260"
        },
        {
          name: "Baotong Tian",
          bio: "I am a second-year Ph.D. student at the University of Rochester, USA. My research interests are on music information retrieval and speech processing. In my free time, I enjoy playing the guitar, composing, and producing music.",
          image: BaotongTianImg,
          url: "https://user-tian.github.io/"
        },
        {
          name: "Rui Yang",
          bio: "I am a PhD student in the Algomus team (CRIStAL, University of Lille), focusing on modelling and semi-automatic arrangement for ensemble practice. I am interested in human–computer interaction in arrangement, as well as the educational and cultural dimensions of MIR. As a side project, I also study jianpu (numbered musical notation) and its potential in music encoding. If you are interested in collaboration, feel free to contact me!",
          image: AnonymousImg,
          url: "https://www.linkedin.com/in/rui-yang-410841225/"
        },
        {
          name: "Michaella Jung-Hyun Moon",
          bio: "Michaella Jung-hyun Moon (BMUS @UBC; MFA @CalArts) is a PhD candidate in Engineering at Victoria University of Wellington (New Zealand). Her research explores the intersection of music performance, education, and technology, developing human-centred systems that detect and analyse acoustic and physical aspects of Gugak performance to support culturally grounded, interactive learning for novice players.",
          image: MichaellaMoonImg,
          url: "https://www.linkedin.com/in/michaella-moon"
        },
        {
          name: "Ahn Eekgyun",
          bio: "Hello! I'm Ahn EekGyun, an undergraduate student at Chung-Ang University. I'm currently planning to study Music/Audio AI in graduate school. My goal is to help artists through research in \"Music Generation\" and contribute to expanding the world of cultural arts. I'm interested in topics like 1)Source Separation with Generative AI, 2)Controllable Generation, and 3)Metrics for Assessing Musicality. I was born and raised in Daejeon, so if you need a local guide or recommendations, feel free to reach out anytime!",
          image: AhnEekgyunImg,
          url: "https://www.linkedin.com/in/eekgyun-ahn-44ba4b2b1"
        },
        {
          name: "Robie Gonzales",
          bio: "I'm a first year PhD student at Dalhousie University working with Marta Kryven. I'm interested in the intersection of cognitive science, music cognition, and AI, developing computational models of how humans acquire and use musical knowledge.",
          image: RobieGonzalesImg,
          url: "https://www.robie.ca/"
        },
        {
          name: "Luisa Lopes Carvalhaes",
          bio: "I am a third-year Computer Science undergraduate at Universidade Federal de Minas Gerais (UFMG), Brazil. I have been active in the Music Information Retrieval (MIR) field for about two years, working on automatic Roman Numeral Analysis transcription from audio—research recently accepted for presentation at DLfM 2025. I am also part of the MOSAIC research group and the RAIA project (in partnership with USP) on automatic alignment in music. Passionate about music and AI, I am excited to attend ISMIR for the first time.",
          image: LuisaLuImg,
          url: "https://www.linkedin.com/in/luisa-lopes-carvalhaes/"
        },
        {
          name: "Thiago Martin Poppe",
          bio: "I hold a Bachelor's degree in Computer Science from Universidade Federal de Minas Gerais (UFMG), Brazil, where I am currently pursuing my Master's. For the past three years, I have been working in the field of Music Information Retrieval (MIR), focusing on the application of artificial intelligence to harmonic analysis, particularly automatic Roman Numeral Analysis transcription from audio—research recently accepted for presentation at DLfM 2025. I am also part of the MOSAIC research group. My passion for music began at the age of 14, when I started exploring different instruments and their unique characteristics. With this background, I am excited to attend ISMIR for the first time.",
          image: ThiagoMartinPoppeImg,
          url: "https://www.linkedin.com/in/thiago-martin-poppe-79516b1a1/"
        },
        {
          name: "Jingwei Zhao",
          bio: "I'm a PhD candidate from NUS, currently interning at Yamaha Corporation. My research focuses on generative AI for music, especially arrangement, with the goal of enhancing human–AI collaboration in music creation. Outside of research, I enjoy J-Pop, cycling, and playing the accordion.",
          image: JingweiZhaoImg,
          url: "https://zhaojw1998.github.io/"
        },
        {
          name: "Meilin Lyu",
          bio: "Hi everyone, my name is Meilin Lyu, and I have just graduated from the MSc Statistics program at Imperial College. My thesis was on developing a general framework for adding probabilistic control at inference time to pretrained symbolic generative models via Sequential Monte Carlo methods. I am passionate about interactive music systems and hope to discover future career directions by attending this year's conference.",
          image: MeilinLyuImg,
          url: "https://www.linkedin.com/in/lyumeilin/"
        },
        {
          name: "Hyeyoon Cho",
          bio: "Hyeyoon holds a Master of Science from KAIST, where she is now a researcher at the Culture Technology Research Institute. Her research focuses on quantifying piano performance, with interests in computational musicology and multimodal analysis.",
          image: HyeyoonChoImg,
          url: null
        },
        {
          name: "Ng Zheng Xun",
          bio: "Zheng Xun is an Audio/Music AI researcher, pianist, and music producer based in Singapore. With a deep interest in MIR, he previously worked on Performance MIDI to Musical Score conversion at KAIST's MACLab, and is excited to attend ISMIR 2025!",
          image: ZhengXunImg,
          url: "https://www.linkedin.com/in/zheng-xun-ng/"
        },
        {
          name: "Yerim Gim",
          bio: "Yerim is a PhD student in musicology at Seoul National University. Her research explores the phenomena caused by the integration of emerging technologies into 20th and 21st-century music. She aims to expand her research into AI music to better understand technology's influence on contemporary music.",
          image: AnonymousImg,
          url: "https://www.linkedin.com/in/yerim-gim-36b7782b5"
        },
        {
          name: "Kihong Kim",
          bio: "I recently graduated with a bachelor's degree in Mathematics from Kyungpook National University. My research interests include audio effects and shaker controllers using hand detection, and I also enjoy audio programming for real-time audio applications.",
          image: KihongKimImg,
          url: "https://www.linkedin.com/in/kihong-kim-859823236/"
        },
        {
          name: "Yujin Kim",
          bio: "I am a Master's student in Music Technology at NYU. My research interest is in MIR, Signal Processing, and Spatial Audio. I am excited to be part of MIR community!",
          image: YujinKimImg,
          url: null
        },
        {
          name: "Pedro Ramoneda",
          bio: "Pedro Ramoneda is a researcher in Music Technology at the Music Technology Group, Universitat Pompeu Fabra. His work focuses on three main directions: automatic estimation of musical difficulty, representation learning for music, and the design of generative models that are usable for students and teachers in music education. He is also interested in broader topics related to music analysis, performance, and learning support.",
          image: PedroRamonedaImg,
          url: "https://pramoneda.github.io"
        },
        {
          name: "Christos Plachouras",
          bio: "Hi! I'm a researcher and musician, currently doing a PhD at Queen Mary University of London. These days I'm particularly interested in music audio language models and audio representation learning & evaluation.",
          image: ChristosPlachourasImg,
          url: "https://chrispla.me"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* ===================== Volunteer Card Styles ===================== */
.volunteer-card {
  max-width: 320px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.volunteer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
}

.volunteer-image-container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 16px;
  box-sizing: border-box;
}

.volunteer-image {
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.volunteer-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.volunteer-name {
  color: #004191 !important;
  font-size: 1.1rem !important;
  line-height: 1.3;
  padding: 16px 16px 8px 16px !important;
  white-space: normal;
  overflow-wrap: break-word;
}

.volunteer-bio {
  flex-grow: 1;
  padding: 0 16px 16px 16px !important;
}

.volunteer-bio p {
  line-height: 1.5;
  color: #555;
  font-size: 0.9rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ===================== General Styles ===================== */
.text-body {
  font-size: 18px;
  line-height: 1.6;
  white-space: normal;
  overflow-wrap: break-word;
}

.v-card-title {
  white-space: normal;
  overflow-wrap: break-word;
}

/* ===================== Responsive Design ===================== */
@media (max-width: 960px) {
  .volunteer-card {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .volunteer-name {
    font-size: 1rem !important;
  }
  
  .volunteer-bio p {
    font-size: 0.85rem;
    -webkit-line-clamp: 5;
    line-clamp: 5;
  }
}

/* ===================== Button Styles ===================== */
.v-btn {
  text-transform: none !important;
}

/* ===================== Grid Layout ===================== */
.v-row {
  margin: 0 -12px;
}

.v-col {
  padding: 12px;
}

/* ===================== Header Section ===================== */
.v-card-title.text-h4 {
  color: #004191 !important;
}

.v-card-title.text-h5 {
  color: #004191 !important;
}
</style>