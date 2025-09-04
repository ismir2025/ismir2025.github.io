// 정확한 ISMIR 2025 스폰서 데이터 (이미지 기준으로 수정)
// 각 스폰서는 여러 티어에 속할 수 있음 (tiers 배열 사용)
export const sponsors = [
  // Platinum Sponsors
  {
    id: 'adobe-platinum',
    tiers: ['platinum'],
    name: 'Adobe',
    tagline: 'Creative solutions for everyone',
    logo: 'Adobe',
    website: 'https://www.adobe.com',
    description: [
      '',
      "At Adobe Research we aim to invent the future of video and audio creation with AI. To do this, we work on all related research areas: visuals, music, speech, sound design, animation, and physical simulation. We invent new AI models, algorithms, and interaction paradigms."
  ]
  },
  {
    id: 'moises-platinum',
    tiers: ['platinum', 'wimir-patron'],
    name: 'Moises.Ai',
    tagline: 'AI-powered music practice',
    logo: 'Moises',
    website: 'https://moises.ai',
    description: [
      '',
      'Moises, the consumer brand of Music AI, empowers musicians and producers with AI tools for music practice and creation, offering features like vocal/instrument separation, AI voice studio, and context-aware stem generation. The technology that powers Moises is backed by a team of world-class engineers and scientists with experience at Spotify, Pandora, and TikTok. The company has developed 45 proprietary AI models that process 2.5 million minutes of daily audio. Music AI has 65 million users across it’s product ecosystem of cloud and embedded enterprise offerings, and the award winning consumer application, Moises. Founded in Salt Lake City, the company operates with a global team spanning the US, Brazil, and Europe with the mission to enable creative potential.'
    ]
  },
  {
    id: 'udio-platinum',
    tiers: ['platinum'],
    name: 'Udio',
    tagline: 'AI music generation platform',
    logo: 'Udio',
    website: 'https://www.udio.com',
    description: [
      'Udio is at the forefront of AI music generation, providing cutting-edge tools for creating original music compositions.',
      'Our platform democratizes music creation, enabling anyone to compose professional-quality music using artificial intelligence.'
    ]
  },
  {
    id: 'algoriddim-platinum',
    tiers: ['platinum'],
    name: 'Algoriddim',
    tagline: 'Professional DJ software',
    logo: 'algoriddim',
    website: 'https://www.algoriddim.com',
    description: [
      'Algoriddim creates award-winning DJ software that combines cutting-edge technology with intuitive design.',
      'Our applications are used by millions of DJs worldwide, from beginners to professionals.'
    ]
  },
  {
    id: 'google-deepmind-platinum',
    tiers: ['platinum'],
    name: 'Google Deepmind',
    tagline: 'AI for scientific discovery',
    logo: 'GoogleDeepmind',
    website: 'https://deepmind.google',
    description: [
      '',
      'Google DeepMind develops AI models and tools that supercharge the creation of music, video, and images. Our music efforts build on a long history of work in this space. In 2015, Google founded the Magenta Project to explore the potential for deep learning and AI to power new tools for musical creativity–resulting in innovations like NSynth, DDSP, and Magenta Studio. Our latest work includes Lyria, a high-fidelity generative model for music; Lyria RealTime, enabling co-creation of live music with AI; Magenta Realtime, an open weights live music model; and the Music AI Sandbox, a collaborative space for artists exploring the future of sound. Learn more at deepmind.google.'
    ]
  },
  {
    id: 'spotify-platinum',
    tiers: ['platinum'],
    name: 'Spotify',
    tagline: 'Music for everyone',
    logo: 'Spotify',
    website: 'https://www.spotify.com',
    description: [
      'Spotify is the world\'s most popular audio streaming subscription service with millions of songs, podcasts and videos from artists all over the world.',
      'We\'re constantly innovating to improve the music discovery and listening experience for our users worldwide.'
    ]
  },

  // Silver Sponsors
  {
    id: 'yamaha-silver',
    tiers: ['silver'],
    name: 'Yamaha',
    tagline: 'Making Waves',
    logo: 'yamaha',
    website: 'https://www.yamaha.com',
    description: [
      'YAMAHA EMPOWERS ME TO MAKE WAVES WITH MY SOUND AND MUSIC.',
      'We strive to partner with people who take steps every day to create poignant emotions in everyone involved in sound and music. Yamaha is uniquely able to stimulate people’s feelings, and we will continue to provide products and services that support musical expression.'
    ]
  },
  {
    id: 'neutune-silver',
    tiers: ['silver'],
    name: 'Neutune',
    tagline: 'AI audio plugins',
    logo: 'neutune',
    website: 'https://www.neutune.com',
    description: [
      '',
      'Neutune is a research-driven AI music company that treats technology as a partner—not a substitute—for human creativity. We design tools that honor authorship, lower barriers to music-making, and preserve cultural nuance. Our work is grounded in reproducible research and close collaboration with artists and scholars so that advances in generative audio remain transparent, testable, and beneficial to the broader music ecosystem.'
    ]
  },
  {
    id: 'steinberg-silver',
    tiers: ['silver', 'wimir-supporter'],
    name: 'Steinberg',
    tagline: 'Creativity First',
    logo: 'Steinberg',
    website: 'https://www.steinberg.net',
    description: [
      "",
      "With millions of users worldwide, Steinberg is one of the world's largest manufacturers of audio software and hardware. We are committed to producing technology which helps you to express your inspiration, feeding the passion felt by both you and your audience. We strive to provide everything you need for the entire creative process, from capturing the most basic idea right through to a finished result which you will always be proud of. We celebrate this commitment with a simple maxim: Creativity First."
    ]
  },
  {
    id: 'alphatheta-silver',
    tiers: ['silver'],
    name: 'AlphaTheta',
    tagline: 'Professional DJ equipment',
    logo: 'AlphaTheta',
    website: 'https://www.alphatheta.com',
    description: [
      '',
      'AlphaTheta provides high-quality equipment and services that bring creativity and diversity to the way people enjoy music. These products and services are built on the strength of our core technologies, cultivated through years of research and development, including user interface technology, digital audio, and signal processing technologies, high-quality sound technology, and data analytics technology.'
    ]
  },
  {
    id: 'suno-silver',
    tiers: ['silver'],
    name: 'Suno',
    tagline: 'AI music creation',
    logo: 'SUNO',
    website: 'https://suno.com',
    description: [
      'Suno is building a future where anyone can make great music.',
      "Whether you're a shower singer or a charting artist, we break barriers between you and the song you dream of making. No instrument needed, just imagination. From your mind to music.:"
    ]
  },
  {
    id: 'universal-music-silver',
    tiers: ['silver'],
    name: 'Universal Music',
    tagline: 'The world\'s leading music company',
    logo: 'UMG',
    website: 'https://www.universalmusic.com',
    description: [
      'We are Universal Music Group, the world’s leading music company.',
      'We exist to shape culture through the power of artistry. We are a community of entrepreneurs committed to creativity and innovation. We own and operate a broad array of businesses engaged in recorded music, music publishing, merchandising, and audiovisual content in more than 60 territories. We identify and develop recording artists and songwriters, and we produce, distribute and promote the most critically acclaimed and commercially successful music to delight and entertain fans around the world. Our vast catalog of recordings and songs stretches back over a century and comprises the largest, most diverse and culturally rich collection of music ever assembled. As digital technology refashions the world, our unmatched commitment to lead in developing new services, platforms and business models for the delivery of music and related content empowers innovators and allows new commercial and artistic opportunities to flourish. Knowing that music, a powerful force for good in the world, is unique in its ability to inspire people and bring them together, we work with our artists and employees to serve our communities. We are the home for music’s greatest artists, innovators and entrepreneurs. Together, we are UMG, the Universal Music Group.'
    ]
  },

  // Bronze Sponsors
  {
    id: 'cochl-bronze',
    tiers: ['bronze'],
    name: 'Cochl.',
    tagline: 'Machine listening AI',
    logo: 'Cochl',
    website: 'https://www.cochl.ai',
    description: [
      '',
      'Cochl is a startup pushing the boundaries of machine listening. We provide our cutting-edge technology through APIs and SDKs, with a mission to equip every machine and computer with the general listening abilities of a human. Our solutions are applied across various industries, from smart homes and automotive to manufacturing. We firmly believe that audio contains far more valuable information than just speech and language.'
    ]
  },
  {
    id: 'audible-magic-bronze',
    tiers: ['bronze'],
    name: 'AudiobleMagic',
    tagline: 'Content identification solutions',
    logo: 'Audible Magic',
    website: 'https://www.audiblemagic.com',
    description: [
      'Music for platforms',
      'Audible Magic helps platforms bring music to their users. From social media to gaming to fitness and more, our integrated suite of services enables platforms to offer music services that engage and grow audiences.'
    ]
  },
  {
    id: 'bmat-bronze',
    tiers: ['bronze'],
    name: 'BMAT',
    tagline: 'Music data solutions',
    logo: 'bmat',
    website: 'https://www.bmat.com',
    description: [
      'We connect all players of the industry to amplify the value of music.',
      'Driven by machine learning and copyright expertise, our system pumps neutral data and authoritative knowledge to everyone along the chain. Whether you make or use music, plug in to ease operations, increase earnings, and get in sync with everyone else.'
    ]
  },
  {
    id: 'deezer-bronze',
    tiers: ['bronze', 'wimir-contributor'],
    name: 'Deezer',
    tagline: 'Music streaming platform',
    logo: 'Deezer',
    website: 'https://www.deezer.com',
    description: [
      'Deezer is a French online music streaming service that provides access to millions of songs.',
      'Stream millions of songs, podcasts and radio channels. Access our music app from all of your devices. Discover built-in basic and exclusive features.'
    ]
  },
  {
    id: 'gaudio-bronze',
    tiers: ['bronze'],
    name: 'Gaudio',
    tagline: 'Spatial audio technology',
    logo: 'Gaudio',
    website: 'https://www.gaudiolab.com',
    description: [
      '',
      'Gaudio Lab is a leading AI audio technology company dedicated to delivering superior audio experiences across a wide range of devices and platforms. We develop advanced audio solutions for earbuds, smartphones, VOD, VR/AR, theaters, and automobiles, and our groundbreaking technology is globally recognized and has been adopted into international standards, including ISO/IEC MPEG-H and ANSI/CTA. We are the recipient of numerous accolades, including consecutive CES Innovation Awards (2025, 2024, 2023), have been a finalist for the SXSW Innovation Award (2024), and have been honored with the VR Award for Best VR Innovation Company.'
    ]
  },
  {
    id: 'mippia-bronze',
    tiers: ['bronze'],
    name: 'MIPPIA',
    tagline: 'Music industry platform',
    logo: 'MIPPIA',
    website: 'https://www.mippia.com',
    description: [
      '',
      'Unlike conventional fingerprinting tools, Mippia’s proprietary AI models separate instruments, extract melody, rhythm, harmony, and song structure, and quantify similarity with scientific precision. This approach not only detects plagiarism in remixes, rearrangements, and sampled tracks, but also identifies AI-generated music with 98% accuracy, setting a new global standard for music copyright protection.'
    ]
  },
  {
    id: 'roland-bronze',
    tiers: ['bronze'],
    name: 'Roland',
    tagline: 'Electronic musical instruments',
    logo: 'Roland',
    website: 'https://www.roland.com',
    description: [
      'Roland Corporation is a leading manufacturer of electronic musical instruments, equipment, and software.',
      'We have been inspiring musicians and creators for over 50 years with innovative music technology.'
    ]
  },
  {
    id: 'audai-bronze',
    tiers: ['bronze'],
    name: 'AudAI',
    tagline: 'AI audio solutions',
    logo: 'AudAi',
    website: 'https://audai.co/',
    description: [
      'AudAI specializes in artificial intelligence solutions for audio processing and analysis.',
      'Our technology enables advanced audio understanding and automated content processing.'
    ]
  },
  {
    id: 'piascore-bronze',
    tiers: ['bronze'],
    name: 'Piascore',
    tagline: 'Digital sheet music platform',
    logo: 'piascore',
    website: 'https://piascore.com',
    description: [
      'Piascore is a comprehensive digital sheet music platform for musicians and music educators.',
      'We provide tools for reading, annotating, and sharing digital sheet music across devices.'
    ]
  },
  {
    id: 'neutone-bronze',
    tiers: ['bronze'],
    name: 'Neutone',
    tagline: 'AI audio processing',
    logo: 'neutone',
    website: 'https://neutone.ai/',
    description: [
      'Neutone develops AI-powered audio processing tools and plugins for creative professionals.',
      'Our technology enables new forms of musical expression and sound design.'
    ]
  }
]
