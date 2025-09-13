<template>
  <v-row justify="center" id="baraji-concert">
    <v-col cols="12" md="8">
      <!-- ===================== Overview ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          BARAJI Concert: Korean Traditional Music Performance
        </v-card-title>
        <v-card-text class="text-body">
          For a long time in Korea, music and ritual have been used to drive away evil spirits. 
          Those who performed these rites—briefly introduced in the opening of 
          <cite>K-Pop Demon Hunters</cite>—were called <em>mudang</em> (<span lang="ko">무당</span>), or shamans. 
          The ritual known as <em>gut</em> (<span lang="ko">굿</span>), in which shamans expel malevolent spirits and pray for blessings, 
          has continued into the present day. The music of these rituals has become an important root of Korean traditional music.
          <br /><br />
          To provide an opportunity to experience Korean traditional music, we have invited one of its most renowned and popular ensembles, 
          <b>BARAJI (우리소리 바라지)</b>.
          <br /><br />
          Baraji is a native Korean word that refers to the heartfelt care given to a person through unconditional support. 
          In Korean traditional music, baraji refers to the impromptu singing by accompanists that adds harmony to the lead vocal and enhances colors of the music. 
          The character of baraji is epitomized in Jindo Ssitgim Gut, creating a unique style. 
          Ssitgim Gut is a traditional shamanistic purging ritual for the dead, a prayer for peaceful rest with singing and dancing.
        </v-card-text>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== About BARAJI ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          About BARAJI
        </v-card-title>
        <v-card-text class="text-body">
          THE BARAJI music group was born to pay homage to baraji and to share the beauty of baraji with the world through baraji-style music. 
          THE BARAJI strives to identify impacting elements for interaction with contemporary audiences that exist in various genres of traditional music 
          including vocal, percussion, instrumental and theatrical music. By polishing and reconstructing these elements, 
          THE BARAJI sincerely hopes to contribute to making the world a better place to live in through its musical activities.
        </v-card-text>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Concert Program ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">Concert Program</v-card-title>
        <v-card-text class="text-body">
          At this ISMIR concert, BARAJI will present a diverse program, ranging from traditional solo performances (Sanjo and Pansori) 
          to their original ensemble piece inspired by Korean shamanistic music (Muak; 巫樂). 
          In this 70-minute performance, BARAJI will present inspiring music and offer prayers for the happiness and well-being of all participants.
        </v-card-text>
        <ul class="dot-list">
          <li>Song of Prayer (비손)</li>
          <li>Gayageum Sanjo (가야금 산조)</li>
          <li>Blind Sim opening his eyes, from pansori Simcheong-ga (판소리 심청가 중 심봉사 눈뜨는 대목)</li>
          <li>Daegeum Sanjo (대금 산조)</li>
          <li>Spirit Ensemble (씻김시나위)</li>
          <li>Blow & Hit (무취타)</li>
          <li>Prayer of Blessing (별신축원)</li>
        </ul>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Media & Previews ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Media & Previews
        </v-card-title>
        <v-card-text class="text-body mb-4">
          Experience BARAJI's music through these multimedia previews:
         <br/><br/> 
          
        <!-- Spotify Section -->
        <div class="media-section">
          <v-card-title class="text-h6 font-weight-bold mb-3 pa-0 media-title">
            <v-icon icon="mdi-spotify" color="#1DB954" class="mr-2"></v-icon>
            Listen on Spotify
          </v-card-title>
          <v-card-text class="text-body-2 mb-3" style="color: #666;">
            Note: Spotify account required for playback. Free accounts can listen with ads.
          </v-card-text>
          <div class="spotify-container mb-6">
            <iframe 
              data-testid="embed-iframe" 
              style="border-radius:12px" 
              src="https://open.spotify.com/embed/artist/1YKG9GmL0dcAgjy5ITVYfe?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>

        <!-- YouTube Section -->
        <div class="media-section">
          <v-card-title class="text-h6 font-weight-bold mb-3 pa-0 media-title">
            <v-icon icon="mdi-youtube" color="#FF0000" class="mr-2"></v-icon>
            Performance Videos
          </v-card-title>
          
          <div class="youtube-container">
            <div class="video-grid">
              <div class="video-item">
                <div class="video-wrapper aspect-ratio-16-9">
                  <iframe 
                    src="https://www.youtube-nocookie.com/embed/O0gTNoLs7gM?si=aVQYLFxDLxV6FxEK&rel=0"
                    title="BARAJI Performance Video 1" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
              
              <div class="video-item">
                <div class="video-wrapper aspect-ratio-16-9">
                  <iframe 
                    src="https://www.youtube-nocookie.com/embed/hDYMtItfXkM?si=bzx9-1jlLC3jSgu2&rel=0"
                    title="BARAJI Performance Video 2" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        </v-card-text>
        
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Experience Korean Traditional Music ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Experience Korean Traditional Music
        </v-card-title>
        <v-card-text class="text-body">
          Join us for this unique opportunity to experience the profound beauty and spiritual depth of Korean traditional music. 
          BARAJI's performance will offer ISMIR 2025 attendees a rare glimpse into the rich cultural heritage of Korea, 
          where music serves not only as artistic expression but also as a bridge between the earthly and spiritual realms.
          <br /><br />
          Through this concert, we hope to foster a deeper understanding and appreciation of Korean traditional music 
          within the international music information retrieval community, demonstrating how traditional musical practices 
          continue to inspire and inform contemporary musical innovation.
        </v-card-text>
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
};
</script>

<style scoped>
.dot-list {
  list-style-type: disc;
  font-size: 18px;
  padding-left: 40px;
  line-height: 1.8;
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

.spotify-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.spotify-container iframe {
  max-width: 100%;
  width: 100%;
  display: block;
}

.youtube-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
}

.video-item {
  width: 100%;
}

.video-wrapper {
  position: relative;
  width: 100%;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.video-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* 16:9 Aspect Ratio */
.aspect-ratio-16-9 {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 = 9/16 = 0.5625 */
}

@media (max-width: 768px) {
  .spotify-container iframe {
    height: 250px;
  }
  
  .video-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
