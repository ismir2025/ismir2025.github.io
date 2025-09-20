<template>
  <v-row justify="center" id="volunteers">
    <v-col cols="12" md="10">
      <!-- ===================== Header Section ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold text-center">
          ISMIR 2025 Volunteers
        </v-card-title>
        <v-card-text class="text-body text-center mb-4">
          Meet our dedicated volunteers who are helping to make ISMIR 2025 a
          success. Our volunteer team consists of passionate researchers,
          students, and professionals from the Music Information Retrieval
          community around the world.
        </v-card-text>
      </v-card>

      <!-- ===================== Volunteers Grid ===================== -->
      <v-row>
        <!-- Volunteer Card for each person -->
        <v-col v-for="volunteer in volunteers" :key="volunteer.name" cols="2">
          <v-card class="volunteer-card" elevation="2" height="100%">
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

      <!-- ===================== Local Volunteers Section ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-6">
        <v-card-title
          class="text-h4 mb-3 font-weight-bold text-center local-volunteer-title"
        >
          Local Volunteers
        </v-card-title>
        <v-card-text class="text-body text-center mb-4">
          We also appreciate our local volunteers from Korean universities who
          are supporting ISMIR 2025.
        </v-card-text>
      </v-card>

      <!-- Local Volunteers Grid -->
      <v-row>
        <v-col
          v-for="localVolunteer in localVolunteers"
          :key="localVolunteer.name"
          cols="3"
        >
          <v-card class="local-volunteer-card" elevation="1" height="100%">
            <!-- Local Volunteer Info -->
            <v-card-title
              class="local-volunteer-name text-body-1 font-weight-bold"
            >
              {{ localVolunteer.name }}
            </v-card-title>

            <v-card-text class="local-volunteer-bio">
              <p class="text-body-2">{{ localVolunteer.bio }}</p>
            </v-card-text>

            <!-- Personal URL Button -->
            <v-card-actions v-if="localVolunteer.url" class="pa-3">
              <v-btn
                :href="localVolunteer.url"
                target="_blank"
                color="primary"
                variant="outlined"
                size="x-small"
                block
              >
                <v-icon left size="small">mdi-web</v-icon>
                Profile
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- ===================== Thank You Section ===================== -->
      <v-card
        outlined
        elevation="0"
        class="pa-4 my-6"
        style="background-color: #f8f9fa"
      >
        <v-card-title class="text-h5 mb-3 font-weight-bold text-center">
          Thank You to Our Volunteers!
        </v-card-title>
        <v-card-text class="text-body text-center">
          We are incredibly grateful to all our volunteers for their dedication
          and hard work. Their contributions are essential to the success of
          ISMIR 2025, and we couldn't do it without them. If you're interested
          in volunteering for future ISMIR conferences, please stay connected
          with the ISMIR community.
        </v-card-text>
      </v-card>

      <br /><br />
    </v-col>
  </v-row>
</template>

<script>
// Import volunteer images
import HaesunJoungImg from "@/assets/Volunteers/Haeseon_Jung.png";
import MichaelXieImg from "@/assets/Volunteers/Michael_Xie.png";
import BaotongTianImg from "@/assets/Volunteers/Baotong_Tian.png";
import AnonymousImg from "@/assets/Volunteers/anonymous.png";
import MichaellaMoonImg from "@/assets/Volunteers/Michaella_Moon.png";
import AhnEekgyunImg from "@/assets/Volunteers/EK_Ahn.png";
import RobieGonzalesImg from "@/assets/Volunteers/Robie_Gonzales.png";
import LuisaLuImg from "@/assets/Volunteers/Luisa_Lu.png";
import ThiagoMartinPoppeImg from "@/assets/Volunteers/Thiago_Martin_Poppe.png";
import JingweiZhaoImg from "@/assets/Volunteers/Jingwei_Zhao.png";
import MeilinLyuImg from "@/assets/Volunteers/Meilin_Lyu.png";
import HyeyoonChoImg from "@/assets/Volunteers/Hyeyoon_Cho.png";
import ZhengXunImg from "@/assets/Volunteers/ZX.png";
import KihongKimImg from "@/assets/Volunteers/KiHong_Kim.png";
import YujinKimImg from "@/assets/Volunteers/Yujin_Kim.png";
import PedroRamonedaImg from "@/assets/Volunteers/Pedro_Ramoneda_Franco.png";
import ChristosPlachourasImg from "@/assets/Volunteers/Christos_Plachouras.png";

