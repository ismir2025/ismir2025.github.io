<template>
  <v-row justify="center" id="tutorials">
    
    <v-col cols="12" md="8">
      
      <v-card outlined elevation="0" class="pa-4 my-4">
        <!-- Table of Contents -->
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
            <!-- Morning Session Header -->
            <v-row class="section-header">
              <v-col cols="12" class="font-weight-bold"
                >Morning (9:00-12:30 KST including break)</v-col
              >
            </v-row>

            <!-- T1 -->
            <v-row
              class="table-row styled-row"
              style="cursor: pointer"
              @click="scrollToSection('tutorial-1')"
            >
              <v-col cols="1" class="text-center font-weight-bold">T1</v-col>
              <v-col
                cols="11"
                style="color: #1487c8; text-decoration: underline"
              >
                Differentiable Physical Modeling Sound Synthesis: Theory,
                Musical Application, and Programming
              </v-col>
            </v-row>
            <!-- T2 -->
            <v-row
              class="table-row styled-row"
              style="cursor: pointer"
              @click="scrollToSection('tutorial-6')"
            >
              <v-col cols="1" class="text-center font-weight-bold">T2</v-col>
              <v-col
                cols="11"
                style="color: #1487c8; text-decoration: underline"
              >
                Self-supervised Learning for Music - An Overview and New Horizons
              </v-col>
            </v-row>
            <!-- T3 -->
            <v-row
              class="table-row styled-row"
              style="cursor: pointer"
              @click="scrollToSection('tutorial-3')"
            >
              <v-col cols="1" class="text-center font-weight-bold">T3</v-col>
              <v-col
                cols="11"
                style="color: #1487c8; text-decoration: underline"
              >
                PsyNet: Online Research Platform for Music Studies
              </v-col>
            </v-row>

            <!-- Afternoon Session Header -->
            <v-row class="section-header mt-4">
              <v-col cols="12" class="font-weight-bold"
                >Afternoon (14:00-17:30 KST including break)</v-col
              >
            </v-row>

            <!-- T4 -->
            <v-row
              class="table-row styled-row"
              style="cursor: pointer"
              @click="scrollToSection('tutorial-5')"
            >
              <v-col cols="1" class="text-center font-weight-bold">T4</v-col>
              <v-col
                cols="11"
                style="color: #1487c8; text-decoration: underline"
              >
                Differentiable Alignment Techniques for Music Processing: Techniques and Applications
              </v-col>
            </v-row>
            <!-- T5 -->
            <v-row
              class="table-row styled-row"
              style="cursor: pointer"
              @click="scrollToSection('tutorial-2')"
            >
              <v-col cols="1" class="text-center font-weight-bold">T5</v-col>
              <v-col
                cols="11"
                style="color: #1487c8; text-decoration: underline"
              >
                Explainable AI for Music Information Retrieval
              </v-col>
            </v-row>
            <!-- T6 -->
            <v-row
              class="table-row styled-row"
              style="cursor: pointer"
              @click="scrollToSection('tutorial-4')"
            >
              <v-col cols="1" class="text-center font-weight-bold">T6</v-col>
              <v-col
                cols="11"
                style="color: #1487c8; text-decoration: underline"
              >
                MIR for Health, Medicine, and Well-being
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <br />
      </v-card>

      <!-- Tutorial 1: Differentiable Physical Modeling -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="tutorial-1">
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Differentiable Physical Modeling Sound Synthesis: Theory, Musical
          Application, and Programming</v-card-title
        >
        <v-card-title class="text-h6 mb-3 highlight-text"
          >Presenters: Jin Woo Lee, Stefan Bilbao, and Rodrigo
          Diaz</v-card-title
        >
        <v-card-text class="text-body">
          <span class="highlight-text">Abstract:</span><br />
          Recent years have witnessed growing interest in bridging traditional
          sound synthesis methods with emerging machine learning technologies.
          This tutorial is motivated by the convergence of two previously
          distinct trajectories in audio research: physics-based sound synthesis
          and data-driven neural approaches. This session highlights how
          differentiable physical modeling opens new avenues for musical sound
          synthesis by combining the interpretability and realism of physical
          simulation with the learning capacity of modern neural networks. The
          tutorial is structured into five segments: an overview of digital
          synthesis history and physical modeling, a detailed introduction to
          finite difference time domain (FDTD) methods across various instrument
          classes, a broad survey of neural architectures relevant to physical
          modeling, an in-depth look at differentiable modeling for parameter
          estimation using automatic differentiation, and a concluding session
          to synthesize key takeaways. Attendees will engage with theoretical
          material, practical demonstrations, and programming exercises, gaining
          hands-on experience in combining physics-based simulation with neural
          networks. This tutorial is designed for researchers and engineers
          interested in advanced sound synthesis, particularly those working in
          musical acoustics, AI-based audio modeling, or digital instrument
          design. It will benefit individuals seeking to build physically
          plausible audio models or hybrid machine learning systems for
          realistic sound generation. All ISMIR members are warmly encouraged to
          attend—whether newcomers or seasoned researchers. The tutorial is
          designed to be approachable rather than overly technical, while still
          offering a deep understanding of how differentiable simulation can
          enhance synthesis fidelity, support neural network training, and
          advance hybrid sound modeling.
          <br /><br />
          <span class="highlight-text">Presenter Bios:</span><br />
          <span class="highlight-text">Jin Woo Lee</span> is currently a
          Postdoctoral Associate at Massachusetts Institute of Technology (MIT).
          He received his PhD degree from Seoul National University, with a
          thesis entitled "Physical Modeling for String Instrument Sound
          Synthesis based on Finite-difference Scheme and Automatic
          Differentiation". His research interest is mainly focused on machine
          learning, physical modeling, and numerical simulation, involving
          audio, music, speech, and acoustics. His works have been presented at
          conferences such as NeurIPS, ICASSP, Interspeech, and WASPAA, as well
          as invited talks at Stanford CCRMA and the University of Iowa.
          Previously, he worked at Meta and Supertone as an intern, and at
          Gaudio Lab as an AI Scientist. <br /><br />
          <span class="highlight-text">Stefan Bilbao</span> (B.A. Physics,
          Harvard, 1992, MSc., PhD Electrical Engineering, Stanford, 1996 and
          2001 respectively) is currently Professor of Acoustics and Audio
          Signal Processing in the Acoustics and Audio Group at the University
          of Edinburgh, and previously held positions at the Sonic Arts Research
          Centre, at the Queen's University Belfast, and the Stanford Space
          Telecommunications and Radioscience Laboratory. He led the ERC-funded
          NESS and WRAM projects between 2012 and 2018. He is an Associate
          Editor of JASA Express Letters, and a Senior Area Editor of the IEEE
          Open Journal of Signal Processing, and was previously an associate
          editor of the IEEE/ACM Transactions on Audio Speech and Language
          Processing. He was awarded the Foreign medal of the French Acoustical
          Society in 2022. He works primarily on problems in acoustic simulation
          and audio signal processing for sound synthesis and room acoustics
          applications. He was born in Montreal, Quebec, Canada. <br /><br />
          <span class="highlight-text">Rodrigo Diaz</span> is a PhD candidate in
          Artificial Intelligence and Music at Queen Mary University of London,
          under the supervision of Prof. Mark Sandler and Dr. Charalampos
          Saitis. His research focuses on real-time audio synthesis using neural
          networks and physics-based modelling. His work has been presented at
          conferences across the audio and computer vision communities,
          including CVPR, ICASSP, IC3D, DAFx, and AES. Before his PhD, he worked
          as a researcher at the Fraunhofer HHI Institute in Berlin, exploring
          volumetric reconstruction from images using neural networks.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Tutorial 6: Self-supervised Learning -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="tutorial-6">
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Self-supervised Learning for Music - An Overview and New
          Horizons</v-card-title
        >
        <v-card-title class="text-h6 mb-3 highlight-text"
          >Presenters: Julien Guinot, Alain Riou, Yuexuan Kong, Marco Pasini,
          Gabriel Meseguer-Brocal, Stefan Lattner</v-card-title
        >
        <v-card-text class="text-body">
          <span class="highlight-text">Abstract:</span><br />
          Self-supervised learning (SSL) has become a foundational paradigm in
          music information retrieval (MIR), enabling robust and scalable
          representation learning without the need for manual annotation. This
          tutorial offers a comprehensive and interactive overview of SSL
          methods in MIR, bridging established techniques with emerging trends
          in the field. In the first half, we introduce key SSL
          approaches—contrastive learning, masked modeling strategies, and other
          methods such as clustering and teacher-student approaches. For each,
          we explore theoretical foundations, music-specific adaptations, and
          practical applications. Interactive coding examples will illustrate
          training small-scale models and exploring the properties of learned
          representations. The second half of the tutorial shifts focus to "new
          horizons" in SSL for music: generative representation learning and
          equivariance. We discuss how generative models both benefit from and
          contribute to representation learning, highlighting common paradigms
          such as next-token prediction and diffusion. Through guided examples,
          attendees will explore how latent spaces in generative models encode
          and structure musical information. We then explore equivariant
          representation learning—both intrinsic and learned—illustrating how
          transformation-aware models can enhance tasks such as pitch, tempo,
          and key estimation, as well as interpretable search affordances and
          the promise for potential generative controllability. Coding sections
          will focus on small-scale implementations and intuitive visualizations
          of embedding dynamics. This tutorial fills a current gap at ISMIR by
          offering both a practical introduction to SSL in MIR and a look ahead
          to emerging directions. It is designed for researchers at all levels
          who want to better understand the landscape of self-supervised
          learning, from core techniques to recent innovations in generative and
          equivariant approaches.
          <br /><br />
          <span class="highlight-text">Presenter Bios:</span><br />
          <span class="highlight-text">Julien Guinot</span> is a second-year PhD
          student at the AI and Music Centre for Doctoral Training at Queen Mary
          University of London, Sponsored By Universal Music Group, under the
          supervision of Dr. György Fazekas, Dr. Emmanouil Benetos, and Dr. Elio
          Quinton. His research interests include representation learning for
          music, with a focus on improving representations and (multimodal) SSL
          approaches for user-centric applications such as controllable
          retrieval. Previously, his work on contrastive learning for music
          representations has been accepted and presented at ISMIR and ICASSP.
          <br /><br />
          <span class="highlight-text">Alain Riou</span> is recent PhD graduate
          previously working on self-supervised learning of musical
          representations at Télécom Paris and Sony CSL - Paris, under the
          supervision of Stefan Lattner, Gaëtan Hadjeres, and Geoffroy Peeters.
          His main research interests are related to deep representation
          learning, with a strong focus on self-supervised methods for music
          information retrieval. His work "PESTO: Pitch Estimation with
          Self-supervised Transposition-equivariant Objective" received the Best
          Paper Award at ISMIR 2023. His recent work on JEPA models applied to
          music has been accepted at ISMIR and ICASSP. <br /><br />
          <span class="highlight-text">Yuexuan Kong</span> is a second-year
          industrial PhD student at Deezer, and a research unit named LS2N of
          CNRS (the French national center for scientific research) at Ecole
          Centrale de Nantes, under the supervision of Dr. Gabriel
          Meseguer-Brocal, Dr. Vincent Lostanlen, Dr. Mathieu Lagrange and Dr.
          Romain Hennequin. Her research focus on self-supervised learning
          applied in music, notably equivariant self-supervised learning and
          contrastive learning. <br /><br />
          <span class="highlight-text">Marco Pasini</span> is a second-year PhD
          student at Queen Mary University of London, in collaboration with Sony
          Computer Science Laboratories - Paris. He is passionate about the
          field of Generative Modeling, especially when applied to the audio
          domain. He previously worked on models such as Musika for fast music
          generation, the Music2Latent series of models for efficient audio
          compression, Diff-A-Riff for accompaniment generation, and the
          Continuous Autoregressive Models generative framework. <br /><br />
          <span class="highlight-text">Gabriel Meseguer-Brocal</span> is a
          research scientist at Deezer with over two years of experience at the
          company. Before joining Deezer, he completed postdoctoral research at
          Centre National de la Recherche Scientifique (CNRS) in France. In
          2020, he earned his Ph.D. in Computer Science, Telecommunications, and
          Electronics with a focus on the Sciences & Technologies of Music and
          Sound at IRCAM. His research interests include signal processing and
          deep learning techniques for music processing, with a focus on areas
          such as source separation, dataset creation, multi-tagging,
          self-supervised learning, and multimodal analysis. <br /><br />
          <span class="highlight-text">Stefan Lattner</span> serves as a
          research leader at the music team at Sony CSL - Paris, where he
          focuses on generative AI for music production, music information
          retrieval, and computational music perception. He earned his PhD in
          2019 from Johannes Kepler University (JKU) in Linz, Austria, following
          his research at the Austrian Research Institute for Artificial
          Intelligence in Vienna and the Institute of Computational Perception
          Linz. His studies centered on the modeling of musical structure,
          encompassing transformation learning and computational relative pitch
          perception. His current interests include human-computer interaction
          in music creation, live staging, and information theory in music. He
          specializes in generative sequence models, computational short-term
          memories, (self-supervised) representation learning, and musical audio
          generation. In 2019, he received the Best Paper Award at ISMIR for his
          work, "Learning Complex Basis Functions for Invariant Representations
          of Audio".
        </v-card-text>


      <!-- Tutorial 3: PsyNet -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="tutorial-3">
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >PsyNet: Online Research Platform for Music Studies</v-card-title
        >
        <v-card-title class="text-h6 mb-3 highlight-text"
          >Presenters: Peter Harrison, Harin Lee, Manuel Anglada-Tort, Pol van
          Rijn, Nori Jacoby</v-card-title
        >
        <v-card-text class="text-body">
          <span class="highlight-text">Abstract:</span><br />
          This tutorial introduces PsyNet, an online research platform that
          enables researchers to quickly collect large, high-quality datasets of
          human responses to music. PsyNet supports a broad range of musical
          paradigms, ranging from simple evaluation tasks (e.g. rating, free
          association) to complex production tasks (e.g. tapping to the beat,
          singing a melody) to human-in-the-loop procedures (e.g. genetic
          algorithms with human participants providing the objective function).
          Seamless integration with cloud services (Amazon Web Services, Heroku)
          and popular crowdsourcing platforms (Amazon Mechanical Turk, Prolific)
          enables researchers to fully automate the recruitment process and
          collect data from hundreds of participants in minutes. A rich
          collection of automated data checks and validation procedures ensures
          high-quality results. Our tutorial is aimed at Music Information
          Retrieval researchers interested in using PsyNet to produce their own
          datasets. We will begin the tutorial with a general overview of
          PsyNet, covering the core building blocks of PsyNet experiments, the
          platform's architecture, and the workflow for deploying experiments.
          We will then present three case studies, each focusing on a key
          challenge within Music Information Retrieval: subjective rating, tag
          generation, and beat tracking. For each case study, we will deploy an
          example experiment and allow attendees to trial it as participants. At
          the end of the workshop, attendees will implement their own simple
          PsyNet experiments, building on simple templates that we provide.
          <br /><br />
          <span class="highlight-text">Presenter Biographies:</span><br />
          <span class="highlight-text">Peter Harrison</span> is an Assistant
          Professor at the Faculty of Music, University of Cambridge, where he
          directs the Centre for Music and Science. He completed his PhD with
          Marcus Pearce at Queen Mary University of London, and his postdoc with
          Nori Jacoby at the Max Planck Institute for Empirical Aesthetics. His
          research involves building and evaluating computational models of
          music cognition, seeking to understand how humans perceive and produce
          music. He also develops methodologies to support such research,
          including software platforms for running online experiments (PsyNet,
          psychTestR) and test batteries for assessing individual musical
          capacities. <br /><br />
          <span class="highlight-text">Harin Lee</span> is a PhD candidate at
          the Max Planck Institute for Human Cognitive and Brain Science under
          the supervision of Marc Schönwiesner and co-supervised by Nori Jacoby
          at the Computational Auditory Perception Group, Max Planck Institute
          for Empirical Aesthetics. His interests concern cross-cultural
          diversity in music and its quantitative analysis. He combines datasets
          of music around the world with large-scale behavioral experiments and
          causal modeling to tackle questions about inter-individual and
          cross-cultural differences in music cognition. <br /><br />
          <span class="highlight-text">Manuel Anglada-Tort</span> is a Lecturer
          in the Department of Psychology at Goldsmiths, University of London,
          and co-director of the Music, Mind, and Brain Group. He completed a
          PhD on Music Cognition at the Technische Universität Berlin and a
          postdoc at the Max Planck Institute for Empirical Aesthetics. His work
          combines computational methods and large-scale behavioural experiments
          to study the cognitive and cultural foundations of music, creativity,
          and aesthetics. <br /><br />
          <span class="highlight-text">Pol van Rijn</span> is a PhD candidate at
          the Max Planck Institute for Empirical Aesthetics, supervised by Nori
          Jacoby. His research combines corpus work and large-scale behavioral
          experiments to investigate the mapping between speech prosody and
          emotion. <br /><br />
          <span class="highlight-text">Nori Jacoby</span> is an assistant
          professor in the Department of Psychology at Cornell University. His
          research focuses on the internal representations that support and
          shape our sensory and cognitive abilities, and on how those
          representations are themselves determined by both nature and nurture.
          He addresses these classic issues with new tools, both by applying
          machine learning techniques to behavioral experiments, and by
          expanding the scale and scope of experimental research via massive
          online experiments and fieldwork in locations around the globe.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Tutorial 5: Differentiable Alignment -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="tutorial-5">
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Differentiable Alignment Techniques for Music Processing: Techniques
          and Applications</v-card-title
        >
        <v-card-title class="text-h6 mb-3 highlight-text"
          >Presenters: Meinard Müller & Johannes Zeitler</v-card-title
        >
        <v-card-text class="text-body">
          <span class="highlight-text">Abstract:</span><br />
          A core strategy in Music Information Retrieval (MIR) is to use
          mid-level representations to connect and analyze music-related
          information across different domains. For example, these
          representations help link audio recordings to symbolic data such as
          pitches, chords, and lyrics. While traditional MIR approaches relied
          on expert knowledge to design these representations, recent advances
          in deep learning have made it possible to learn them directly from
          annotated data. This shift has led to major progress in tasks such as
          music transcription, chord recognition, pitch tracking, version
          identification, and lyrics alignment. A key challenge in training deep
          learning models for these tasks is the limited availability of
          strongly aligned datasets, which provide detailed frame-level
          annotations but are costly and time-consuming to produce. In contrast,
          weakly aligned data offers only coarse segment-level correspondences,
          making it easier to collect but harder to use with standard training
          methods. This tutorial addresses the problem by introducing
          differentiable alignment techniques, which enable models to learn from
          weakly aligned data using alignment-aware and fully differentiable
          loss functions. We begin with an intuitive overview of classical
          methods such as Dynamic Time Warping (DTW), followed by differentiable
          alternatives like Soft-DTW and Connectionist Temporal Classification
          (CTC) loss. The tutorial also introduces key concepts such as convex
          optimization and gradient computation, which are essential for
          integrating these methods into end-to-end learning systems.
          Applications in MIR are illustrated through case studies including
          multi-pitch estimation, transcription, score-audio alignment, and
          cross-version retrieval. This tutorial is intended for a broad
          audience and emphasizes both conceptual clarity and practical
          relevance. It equips participants with a solid understanding of how
          differentiable alignment techniques enable the training of deep models
          using weakly or partially aligned data. These methods are becoming
          increasingly important in MIR and other domains involving time-based
          multimedia data.
          <br /><br />
          <span class="highlight-text">Bio (Meinard Müller):</span><br />
          Meinard Müller received the Diploma degree (1997) in mathematics and
          the Ph.D. degree (2001) in computer science from the University of
          Bonn, Germany. Since 2012, he has held a professorship for Semantic
          Audio Signal Processing at the International Audio Laboratories
          Erlangen, a joint institute of the Friedrich-Alexander-Universität
          Erlangen-Nürnberg (FAU) and the Fraunhofer Institute for Integrated
          Circuits IIS. His recent research interests include music processing,
          music information retrieval, audio signal processing, and motion
          processing. He was a member of the IEEE Audio and Acoustic Signal
          Processing Technical Committee (2010-2015), a member of the Senior
          Editorial Board of the IEEE Signal Processing Magazine (2018-2022),
          and a member of the Board of Directors, International Society for
          Music Information Retrieval (2009-2021, being its president in
          2020/2021). In 2020, he was elevated to IEEE Fellow for contributions
          to music signal processing. Currently, he also serves as
          Editor-in-Chief for the Transactions of the International Society for
          Music Information Retrieval (TISMIR). Besides his scientific research,
          Meinard Müller has been very active in teaching music and audio
          processing. He gave numerous tutorials at major conferences, including
          ICASSP (2009, 2011, 2019) and ISMIR (2007, 2010, 2011, 2014, 2017,
          2019, 2023, 2024). Furthermore, he wrote a monograph titled
          "Information Retrieval for Music and Motion" (Springer 2007) as well
          as a textbook titled "Fundamentals of Music Processing"
          (Springer-Verlag 2015). <br /><br />
          <span class="highlight-text">Bio (Johannes Zeitler):</span><br />
          Johannes Zeitler received his B.Sc. degree in Electrical Engineering
          and his M.Sc. degree in Signal Processing and Communications
          Engineering from Friedrich-Alexander-Universität Erlangen-Nürnberg,
          Germany, in 2019 and 2021, respectively. In 2022, he joined the
          International Audio Laboratories Erlangen, where he is currently
          pursuing his Ph.D. under the supervision of Prof. Meinard Müller. His
          research interests include alignment techniques in music processing.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

    </v-card>
      <!-- Tutorial 2: Explainable AI -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="tutorial-2">
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Explainable AI for Music Information Retrieval</v-card-title
        >
        <v-card-title class="text-h6 mb-3 highlight-text"
          >Presenters: Valerie Krug, Maral Ebrahimzadeh, Tia Bolle, Jan-Ole
          Perschewski, Sebastian Stober</v-card-title
        >
        <v-card-text class="text-body">
          <span class="highlight-text">Abstract:</span><br />
          This tutorial addresses the growing need to understand the
          decision-making processes of Artificial Intelligence (AI) systems with
          Deep Learning (DL) in the sound and music domain. As DL models
          continue to achieve state-of-the-art performance in music recognition,
          generation, and analysis, their lack of transparency poses a
          significant challenge for evaluating trained models and gaining
          insights from them. In response, explainable AI (XAI) techniques have
          emerged as a crucial tool for interpreting and understanding the
          behavior of complex DL models. However, the application of XAI in
          music is still a relatively underexplored area. This tutorial aims to
          bridge this gap by providing a comprehensive introduction to XAI
          methodologies and their application in the music domain. Through a
          combination of theoretical foundations and practical exercises,
          participants will gain a deeper understanding of XAI techniques and
          their potential to enhance the interpretability and transparency of DL
          models in music. The tutorial will cover the current state of XAI in
          music, discuss challenges and opportunities, and provide hands-on
          experience with applying XAI techniques to real-world music use cases.
          This tutorial is suitable for researchers and practitioners looking to
          expand their skills in XAI and its applications in music. A basic
          understanding of DL concepts is recommended, but no prior experience
          with XAI is required. For the practical exercises, prior knowledge of
          Python and PyTorch is beneficial.
          <br /><br />
          <span class="highlight-text">Presenter Bios:</span><br />
          <span class="highlight-text">Valerie Krug</span> is postdoctoral
          researcher and lecturer at the Artificial Intelligence Lab at the Otto
          von Guericke University Magdeburg, Germany. She has a background in
          natural and computer sciences and earned her PhD in the field of
          explainable AI in 2024. Valerie develops techniques to analyze and
          visualize how deep neural networks perform their tasks, including
          novel methods that are inspired by cognitive neuroscience. Her work is
          driven by the aim to help humans and AI to understand each other
          better. <br /><br />
          <span class="highlight-text">Maral Ebrahimzadeh</span> is a PhD
          researcher and lecturer at the Artificial Intelligence Lab at the Otto
          von Guericke University Magdeburg, Germany. Her current research
          focuses on exploring and investigating approaches for conditional
          symbolic music generation. She is also interested in exploring
          practical applications in gaming by leveraging both symbolic music and
          musical signal features. Maral earned her Master's degree in
          Artificial Intelligence from Iran University of Science and Technology
          (IUST), where she conducted research on music fingerprinting at the
          Audio and Speech Processing Lab. <br /><br />
          <span class="highlight-text">Tia Bolle</span> is a master's student in
          computer science and student assistant at the Artificial Intelligence
          Lab at the Otto von Guericke University Magdeburg, Germany. Tia is a
          music enthusiast and produces music themselves and with a local band.
          The focus of their research lies in AI in creative processes and
          privacy/security. Tia also participated in the AI Song Contest in
          2023. Their main instrument is the electric bass. <br /><br />
          <span class="highlight-text">Jan-Ole Perschewski</span> is a PhD
          researcher at the Artificial Intelligence Lab at the Otto von Guericke
          University Magdeburg, Germany. He researches on how to find
          interesting projections to increase performance and understandability
          of deep neural networks. <br /><br />
          <span class="highlight-text">Sebastian Stober</span> is professor for
          Artificial Intelligence at the Otto von Guericke University Magdeburg,
          Germany. He received his PhD on the topic of adaptive methods for
          user-centered organization of music collections in 2011. From 2013 to
          2015, he was postdoctoral fellow at the Brain and Mind Institute in
          London, Ontario where he pioneered deep learning techniques for
          studying brain activity during music perception and imagination.
          Afterwards, he was head of the Machine Learning in Cognitive Science
          Lab at the University of Potsdam, before returning to Magdeburg in
          2018. In his current research, he investigates and develops generative
          models for music and speech as well as methods to better understand
          what an AI has learned and how it solves specific problems. To this
          end, he combines the fields of AI and machine learning with cognitive
          neuroscience and music information retrieval. Sebastian has been
          active in the field of Music Information Retrieval since 2006 - for
          instance as co-organizer for several international workshops on
          Learning Semantics of Audio Signals (LSAS 2006-2009) and Adaptive
          Multimedia Retrieval (AMR 2007-2012) as well as the monthly Berlin
          Music Information Retrieval Meetup (2017-2020).
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Tutorial 4: MIR for Health -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="tutorial-4">
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >MIR for Health, Medicine, and Well-being</v-card-title
        >
        <v-card-title class="text-h6 mb-3 highlight-text"
          >Presenters: Anja Volk, Elaine Chew, Michael A. Casey</v-card-title
        >
        <v-card-text class="text-body">
          <span class="highlight-text">Abstract:</span><br />
          This tutorial provides an overview of emerging opportunities to
          develop and employ methods from Music Information Research for music,
          health, medicine and wellbeing. Music-based interventions are gaining
          recognition as a fertile domain for research, alongside rapidly
          growing developments in music technology to support music's
          affordances for health and well-being. We provide an overview and
          introduction for the MIR community to the potential contributions of
          computational methods to this field. The tutorial introduces examples
          of existing research and shows avenues for future directions,
          employing MIR's rich tradition of computational analysis of musical
          structures in different health settings. The three parts of the
          tutorial provide an overview on the topics of:
          <br /><br />
          (1) MIR for Music Therapy (e.g. technologies for analyzing musical
          structures from clinical improvisations; for generating music
          targeting specific therapeutic functions; for supporting music-based
          training in between therapy sessions at home) (2) MIR in Music Heart
          Theranostics (use of music in digital therapeutics and precision
          diagnostics for cardiovascular health and disease; data and software
          tools for music and cardiovascular signals); (3) Neurology and Music
          Information in Epilepsy Research (e.g. studying music & neurology in
          clinical settings; joint analysis of iEEG and music features;
          biomarkers of music processing in iEEG).
          <br /><br />
          We reflect on the potential of MIR to support research into the
          effectiveness of music in the health context, employing computational
          analysis of musical, physiological, and behavioural data in
          researching underlying mechanisms of music interventions. The tutorial
          offers connections between established MIR topics (such as audio
          signal processing, symbolic music processing, pattern detection), and
          their applications in healthcare through interdisciplinary
          collaborations between MIR, music cognition, neuroscience, musicology,
          medicine, music therapy, and related fields. We keep the technical
          details at an introductory level and expect the tutorial to be
          suitable for established and new MIR researchers.
          <br /><br />
          <span class="highlight-text">Biographies of the presenters:</span
          ><br />
          <span class="highlight-text">Anja Volk</span> is Professor of Music
          Information Computing at Utrecht University, her research aims at
          enhancing our understanding of music as a fundamental human trait
          while applying these insights for developing music technologies that
          offer new ways of interacting with music. Her research comprises a
          broad spectrum of research questions from theoretical to
          technology-related issues, engaging areas such as computational music
          analysis, computational musicology, mathematical music theory, music
          cognition, and music technology for health, wellbeing and inclusion.
          She is committed to connecting different research communities and
          providing interdisciplinary education for the next generation through
          the organization of international workshops, such as Lorentz Center in
          Leiden workshops on music similarity, computational ethnomusicology,
          and music, computing, and health. She has co-founded several
          international initiatives, most notably the International Society for
          Mathematics and Computation in Music (SMCM), the international WIMIR
          mentoring program, and the flagship journal of the International
          Society for Music Information Retrieval (TISMIR). <br /><br />
          <span class="highlight-text">Elaine Chew</span> is Professor of
          Engineering at King's College London, with equal joint appointments in
          the Department of Engineering and School of Biomedical Engineering &
          Imaging Sciences. An operations researcher and pianist by training,
          Elaine is a pioneering researcher in MIR, focussing on mathematical
          representations and computational techniques for decoding musical
          structures. She is forging new paths at the intersection of music and
          cardiovascular science, applying MIR techniques to music-heart-brain
          interaction and computational arrhythmia research. She founded the
          Music Theranostics Lab at King's, where she directs research on
          music-based digital therapeutics and precision diagnostics. Her
          research has been recognised by the ERC, PECASE, NSF CAREER, (Harvard)
          Radcliffe Institute for Advanced Study, and the Falling Walls Science
          Breakthrough 2023 (Art & Science) Award. <br /><br />
          <span class="highlight-text">Michael Casey</span> is the Francis and
          Mildred Sears Professor in Computer Science and Music at Dartmouth,
          USA. Fusing MIR, neuroimaging (fMRI, ECoG), and music theory, his
          research explores MIR-based methods (recommender and generative
          systems) to create listening programs for patients with neurological
          disorders. He is working with multiple hospitals (Dartmouth-Hitchcock
          and Amherst Medical Center) to create individualized music therapies
          for epilepsy patients implanted with responsive neurostimulation (RNS)
          devices–thereby enabling possibilities for synchronized brain data
          collection and neuro-responsive music therapy. Funding for his
          research has been awarded by the National Science Foundation (NSF),
          the Mellon Foundation, the National Endowment for the Humanities
          (NEH), the Neukom Institute for Computational Science, industry, and
          the Engineering and Physical Sciences Research Council (EPSRC, UK).
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>



      <br /><br /><br /><br /><br />
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      expandedPanels: [], // 현재 확장된 패널을 관리하는 배열
      sections: [
        {
          items: [],
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
.dot-list {
  list-style-type: disc; /* 글머리 기호 스타일 설정 */
  font-size: 18px;
  padding-left: 40px; /* 들여쓰기 값 조정 */
  line-height: 1.8;
}
.text-body {
  font-size: 18px; /* 텍스트 폰트 크기 조정 */
  line-height: 1.6; /* 가독성을 위한 줄 간격 조정 */
  white-space: normal; /* 줄바꿈을 허용 */
  overflow-wrap: break-word; /* 단어가 줄을 넘지 않도록 단어 단위로 줄바꿈 */
}
.v-card-title {
  white-space: normal; /* 제목에서 줄바꿈을 허용 */
  overflow-wrap: break-word; /* 단어가 잘리지 않도록 줄바꿈 */
}
.styled-row {
  border-bottom: 1px solid #d3d3d3; /* 회색 줄 */
  padding-bottom: 8px; /* 줄과 내용 간 여백 */
}
/* Notion 스타일의 코드 블록 */
.code-block {
  background-color: #f5f5f5; /* 연한 회색 배경 */
  border: 1px solid #e0e0e0; /* 연한 테두리 */
  border-radius: 4px; /* 모서리를 둥글게 */
  padding: 12px; /* 내부 여백 */
  font-family: "Noto Sans", sans-serif; /* Noto Sans 폰트 */
  font-size: 14px; /* 적당한 크기의 텍스트 */
  overflow-x: auto; /* 긴 코드에 스크롤 추가 */
  white-space: pre-wrap; /* 코드 줄 바꿈 */
}
.highlight-text {
  color: #004191;
  font-weight: bold;
}
.section-header {
  background-color: #e9ecef;
  padding: 8px 0;
}
</style>
