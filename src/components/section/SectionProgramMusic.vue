<template>
  <v-row justify="center" id="music-program">
    <v-col cols="12" md="8">

      <!-- ===================== Table of Contents ===================== -->
      <v-card
        outlined
        elevation="0"
        class="pa-4 my-4"
        style="background-color: #f8f9fa"
      >
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Table of Contents</v-card-title
        >
        <v-container class="table-container">
          <!-- Music Program Header -->
          <v-row class="section-header">
            <v-col cols="12" class="font-weight-bold"
              >Music Program</v-col
            >
          </v-row>

          <!-- Performance 1 -->
          <v-row
            class="table-row styled-row"
            style="cursor: pointer"
            @click="scrollToSection('performance-1')"
          >
            <v-col cols="1" class="text-center font-weight-bold">M1</v-col>
            <v-col
              cols="11"
              style="color: #1487c8; text-decoration: underline"
            >
              Mind Improvisation II: Real-Time Conceptual Transformation through fNIRS and MAX/MSP
            </v-col>
          </v-row>
          
          <!-- Performance 2 -->
          <v-row
            class="table-row styled-row"
            style="cursor: pointer"
            @click="scrollToSection('performance-2')"
          >
            <v-col cols="1" class="text-center font-weight-bold">M2</v-col>
            <v-col
              cols="11"
              style="color: #1487c8; text-decoration: underline"
            >
              Aleatorica: A Mosaic of Popular Interval Content
            </v-col>
          </v-row>
          
          <!-- Performance 3 -->
          <v-row
            class="table-row styled-row"
            style="cursor: pointer"
            @click="scrollToSection('performance-3')"
          >
            <v-col cols="1" class="text-center font-weight-bold">M3</v-col>
            <v-col
              cols="11"
              style="color: #1487c8; text-decoration: underline"
            >
              Melody Slot Machine with RoboSax
            </v-col>
          </v-row>
          
          <!-- Performance 4 -->
          <v-row
            class="table-row styled-row"
            style="cursor: pointer"
            @click="scrollToSection('performance-4')"
          >
            <v-col cols="1" class="text-center font-weight-bold">M4</v-col>
            <v-col
              cols="11"
              style="color: #1487c8; text-decoration: underline"
            >
              "One, Two, Many"
            </v-col>
          </v-row>

          <!-- Jam Session Opening Header -->
          <v-row class="section-header mt-4">
            <v-col cols="12" class="font-weight-bold"
              >Jam Session Opening</v-col
            >
          </v-row>

          <!-- Performance 5 -->
          <v-row
            class="table-row styled-row"
            style="cursor: pointer"
            @click="scrollToSection('performance-5')"
          >
            <v-col cols="1" class="text-center font-weight-bold">J1</v-col>
            <v-col
              cols="11"
              style="color: #1487c8; text-decoration: underline"
            >
              The JAM_BOT: An Insight Into An AI-Human Co-Created Musical Improvisation
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <br />

      <!-- ===================== Music Program Performances ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">Music Program</v-card-title>
        
        <!-- Performance 1: Mind Improvisation II -->
        <div class="performance-section mb-6" id="performance-1">
          <v-card-title class="text-h5 mb-3 font-weight-bold performance-title">
            Mind Improvisation II: Real-Time Conceptual Transformation through fNIRS and MAX/MSP
          </v-card-title>
          <div class="performance-image mb-4">
            <v-img
              src="@/assets/ProgramMusic/Mind Improvisation.jpg"
              alt="Mind Improvisation II Performance"
              class="rounded-lg"
              contain
            ></v-img>
          </div>
          <v-card-title class="performance-type mb-2">
            Live Performance
          </v-card-title>
          <v-card-title class="performers mb-3">
            <strong>Performers:</strong> Hyo Jee Kang, Jinok Jo, Joohun Lee
          </v-card-title>
          
          

          <v-card-text class="text-body mb-3">
            <strong>Abstract:</strong><br />
            Mind Improvisation II,' building on the concepts of 'Mind Improvisation' and 'Growing Seeds,' merges neural signal processing with embodied performance. Using a 15-channel functional near-infrared spectroscopy (fNIRS) device (NIRSIT Lite), the performer's prefrontal cortex activity is streamed live to a custom Max/MSP environment. The performer's ΔHbO signals are interpreted not as binary triggers but as expressive, continuous parameters—modulating filters, synthesis engines, and real-time audio morphing tools. Simultaneously, a Yamaha Disklavier fulfills a dual role: As a readymade improviser, it acoustically replays pre-recorded performances—the "ghost" layer. As a live acoustic instrument, it is physically played by the performer in real time. These layers—brain-driven synthesis and live/automated piano—are recursively shaped by the performer's evolving neural states. Auditory output and visual feedback, in turn, influence the brain, forming a perceptual-cognitive feedback loop. The system embodies the concept of transformation as both process and event, echoing the principles of Process Art and Deleuzian deterritorialization. Brain signals are treated not as mere control data but as an expressive medium, enabling a decentered and emergent artistic language. This work challenges conventional authorship by positioning the brain as both subject and source of the performance. The audience witnesses an improvisation sculpted by moment-to-moment mental fluctuations, transforming not a metaphor, but an immediate, embodied experience.
        </v-card-text>

          <div class="artist-bio-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold bio-title">
              Artist Biographies
            </v-card-title>
            <v-card-text class="bio-content">
              <div class="bio-section">
                <strong>Hyo Jee Kang (강효지)</strong><br />
                <em>Role: Composer & Performer — composition, performance, biomedical-media research</em><br />
                Bio: Hyo Jee Kang is an associate professor at Korea National University of Transportation and an active pianist and performer. Trained in Korea and Germany (DMA, Konzertexamen), she combines piano performance with media art, biomedical-signal projects (e.g., fNIRS-based studies), VR/AR, and interdisciplinary collaborations that fuse music, technology, and performance.
                <br /><br />
                
                <strong>Jinok Cho (조진옥)</strong><br />
                <em>Role: Sound Artist & Audio Realizer — specializes in audio realization, Max/MSP programming, and live signal processing.</em><br />
                Bio: He is a Composer and Sound designer (formerly a researcher at Seoul National University Arts & Science Center) who produces electroacoustic and multimedia works. His projects focus on immersive audio design using Max/MSP and live processing, fixed media, and experimental soundscapes that often reinterpret Korean traditional narratives such as Sugunga.
                <br /><br />
                
                <strong>Joohun Lee (이주헌)</strong><br />
                <em>Role: Media Artist — visualization, interactive media, and AR/VR/new-media content development.</em><br />
                Bio: Juhun Lee is a professor at Dong-Ah Institute of Media & Arts specializing in visualization and interactive media. He develops immersive visualization systems, AR/VR environments, and collaborative metaverse/virtual-space projects while teaching new-media content production and real-time media techniques.
              </div>
            </v-card-text>
          </div>

          <div class="video-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold video-title">
              Performance Video
            </v-card-title>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <div class="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/BU6B-di-PJY" 
                    title="Mind Improvisation II Performance Video" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    class="embedded-video"
                  ></iframe>
                </div>
              </v-col>
            </v-row>
          </div>

        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Performance 2: Aleatorica -->
        <div class="performance-section mb-6" id="performance-2">
          <v-card-title class="text-h5 mb-3 font-weight-bold performance-title">
            Aleatorica: A Mosaic of Popular Interval Content
          </v-card-title>
          <div class="performance-image mb-4">
            <v-img
              src="@/assets/ProgramMusic/Aleatorica.png"
              alt="Aleatorica Performance"
              class="rounded-lg"
              contain
            ></v-img>
          </div>
          <v-card-title class="performance-type mb-2">
            Video Performance
          </v-card-title>
          <v-card-title class="performers mb-3">
            <strong>Performer:</strong> Valerie Sazonova
          </v-card-title>

          <v-card-text class="text-body mb-3">
            <strong>Abstract:</strong><br />
            Aleatorica is a mosaic-like music map that visualizes and sonifies the interval content of a large dataset of music by aleatorically regenerating its melody, creating a sonic space for exploring the continuum of melodic features in contemporary music. Following the idea of a 'lecture-concert', this performance will touch on the computational and music theoretical methods used to create such an interface. In order to create the map, a large dataset of MIDI format songs was collected and processed into interval distributions based on note transition frequency. Afterwards, Earth Mover's Distance is computed between distributions using a music-theory informed cost matrix and subsequently used in the UMAP algorithm to generate a latent representation of the dataset. Afterwards, a tiled design is generated using Voronoi tessellation on the dimensionality reduced plot and colored based on quantifiable music theoretical features on the interval distributions. Finally, the interval distribution is used to derive a Markovian transition matrix, which can be used to aleatorically generate music. Additionally, Aleatorica will be available as a website, promoting audience interaction and personal discovery. The resulting performance is a compelling inspection of the landscape of modern melody, blurring the lines between music data visualization and data-driven sound art.
          </v-card-text>

          <div class="artist-bio-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold bio-title">
              Artist Biography
            </v-card-title>
            <v-card-text class="bio-content">
              <div class="bio-section">
                <strong>Valerie Sazonova</strong><br />
                Valerie Sazonova is an undergraduate student at the University of Alabama pursuing a degree in Computer Engineering and Mathematics. She's interested in exploring the intersection of technical research and creative practice, focusing on bridging computational approaches from music information retrieval and traditional music-theoretical analysis. Her research experience ranges from applying machine learning for radar-based sign language recognition to contributing as a student researcher at NYU's Music and Audio Research Laboratory. Additionally, she has collaborated with artists, designing novel electronic musical interfaces, composing for unconventional instruments, and building self-oscillating sound art installations.
              </div>
            </v-card-text>
          </div>

          <div class="video-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold video-title">
              Performance Video
            </v-card-title>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <div class="video-wrapper">
                  <iframe 
                    src="https://drive.google.com/file/d/1RGsTfYrPNBXqAHtgFgXGx9oWzHqSPyho/preview" 
                    title="Aleatorica Performance Video" 
                    frameborder="0"
                    allowfullscreen
                    class="embedded-video"
                  ></iframe>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Performance 3: Melody Slot Machine with RoboSax -->
        <div class="performance-section mb-6" id="performance-3">
          <v-card-title class="text-h5 mb-3 font-weight-bold performance-title">
            Melody Slot Machine with RoboSax
          </v-card-title>
          <div class="performance-image mb-4">
            <v-img
              src="@/assets/ProgramMusic/Melody Slot Machine with RoboSax.jpg"
              alt="Melody Slot Machine with RoboSax Performance"
              class="rounded-lg"
              contain
            ></v-img>
          </div>
          <v-card-title class="performance-type mb-2">
            Live Performance
          </v-card-title>
          <v-card-title class="performers mb-3">
            <strong>Performers:</strong> Masatoshi Hamanaka, Gou Koutaki
          </v-card-title>

          <v-card-text class="text-body mb-3">
            <strong>Abstract:</strong><br />
            Melody Slot Machine with RoboSax is our AI-based Melody Slot Machine that controls a robot-based RoboSax. Melody Slot Machine is a dial with the staves of music displayed on an iPad, which can be rotated to change the melody variations. The melody variations are generated on the basis of the AI-based melody-morphing method and can be partially switched to another variation without any significant change in the overall melody structure and with no musical breakdown. The microcomputer on the RoboSax receives the MIDI note from Melody Slot Machine and moves the servomotor so that the fingering corresponds to the note number.
          </v-card-text>

          <div class="artist-bio-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold bio-title">
              Artist Biographies
            </v-card-title>
            <v-card-text class="bio-content">
              <div class="bio-section">
                <strong>Masatoshi Hamanaka</strong><br />
                Masatoshi Hamanaka received a Ph.D. in Engineering from the University of Tsukuba, Japan, in 2003. He is currently a leader of the Music Information Intelligence team at Center for Advanced Intelligence Project, RIKEN. His research interest is in music information technology and biomedical and unmanned aircraft systems. He received the Journal of New Music Research Distinguished Paper Award in 2005, SIGGRAPH2019 Emerging Technologies Laval Virtual Revolution Research Jury Prize in 2019, IJCAI-19 Most Entertaining Video Award in 2019, Augmented Human International Conference Best Poster Paper Award in 2021, and International Conference on Multimedia Modeling Best Demonstration Award in 2024.
                <br /><br />
                
                <strong>Gou Koutaki</strong><br />
                Gou Koutaki received a Doctor of Engineering from Kumamoto University, Japan, in 2007. He joined the Production Engineering Research Laboratory, Hitachi, Ltd., in 2007 and is currently a professor at Kumamoto University. His research interests include image processing and musical-instrument support systems. He was originally a researcher in computer vision and has presented papers at CVPR, ICCV, SIGGRAPH technical paper, IJCV, etc., but is currently designing and manufacturing robotic instruments.
                <br /><br />
                
                <strong>The four performers of the Robo Sax Quartet are as follows. They are undergraduate students at Kumamoto University and members of the Wind Orchestra Club.</strong><br />
                • Kotomi Hisano, Robo-Soprano Sax<br />
                • Ambi Tanaka, Robo-Alto Sax<br />
                • Sho Fujii, Robo-Tenor Sax<br />
                • Keisuke Mizuta, Robo-Baritone Sax
              </div>
            </v-card-text>
              </div>
              
          <div class="video-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold video-title">
              Performance Video
            </v-card-title>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <div class="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/n_Qd66uhY70" 
                    title="Melody Slot Machine with RoboSax Performance Video" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    class="embedded-video"
                  ></iframe>
                </div>
              </v-col>
            </v-row>
          </div>

        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Performance 4: One, Two, Many -->
        <div class="performance-section mb-6" id="performance-4">
          <v-card-title class="text-h5 mb-3 font-weight-bold performance-title">
            "One, Two, Many"
          </v-card-title>
          <div class="performance-image mb-4">
            <v-img
              src="@/assets/ProgramMusic/One, Two, Many.jpg"
              alt="One, Two, Many Performance"
              class="rounded-lg"
              contain
            ></v-img>
          </div>
          <v-card-title class="performance-type mb-2">
            Video Performance
          </v-card-title>
          <v-card-title class="performers mb-3">
            <strong>Performer:</strong> Oded Ben-Tal
          </v-card-title>

          <v-card-text class="text-body mb-3">
            <strong>Abstract:</strong><br />
            One, Two, Many is a three-way partnership between two human performers and an Artificial 'Intelligence'. One of the main challenges in human - AI co-creation is the question of motivation, goals, or aesthetic preferences. Cutting-edge AI systems are very good imitation systems increasingly able to reproduce human-like outputs. But computers are obviously incapable of aesthetic judgements or goals. In One, Two, Many the AI systems joins the flute players in realising the piece as a partner defined by an aesthetic preference – that of an impatient listener, one who seeks novelty. First the AI 'listens' to each flute and evaluates similarity and surprise in real-time. Stable input – signals that are predictability or similar to previous signals – increases the 'boredom' in the system. When this boredom gets over a defined threshold the computer changes it internal setting to achieve musical change and resets the boredom. The computer, therefore, interprets an audio signal and changes it's own musical behaviour based on this interpretation: a system that listens and responds according to some aesthetic criteria. While the realisation of this piece involves a partnership between the human performers and the AI, this is an unequal partnership. First, the AI is only able to transform the flute sounds not initiated sounds on its own. Second, the aesthetic preference in the system are obviously rather simple and lack the nuance, sophistication, or experience of a human musician. Since listening is at the heart of the multi-party interaction envisioned, the score is designed to allow the performers a degree of freedom. Freedom to respond to and try to influence the AI as well as ability to respond to each other. The parts are loosely coordinated – pages act as coordination units. But within each page players have some optional figures, alternatives and choice of repetition. The performers, therefore, are able to control, to a degree, the similarity/change in the music and thus interact with the aesthetic 'preferences' of the AI.
        </v-card-text>
        
          <div class="artist-bio-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold bio-title">
              Artist Biography
            </v-card-title>
            <v-card-text class="bio-content">
              <div class="bio-section">
                <strong>Oded Ben-Tal</strong><br />
                Oded Ben-Tal is London-based composer and researcher working at the intersection of music, computing, and cognition. His compositions range from purely acoustic pieces, to interactive, live electronic pieces and multimedia work. In recent years he is particularly interested in the interaction between human and computational creativities: Applying deep learning techniques to folk musics and interrogating the creative capacity of the resulting generative system within the folk tradition as well as outside it; Using AI-inspired approaches in the domain of interactive, live electronic music and joint improvisation between human performers and a semi-autonomous AI system. His work has been supported by grants from the UK's Arts and Humanities Research Council, the Leverhulme Trust and the Volkswagen Foundation. He is an Associate Professor in the Department of Performing Arts, Kingston University, London.
              </div>
            </v-card-text>
          </div>

          <div class="video-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold video-title">
              Performance Video
            </v-card-title>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <div class="video-wrapper">
                  <iframe 
                    src="https://drive.google.com/file/d/1dwAs2q0noWrJ3N3cMwKM45sVYqA9hJEN/preview" 
                    title="One, Two, Many Performance Video" 
                    frameborder="0"
                    allowfullscreen
                    class="embedded-video"
                  ></iframe>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Jam Session Opening ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Jam Session Opening
        </v-card-title>
        <v-card-text class="text-body">
          The music program opens with an interactive jam session, setting the stage for collaborative musical exploration 
          and demonstrating the real-time capabilities of AI-human musical interaction systems.
        </v-card-text>

        <v-divider class="my-4"></v-divider>

        <!-- Performance 5: The JAM_BOT -->
        <div class="performance-section mb-6" id="performance-5">
          <v-card-title class="text-h5 mb-3 font-weight-bold performance-title">
            The JAM_BOT: An Insight Into An AI-Human Co-Created Musical Improvisation
          </v-card-title>
          <div class="performance-image mb-4">
            <v-img
              src="@/assets/ProgramMusic/The JAM_BOT.jpg"
              alt="The JAM_BOT Performance"
              class="rounded-lg"
              contain
            ></v-img>
          </div>
          <v-card-title class="performance-type mb-2">
            Live Performance
          </v-card-title>
          <v-card-title class="performers mb-3">
            <strong>Performers:</strong> JamBot (Lancelot Blanchard, Perry Naseck)
          </v-card-title>

          <v-card-text class="text-body mb-3">
            <strong>Abstract:</strong><br />
            This show is a demonstration of the JAM_BOT, a real-time system for collaborative free improvisation with music language models that was developed as part of a collaboration between MIT Media Lab researchers and GRAMMY-winning visiting artist Jordan Rudess. The JAM_BOT accompanies the improvisation of live performers onstage using optimized Transformer-based Music Language Models. It was first demonstrated publicly during a sold-out performance held at the MIT Media Lab on September 21, 2024. This ISMIR 2025 show intends to reproduce segments of the original show to demonstrate the potential of the system to the ISMIR scientific community.
          </v-card-text>

          <div class="artist-bio-section mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold bio-title">
              Artist Biographies
          </v-card-title>
            <v-card-text class="bio-content">
              <div class="bio-section">
                <strong>Perry Naseck</strong> (pnaseck@media.mit.edu, Research Assistant, MIT Media Lab)<br />
                Perry Naseck is an artist, engineer, and researcher working with interactive, kinetic, light- and time-based media. He specializes in interaction, orchestration, and animation of systems of sensors and actuators for live performance and permanent installation. Perry is pursuing a PhD in the Responsive Environments group at the MIT Media Lab where he focuses on creating new experiences for musicians and audiences. His research explores how to closely link live performance visual systems with a focus on improvised and AI-generated music. Perry completed a Bachelor's of Engineering Studies and Arts at Carnegie Mellon where he studied both Art and Electrical & Computer Engineering.
                <br /><br />
                
                <strong>Lancelot Blanchard</strong> (lancelot@media.mit.edu, Research Assistant, MIT Media Lab)<br />
                Lancelot Blanchard is a musician, engineer, and AI researcher pursuing a PhD at MIT Media Lab's Responsive Environments group. His research explores the development of generative AI systems that can enhance the creative processes of musicians, with a special focus on live performances. Lancelot has collaborated with multiple GRAMMY-winning artists to create innovative tools for real-time AI-augmented music making. Lancelot holds a Master's of Research in Artificial Intelligence and Machine Learning and a Master's of Engineering in Computing from Imperial College London, as well as a degree in classical piano from the Conservatory of Rennes, France.
              </div>
            </v-card-text>
              </div>
              
          <div class="media-links mb-3">
            <v-btn 
              href="https://vimeo.com/1107163458/c358b5432b" 
              target="_blank" 
              color="blue" 
              variant="outlined" 
              class="mr-2 mb-2"
            >
              <v-icon left>mdi-vimeo</v-icon>
              Watch on Vimeo
            </v-btn>
          </div>
        </div>
      </v-card>

      <br /><br /><br />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          items: [
            { content: "Submission portal opening", date: "May 18, 2025" },
            { content: "Submission deadline", date: "June 30, 2025 (AOE)" },
            { content: "Notification of acceptance", date: "July 14, 2025" },
            {
              content: "Performance-ready upload due",
              date: "September 12, 2025",
            },
          ],
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // 상단에서 100px 아래로 스크롤
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
.performance-section {
  border-left: 4px solid #004191;
  padding-left: 20px;
  margin-bottom: 30px;
}