export default {
  data() {
    return {
      volunteers: [
        {
          name: "Eekgyun, Ahn",
          bio: "Hello! I'm Ahn EekGyun, an undergraduate student at Chung-Ang University. I'm currently planning to study Music/Audio AI in graduate school. My goal is to help artists through research in \"Music Generation\" and contribute to expanding the world of cultural arts. I'm interested in topics like 1)Source Separation with Generative AI, 2)Controllable Generation, and 3)Metrics for Assessing Musicality. I was born and raised in Daejeon, so if you need a local guide or recommendations, feel free to reach out anytime!",
          image: AhnEekgyunImg,
          url: "https://www.linkedin.com/in/eekgyun-ahn-44ba4b2b1",
        },
        {
          name: "Luisa Lopes, Carvalhaes",
          bio: "I am a third-year Computer Science undergraduate at Universidade Federal de Minas Gerais (UFMG), Brazil. I have been active in the Music Information Retrieval (MIR) field for about two years, working on automatic Roman Numeral Analysis transcription from audio—research recently accepted for presentation at DLfM 2025. I am also part of the MOSAIC research group and the RAIA project (in partnership with USP) on automatic alignment in music. Passionate about music and AI, I am excited to attend ISMIR for the first time.",
          image: LuisaLuImg,
          url: "https://www.linkedin.com/in/luisa-lopes-carvalhaes/",
        },
        {
          name: "Hyeyoon, Cho",
          bio: "Hyeyoon holds a Master of Science from KAIST, where she is now a researcher at the Culture Technology Research Institute. Her research focuses on quantifying piano performance, with interests in computational musicology and multimodal analysis.",
          image: HyeyoonChoImg,
          url: null,
        },
        {
          name: "Yerim, Gim",
          bio: "Yerim is a PhD student in musicology at Seoul National University. Her research explores the phenomena caused by the integration of emerging technologies into 20th and 21st-century music. She aims to expand her research into AI music to better understand technology's influence on contemporary music.",
          image: AnonymousImg,
          url: "https://www.linkedin.com/in/yerim-gim-36b7782b5",
        },
        {
          name: "Robie, Gonzales",
          bio: "I'm a first year PhD student at Dalhousie University working with Marta Kryven. I'm interested in the intersection of cognitive science, music cognition, and AI, developing computational models of how humans acquire and use musical knowledge.",
          image: RobieGonzalesImg,
          url: "https://www.robie.ca/",
        },
        {
          name: "Haesun, Joung",
          bio: "I am a PhD candidate in Music Information Retrieval at Seoul National University. With a background in Composition, Musicology, and Computer Science, my current research focuses on Musical Instrument Retrieval, Music Tagging, Music Captioning, and Audio Reasoning. In my free time, I enjoy singing and playing instruments such as piano and various guitars, so feel free to come and chat with me anytime! :)",
          image: HaesunJoungImg,
          url: "https://haesun.kr",
        },
        {
          name: "Kihong, Kim",
          bio: "I recently graduated with a bachelor's degree in Mathematics from Kyungpook National University. My research interests include audio effects and shaker controllers using hand detection, and I also enjoy audio programming for real-time audio applications.",
          image: KihongKimImg,
          url: "https://www.linkedin.com/in/kihong-kim-859823236/",
        },
        {
          name: "Yujin, Kim",
          bio: "I am a Master's student in Music Technology at NYU. My research interest is in MIR, Signal Processing, and Spatial Audio. I am excited to be part of MIR community!",
          image: YujinKimImg,
          url: null,
        },
        {
          name: "Meilin, Lyu",
          bio: "Hi everyone, my name is Meilin Lyu, and I have just graduated from the MSc Statistics program at Imperial College. My thesis was on developing a general framework for adding probabilistic control at inference time to pretrained symbolic generative models via Sequential Monte Carlo methods. I am passionate about interactive music systems and hope to discover future career directions by attending this year's conference.",
          image: MeilinLyuImg,
          url: "https://www.linkedin.com/in/lyumeilin/",
        },
        {
          name: "Michaella Jung-Hyun, Moon",
          bio: "Michaella Jung-hyun Moon (BMUS @UBC; MFA @CalArts) is a PhD candidate in Engineering at Victoria University of Wellington (New Zealand). Her research explores the intersection of music performance, education, and technology, developing human-centred systems that detect and analyse acoustic and physical aspects of Gugak performance to support culturally grounded, interactive learning for novice players.",
          image: MichaellaMoonImg,
          url: "https://www.linkedin.com/in/michaella-moon",
        },
        {
          name: "Zheng Xun, Ng",
          bio: "Zheng Xun is an Audio/Music AI researcher, pianist, and music producer based in Singapore. With a deep interest in MIR, he previously worked on Performance MIDI to Musical Score conversion at KAIST's MACLab, and is excited to attend ISMIR 2025!",
          image: ZhengXunImg,
          url: "https://www.linkedin.com/in/zheng-xun-ng/",
        },
        {
          name: "Christos, Plachouras",
          bio: "Hi! I'm a researcher and musician, currently doing a PhD at Queen Mary University of London. These days I'm particularly interested in music audio language models and audio representation learning & evaluation.",
          image: ChristosPlachourasImg,
          url: "https://chrispla.me",
        },
        {
          name: "Thiago Martin, Poppe",
          bio: "I hold a Bachelor's degree in Computer Science from Universidade Federal de Minas Gerais (UFMG), Brazil, where I am currently pursuing my Master's. For the past three years, I have been working in the field of Music Information Retrieval (MIR), focusing on the application of artificial intelligence to harmonic analysis, particularly automatic Roman Numeral Analysis transcription from audio—research recently accepted for presentation at DLfM 2025. I am also part of the MOSAIC research group. My passion for music began at the age of 14, when I started exploring different instruments and their unique characteristics. With this background, I am excited to attend ISMIR for the first time.",
          image: ThiagoMartinPoppeImg,
          url: "https://www.linkedin.com/in/thiago-martin-poppe-79516b1a1/",
        },
        {
          name: "Pedro, Ramoneda",
          bio: "Pedro Ramoneda is a researcher in Music Technology at the Music Technology Group, Universitat Pompeu Fabra. His work focuses on three main directions: automatic estimation of musical difficulty, representation learning for music, and the design of generative models that are usable for students and teachers in music education. He is also interested in broader topics related to music analysis, performance, and learning support.",
          image: PedroRamonedaImg,
          url: "https://pramoneda.github.io",
        },
        {
          name: "Baotong, Tian",
          bio: "I am a second-year Ph.D. student at the University of Rochester, USA. My research interests are on music information retrieval and speech processing. In my free time, I enjoy playing the guitar, composing, and producing music.",
          image: BaotongTianImg,
          url: "https://user-tian.github.io/",
        },
        {
          name: "Michael, Xie",
          bio: "Hi, I'm Michael, currently a master's student in Music Technology at New York University, where I also completed my bachelor's degree earlier this year. These days, I'm mostly diving into instrument performance analysis, also curious about music source separation and other cool aspects of MIR. Outside of research, I enjoy playing electric guitar, bass, and piano, as well as playing with VOCALOID or singing voice synthesis.",
          image: MichaelXieImg,
          url: "https://www.linkedin.com/in/michael-xie-501a63260",
        },
        {
          name: "Rui, Yang",
          bio: "I am a PhD student in the Algomus team (CRIStAL, University of Lille), focusing on modelling and semi-automatic arrangement for ensemble practice. I am interested in human–computer interaction in arrangement, as well as the educational and cultural dimensions of MIR. As a side project, I also study jianpu (numbered musical notation) and its potential in music encoding. If you are interested in collaboration, feel free to contact me!",
          image: AnonymousImg,
          url: "https://www.linkedin.com/in/rui-yang-410841225/",
        },
        {
          name: "Jingwei, Zhao",
          bio: "I'm a PhD candidate from NUS, currently interning at Yamaha Corporation. My research focuses on generative AI for music, especially arrangement, with the goal of enhancing human–AI collaboration in music creation. Outside of research, I enjoy J-Pop, cycling, and playing the accordion.",
          image: JingweiZhaoImg,
          url: "https://zhaojw1998.github.io/",
        },
      ],
      localVolunteers: [
        {
          name: "Joohye Son",
          bio: "I'm Joohye Son. My research focuses on music source separation. I look forward to meeting you.",
          url: null,
        },
        {
          name: "Taehyeon Kim",
          bio: "I am a Ph.D. student at Gwangju Institute of Science and Technology (GIST). My research interests include music transcription and generative models, with a focus on human–AI co-creativity.",
          url: null,
        },
        {
          name: "Minsoo Kang",
          bio: "Hello, I am Minsoo, a graduate student in the integrated Master's–PhD program at GIST (Gwangju Institute of Science and Technology). My research focuses on Music Emotion Recognition and Generation.",
          url: null,
        },
        {
          name: "Hyunjae Kim",
          bio: "I'm currently a Ph.D. candidate at KAIST, Music and Brain Lab. My research interests lie in computational neuroscience through AI modeling of sound and music.",
          url: "https://www.mubl.kaist.ac.kr/khj-cv",
        },
        {
          name: "Seokbeom Park",
          bio: "Hello, my name is Seokbeom Park, a PhD candidate at KAIST studying the neuroscience of music. My research focuses on EEG-based neural tracking of musical information in naturalistic contexts. I am also a guitarist with a deep love for jazz, blues, and Fujii Kaze!",
          url: null,
        },
        {
          name: "Hyojin Kim",
          bio: "Hi :) I've just started my journey as a Ph.D. student at KAIST. I'm focusing on music-related HCI, exploring new ways to make everyday music experience more engaging and enjoyable. Outside of research, I enjoy singing and playing various instruments as part of a band. Feel free to reach out!",
          url: "https://www.linkedin.com/in/hyojinki99/",
        },
        {
          name: "Taein Song",
          bio: "I'm currently doing a Master's degree at KAIST. I'm particularly interested in the musical experiences of DHH populations, especially cochlear implant users.",
          url: "https://www.mubl.kaist.ac.kr/복제-hjk-cv",
        },
        {
          name: "Mirinae Lee",
          bio: "I am a Master's student at KAIST in the Music and Brain Lab, with a background in classical composition. My research interests are in computational aesthetic assessment, music cognition, especially for the evaluation of AI-generated music. I aim to bridge human cognitive judgments of musical quality with computational models, capturing how structural and compositional factors shape aesthetic perception.",
          url: "https://www.mubl.kaist.ac.kr/%EB%B3%B5%EC%A0%9C-sti-cv",
        },
        {
          name: "Jaeran Choi",
          bio: "Hello :) I'm Jaeran, a PhD student at the Music and Audio Computing Lab at KAIST. My research focuses on multimodal music interaction.",
          url: "https://jaeranchoi.com",
        },
        {
          name: "Hoyeol Sohn",
          bio: "I am a Master's student at the Music and Audio Computing Lab and a Kaggle Competitions Master. My research focuses on multimodal integration in large language models, particularly across music, audio, and speech.",
          url: "https://www.linkedin.com/in/hoyeol-sohn-127856227/",
        },
        {
          name: "Minhee Lee",
          bio: "Minhee Lee is a Master's student at the Music and Audio Computing Lab at KAIST. Her research focuses on AI-powered music agents, text-based music understanding, music retrieval systems, and the computational analysis of emotion in music. Combining her passion for music with her computer science and engineering background, she is working toward developing technologies that enrich people's lives through music.",
          url: "https://www.minhee.io/",
        },
        {
          name: "Sunjae Won",
          bio: "I am a master's student at MACLAB, KAIST, and I am interested in enhancing music performances and assisting music creation.",
          url: "mailto:sjcircle@kaist.ac.kr",
        },
        {
          name: "Yoonjeong Park",
          bio: "Hello, I am currently pursuing my Master's degree in Music AI research under Professor Juhan Nam at KAIST's Music and Audio Computing Lab. My research interest focuses on generative models, particularly Singing Voice Synthesis, Text-To-Speech, and Singing Voice Conversion. I am actively working on Lyric-based Singing Voice Editing task. I'm excited to contribute to ISMIR 2025 and connect with the community! Feel free to contact me:)",
          url: "https://cottonlove.github.io/",
        },
        {
          name: "Gyubin Lee",
          bio: "I am a Master's student at the KAIST Music and Audio Computing Lab. My previous research focused on black-box neural effect modeling, and I am now interested in general audio generation.",
          url: "https://sites.google.com/view/lgbin81/%ED%99%88",
        },
        {
          name: "Carolina Carusi",
          bio: "I am a PhD student in Culture Technology at KAIST's Music and Audio Computing Lab, where I also completed my Master's degree. With a background in Computer Engineering, my research focuses on applying AI methods to sound technologies. Currently, I am working on real-time beat and downbeat tracking, as well as the automatic generation of rhythm game beatmaps from audio using deep learning architectures.",
          url: "https://www.linkedin.com/in/carolina-carusi-9796221b3",
        },
        {
          name: "Junwon Lee",
          bio: "Currently a PhD student in MAC Lab, KAIST, South Korea. Research interests cover Controllalble Audio Generation and Multimodal Learning (audio-visual-language).",
          url: "https://jnwnlee.github.io",
        },
        {
          name: "Kyung Taek Oh",
          bio: "Kyung Taek Oh is a PhD candidate in Graduate School of Culture Technology at KAIST. His research focuses on integrating audio-visual archival methodologies for virtual reconstruction of cultural heritage sites and assets.",
          url: "https://airislab.kaist.ac.kr",
        },
        {
          name: "Jooeun Lim",
          bio: "Hi, I'm June Lim, a master's student at KAIST. My current research interest is AI-based wave field synthesis.",
          url: "https://www.linkedin.com/in/jooeunlim",
        },
        {
          name: "Sangeun Cho",
          bio: "I am a master's student in Cultural Technology at KAIST. I hold bachelor's degrees in Life Science(B.S.) and Classical Composition(B.M.). My research interests are auditory rehabilitation, and recording. I am also currently working as a composer and music director in play and musical.",
          url: null,
        },
        {
          name: "Hyerim Yun",
          bio: "Hi, my name is Hyerim Yun. I majored in mathematics and did a joint major in cognitive science. I have an interest in 'Music and Audio AI' especially about how to visualize sound.",
          url: "https://hyerim0809.notion.site/Arc-17f796e3ef2a4b23aa79a79a1c3a0bba",
        },
        {
          name: "Hannah Park",
          bio: "I am a Master's student at the MALer Lab, Sogang University, with a research interest in developing interactive web applications for showcasing and analyzing deep-learning models.",
          url: "https://crescent.studio",
        },
        {
          name: "Sihun Lee",
          bio: "All things MIR! Currently a Master's student at MALer Lab, Sogang Univ.",
          url: "https://www.linkedin.com/in/sihun-lee-44748b250",
        },
        {
          name: "Dongmin Kim",
          bio: "Hi! I'm currently teaching machines to read music. Master's student@MALer Lab, Sogang University",
          url: "https://halsoo.github.io/",
        },
        {
          name: "Seonguk Ju",
          bio: "I'm a Master's student at the MALer Lab, Sogang University. I'm currently intrested in the application of AI to Korean traditional music.",
          url: "https://www.linkedin.com/in/seonguk-ju-024502304/",
        },
        {
          name: "Seola Cho",
          bio: "I'm interested in music generation, currently an intern at MALerLab, Sogang University",
          url: "https://github.com/jarammm",
        },
        {
          name: "Sojeong An",
          bio: "I am an undergraduate at Duksung Women's University, majoring in IT Media Engineering and Cultural Anthropology, and currently interning at the MALer Lab, Sogang University. With an interest in music AI, I would like to study it further in a master's program.",
          url: null,
        },
        {
          name: "Gary Jiwon Ri",
          bio: "I'm a portfolio manager in asset management and a part-time PhD student at MALer Lab. A fan of Baroque keyboard music.",
          url: "https://www.linkedin.com/in/gary-ri-82547316a",
        },
        {
          name: "Minjun Kim",
          bio: "Hi. I am deeply interested in music technology. Now an undergraduate student at Yonsei University, majoring Electrical & Electronic Engineering.",
          url: null,
        },
        {
          name: "Hyeonseok Choi",
          bio: "PhD student in Music and Audio at Seoul National University. My research focuses on multimodal audio generation.",
          url: null,
        },
        {
          name: "Sungho Lee",
          bio: "Ph.D student in Music and Audio Research Group, Seoul National University",
          url: null,
        },
        {
          name: "Kyungsu Kim",
          bio: "PhD student in Music and Audio at Seoul National University. My research focuses on AI-driven tools for music production",
          url: null,
        },
        {
          name: "Saeyeon Hwang",
          bio: "MS Student in Music Audio Research Group at Seoul National University. Research interest in Music Captioning.",
          url: null,
        },
        {
          name: "Eunsik Shin",
          bio: "Ph.D candidate in Music and Audio Research Group, Seoul National University. My research focused on text-to-music retrieval and HCI in music domain.",
          url: null,
        },
        {
          name: "Dongyub Han",
          bio: "MS student in Music and Audio at Seoul National University. My research focuses on Multi-Track Symbolic Music Generation and Music Structure Analysis",
          url: null,
        },
        {
          name: "Taeyeun Hwang",
          bio: "MS student in Music and Audio at Seoul National University. My research focuses on music similarity and melody extraction.",
          url: null,
        },
        {
          name: "Jaeyoung Shin",
          bio: "MS student in Music and Audio at Seoul National University, focusing on automatic quality assessment for synthesized audio",
          url: null,
        },
        {
          name: "Subeen Kim",
          bio: "PhD student in Music and Audio at Seoul National University. My research focuses on music cognition and neuroscience, with applications in HCI and music production.",
          url: "https://www.linkedin.com/in/maisie-been/",
        },
        {
          name: "Yeeun Shin",
          bio: "MS student in Music and Audio Research Group at Seoul National University, focusing on Music AI and Human-Computer Interaction (HCI).",
          url: "https://ye-eun-shin.github.io/about/",
        },
        {
          name: "Yideun (Eden) Park",
          bio: "Glad to meet you all! I'm Eden from AIRIS Lab, KAIST. I've worked as a K-pop music producer for about 10 years and currently researching on the immersive sound of K-pop. Hope we could have great time during 2025 ISMIR, Korea!",
          url: "https://www.linkedin.com/in/moreipeden?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Minji Kim",
          bio: "Hello, I'm Minji Kim, a postdoctoral researcher at the Future Lab, Sogang University. Trained as a gayageum performer, I hold a Ph.D. in Korean Traditional Music Theory. My research in Korean traditional music pedagogy focuses on identifying its enculturated performance patterns and integrating technology to design effective teaching methods.",
          url: "https://www.youtube.com/channel/UC3wU2I7zKh7kUWDaLDmM8kA",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===================== Volunteer Card Styles ===================== */
.volunteer-card {
  width: 100%;
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
  max-height: 120px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
}

/* 스크롤바 스타일링 */
.volunteer-bio p::-webkit-scrollbar {
  width: 4px;
}

.volunteer-bio p::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.volunteer-bio p::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.volunteer-bio p::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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
    max-height: 100px;
  }

  .local-volunteer-name {
    font-size: 0.9rem !important;
  }

  .local-volunteer-bio p {
    font-size: 0.8rem;
    max-height: 80px;
  }
}

/* ===================== Button Styles ===================== */
.v-btn {
  text-transform: none !important;
}

/* ===================== Grid Layout ===================== */
.v-row {
  margin: 0 -2px;
}

.v-col {
  padding: 2px;
}

/* ===================== Local Volunteer Card Styles ===================== */
.local-volunteer-card {
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #fafbfc;
}

.local-volunteer-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.local-volunteer-name {
  color: #666 !important;
  font-size: 1rem !important;
  line-height: 1.3;
  padding: 12px 12px 6px 12px !important;
  white-space: normal;
  overflow-wrap: break-word;
}

.local-volunteer-bio {
  flex-grow: 1;
  padding: 0 12px 12px 12px !important;
}

.local-volunteer-bio p {
  line-height: 1.4;
  color: #666;
  font-size: 0.85rem;
  margin: 0;
  max-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
}

/* Local Volunteer 스크롤바 스타일링 */
.local-volunteer-bio p::-webkit-scrollbar {
  width: 3px;
}

.local-volunteer-bio p::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 1px;
}

.local-volunteer-bio p::-webkit-scrollbar-thumb {
  background: #d1d1d1;
  border-radius: 1px;
}

.local-volunteer-bio p::-webkit-scrollbar-thumb:hover {
  background: #b8b8b8;
}

.local-volunteer-title {
  color: #666 !important;
}

/* ===================== Header Section ===================== */
.v-card-title.text-h4 {
  color: #004191 !important;
}

.v-card-title.text-h5 {
  color: #004191 !important;
}
</style>