.performance-image {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.performance-image .v-img {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.performance-image .v-img:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.performance-title {
  color: #004191 !important;
  font-size: 1.3rem !important; /* 기본 text-h5보다 작게 */
}

.performance-type {
  color: #ED5E60 !important;
  font-style: italic;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
}

.performers {
  font-size: 16px;
  color: #333;
}

.bio-section {
  line-height: 1.6;
}

.artist-bio-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.bio-title {
  color: #004191 !important;
  padding-left: 0 !important;
}

.bio-content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.video-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.video-title {
  color: #004191 !important;
  padding-left: 0 !important;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.embedded-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

.tech-list {
  list-style-type: disc;
  font-size: 16px;
  padding-left: 20px;
  line-height: 1.6;
}

.tech-requirements {
  font-size: 16px;
  color: #333;
  margin-top: 15px;
}

.media-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

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

.styled-row {
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 8px;
}

.code-block {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
}

.highlight-text {
  color: #004191;
  font-weight: bold;
}

/* Media Section Containers */
.media-section {
  width: 100%;
  overflow: hidden;
}

.media-title {
  color: #004191 !important;
}

@media (max-width: 768px) {
  .media-links {
    flex-direction: column;
  }
  
  .performance-section {
    padding-left: 15px;
  }
}

.section-header {
  background-color: #e9ecef;
  padding: 8px 0;
}
</style>