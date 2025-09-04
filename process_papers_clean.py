# -*- coding: utf-8 -*-
import json
import csv
import re

def get_perfect_authors(paper_id):
    """Hardcoded function for perfect processing of papers 1-98 with clean affiliations"""
    
    perfect_mapping = {
        # Papers 1-20
        "4": "Johannes Zeitler(International Audio Laboratories Erlangen);Meinard Müller(International Audio Laboratories Erlangen)",
        
        "7": "Ben Hayes(Queen Mary University of London);Charalampos Saitis(Queen Mary University of London);György Fazekas(Queen Mary University of London)",
        
        "10": "Jonathan Yaffe(Tel Aviv University);Ben Maman(International Audio Laboratories Erlangen);Meinard Müller(International Audio Laboratories Erlangen);Amit H. Bermano(Tel Aviv University)",
        
        "14": "Haven Kim(University of California San Diego);Zachary Novack(University of California San Diego);Weihan Xu(Duke University);Julian McAuley(University of California San Diego);Hao-Wen Dong(University of Michigan)",
        
        "25": "Junyan Jiang(NYU Shanghai);Daniel Chin(NYU Shanghai);Liwei Lin(NYU Shanghai);Xuanjie Liu(MBZUAI);Gus Xia(NYU Shanghai)",
        
        "26": "Sunyoo Kim(Seoul National University);Yunjeong Choi(Seoul National University);Doyeon Lee(Seoul National University);Seoyoung Lee(University of Texas at Austin);Eunyi Lyou(Seoul National University);Seungju Kim(Sookmyung Women's University);Junhyug Noh(Ewha Womans University);Joonseok Lee(Seoul National University)",
        
        "32": "Weihan Xu(Duke University);Julian McAuley(UC San Diego);Taylor Berg-Kirkpatrick(UC San Diego);Shlomo Dubnov(UC San Diego);Hao-Wen Dong(University of Michigan)",
        
        "33": "Roser Batlle-Roca(Universitat Pompeu Fabra);Laura Ibáñez-Martínez(Universitat Pompeu Fabra);Xavier Serra(Universitat Pompeu Fabra);Emilia Gómez(Universitat Pompeu Fabra);Martín Rocamora(Universitat Pompeu Fabra)",
        
        "38": "Zhaokai Wang(Shanghai Jiao Tong University);Chenxi Bao(DynamiX);Le Zhuo(The Chinese University of Hong Kong);Jingrui Han(Beijing Film Academy);Yang Yue(Tsinghua University);Yihong Tang(McGill University);Victor Shea-Jay Huang(The Chinese University of Hong Kong);Yue Liao(National University of Singapore)",
        
        "46": "Simon Schwär(International Audio Laboratories Erlangen);Stefan Balke(International Audio Laboratories Erlangen);Meinard Müller(International Audio Laboratories Erlangen)",
        
        "47": "Julien Guinot(Queen Mary University of London);Alain Riou(Télécom-Paris);Elio Quinton(Universal Music Group);György Fazekas(Queen Mary University of London)",
        
        "48": "Julien Guinot(Queen Mary University of London);Elio Quinton(Universal Music Group);György Fazekas(Queen Mary University of London)",
        
        "50": "Brian McFee(New York University)",
        
        "53": "Tom Baker(University Of Manchester);Javier Nistal(Sony CSL)",
        
        "59": "Junghyun Koo(Sony AI);Marco A. Martínez-Ramírez(Sony AI);Wei-Hsiang Liao(Sony AI);Giorgio Fabbro(Sony Europe B.V.);Michele Mancusi(Sony Europe B.V.);Yuki Mitsufuji(Sony AI)",
        
        "64": "Yixiao Zhang(Queen Mary University of London);Yukara Ikemiya(Sony AI);Woosung Choi(Sony AI);Naoki Murata(Sony AI);Marco A. Martínez-Ramírez(Sony AI);Liwei Lin(MBZUAI);Gus Xia(MBZUAI);Wei-Hsiang Liao(Sony AI);Yuki Mitsufuji(Sony AI);Simon Dixon(Queen Mary University of London)",
        
        "66": "Jun-You Wang(Academia Sinica);Li Su(Academia Sinica)",
        
        "67": "Yiwei Ding(University of Würzburg);Yannik Venohr(University of Würzburg);Christof Weiß(University of Würzburg)",
        
        "70": "Juan C. Martinez-Sevilla(University of Alicante);Joan Cerveto-Serrano(University of Alicante);Noelia Luna(University of Alicante);Greg Chapman(Self-employed);Craig Sapp(Stanford University);David Rizo(University of Alicante);Jorge Calvo-Zaragoza(University of Alicante)",
        
        "74": "Guillem Cortès-Sebastià(BMAT Licensing S.L.);Benjamin Martin(Deezer Research);Emilio Molina(BMAT Licensing S.L.);Xavier Serra(Universitat Pompeu Fabra);Romain Hennequin(Deezer Research)",
        
        # Papers 21-40
        "75": "Alexander Wang(University of Washington);Chris Donahue(Carnegie Mellon University);Dhruv Jain(University of Washington)",
        
        "77": "Lidia Morris(University of Washington);Michele Newman(University of Washington);Xinya Tang(University of Washington);Renee Singh(University of Washington);Marcel Vélez Vásquez(University of Washington);Rebecca Leger(University of Washington);Jin Ha Lee(University of Washington)",
        
        "79": "Filip Korzeniowski(Linz Institute of Technology);Richard Vogl(Linz Institute of Technology)",
        
        "87": "Yonghyun Kim(Korea Advanced Institute of Science and Technology);Junhyung Park(Korea Advanced Institute of Science and Technology);Joonhyung Bae(Korea Advanced Institute of Science and Technology);Kirak Kim(Korea Advanced Institute of Science and Technology);Taegyun Kwon(Korea Advanced Institute of Science and Technology);Alexander Lerch(Georgia Institute of Technology);Juhan Nam(Korea Advanced Institute of Science and Technology)",
        
        "88": "Qi He(New York University Shanghai);Gus Xia(New York University Shanghai);Ziyu Wang(New York University Shanghai)",
        
        "89": "Sebastian Murgul(Karlsruhe Institute of Technology);Johannes Schimper(Karlsruhe Institute of Technology);Michael Heizmann(Karlsruhe Institute of Technology)",
        
        "92": "Jiyun Park(Korea Advanced Institute of Science and Technology);Carlos Cancino-Chacón(Linz Institute of Technology);Suhit Chiruthapudi(Korea Advanced Institute of Science and Technology);Juhan Nam(Korea Advanced Institute of Science and Technology)",
        
        "101": "Meng Yang(Monash University);Jon McCormack(Monash University);Maria Teresa Llano(Queen Mary University of London);Wanchao Su(Monash University)",
        
        "103": "Oleg Lesota(Johannes Kepler University Linz);Veronica Clavijo(Johannes Kepler University Linz);Attia Rizwani(Johannes Kepler University Linz);Markus Schedl(Johannes Kepler University Linz);Bruce Ferwerda(Jönköping University)",
        
        "105": "Jaeran Choi(Korea Advanced Institute of Science and Technology);Taegyun Kwon(Korea Advanced Institute of Science and Technology);Juhan Nam(Korea Advanced Institute of Science and Technology)",
        
        "111": "Louis Bradshaw(Goldsmiths, University of London);Honglu Fan(Goldsmiths, University of London);Alexander Spangher(New York University);Stella Biderman(EleutherAI);Simon Colton(Goldsmiths, University of London)",
        
        "112": "Patrice Thibaud(University of Lille);Mathieu Giraud(University of Lille);Yann Teytaut(University of Lille)",
        
        "113": "Juan Carlos Martinez-Sevilla(University of Alicante);Francesco Foscarin(Linz Institute of Technology);Patricia Garcia(University of Alicante);David Rizo(University of Alicante);Jorge Calvo-Zaragoza(University of Alicante);Gerhard Widmer(Linz Institute of Technology)",
        
        "116": "Zakaria Hassein Bey(University of Lille);Yohann Abbou(University of Lille);Alexandre D'hooge(University of Lille);Mathieu Giraud(University of Lille);Gilles Guillemain(University of Lille);Aurélien Jeanneau(University of Lille)",
        
        "122": "Yannik Venohr(University of Würzburg);Yiwei Ding(University of Würzburg);Christof Weiß(University of Würzburg)",
        
        "125": "Pascal Schmolenzky(University of Erlangen-Nuremberg);Stephanie Klauk(University of Erlangen-Nuremberg);Rainer Kleinertz(University of Erlangen-Nuremberg);Christof Weiß(University of Würzburg);Meinard Müller(International Audio Laboratories Erlangen)",
        
        "127": "Alia Morsi(Universitat Pompeu Fabra);Suhit Chiruthapudi(Korea Advanced Institute of Science and Technology);Silvan Peter(Universitat Pompeu Fabra);Ivan Pilkov(Universitat Pompeu Fabra);Laura Bishop(Universitat Pompeu Fabra);Akira Maezawa(Universitat Pompeu Fabra);Xavier Serra(Universitat Pompeu Fabra);Carlos Eduardo Cancino-Chacón(Linz Institute of Technology)",
        
        "128": "Oleg Lesota(Johannes Kepler University Linz);Anna Hausberger(Johannes Kepler University Linz);Ivanna Pshenychna(Johannes Kepler University Linz);Oleksandr Shvydanenko(Johannes Kepler University Linz);Olha Yehorova(Johannes Kepler University Linz);Markus Schedl(Johannes Kepler University Linz)",
        
        "129": "Hayeon Bang(Korea Advanced Institute of Science and Technology);Eunjin Choi(Korea Advanced Institute of Science and Technology);Seungheon Doh(Korea Advanced Institute of Science and Technology);Juhan Nam(Korea Advanced Institute of Science and Technology)",
        
        "130": "Philipp Weyers(International Audio Laboratories Erlangen);Christian Uhle(International Audio Laboratories Erlangen);Meinard Müller(International Audio Laboratories Erlangen);Matthias Lang(International Audio Laboratories Erlangen)",
        
        # Papers 41-60
        "133": "Matteo Pettenò(Università di Trento);Alessandro Ilic Mezza(Università di Trento);Alberto Bernardini(Università di Trento)",
        
        "135": "Ching-Yu Chiu(International Audio Laboratories Erlangen);Sebastian Strahl(International Audio Laboratories Erlangen);Meinard Müller(International Audio Laboratories Erlangen)",
        
        "137": "Takayuki Nakatsuka(National Institute of Advanced Industrial Science and Technology);Masahiro Hamasaki(National Institute of Advanced Industrial Science and Technology);Masataka Goto(National Institute of Advanced Industrial Science and Technology)",
        
        "138": "Maziar Kanani(University College Dublin);Sean O'Leary(University College Dublin);James McDermott(University College Dublin)",
        
        "140": "Jonathan Myers(Columbia University);Dard Neuman(Columbia University)",
        
        "141": "Marco Pasini(Queen Mary University of London);Stefan Lattner(Sony CSL);György Fazekas(Queen Mary University of London)",
        
        "147": "Yutong Wen(University of Illinois Urbana-Champaign);Minje Kim(Indiana University Bloomington);Paris Smaragdis(University of Illinois Urbana-Champaign)",
        
        "148": "Yen-Tung Yeh(Sony AI);Junghyun Koo(Sony AI);Marco A. Martínez-Ramírez(Sony AI);Wei-Hsiang Liao(Sony AI);Yi-Hsuan Yang(Academia Sinica);Yuki Mitsufuji(Sony AI)",
        
        "150": "Ziyu Wang(New York University Shanghai);Yuxuan Wu(New York University Shanghai);Roger B. Dannenberg(Carnegie Mellon University);Gus Xia(New York University Shanghai)",
        
        "159": "Hitoshi Suda(Sony Group Corporation);Junya Koguchi(Sony Group Corporation);Shunsuke Yoshida(Sony Group Corporation);Tomohiko Nakamura(Sony Group Corporation);Satoru Fukayama(Sony Group Corporation);Jun Ogata(Sony Group Corporation)",
        
        "163": "Yash Bhake(Indian Institute of Technology Bombay);Ankit Anand(Indian Institute of Technology Bombay);Preeti Rao(Indian Institute of Technology Bombay)",
        
        "167": "Qingyang (Tom) Xi(New York University);Brian McFee(New York University)",
        
        "177": "Juan P. Martinez-Esteso(University of Alicante);Alejandro Galan-Cuenca(University of Alicante);Carlos Pérez-Sancho(University of Alicante);Francisco J. Castellanos(University of Alicante);Antonio Javier Gallego(University of Alicante)",
        
        "186": "R. Oguz Araz(Universitat Pompeu Fabra);Guillem Cortès-Sebastià(BMAT Licensing S.L.);Emilio Molina(BMAT Licensing S.L.);Joan Serrà(Universitat Pompeu Fabra);Xavier Serra(Universitat Pompeu Fabra);Yuki Mitsufuji(Sony AI);Dmitry Bogdanov(Universitat Pompeu Fabra)",
        
        "188": "Eunjin Choi(Korea Advanced Institute of Science and Technology);Hyerin Kim(Korea Advanced Institute of Science and Technology);Jiwoo Ryu(Korea Advanced Institute of Science and Technology);Juhan Nam(Korea Advanced Institute of Science and Technology);Dasaem Jeong(Korea Advanced Institute of Science and Technology)",
        
        "191": "Genís Plaja-Roglans(Universitat Pompeu Fabra);Xavier Serra(Universitat Pompeu Fabra);Martín Rocamora(Universitat Pompeu Fabra)",
        
        "199": "Hans Ulrich Berendes(International Audio Laboratories Erlangen);Ben Maman(International Audio Laboratories Erlangen);Meinard Müller(International Audio Laboratories Erlangen)",
        
        "208": "Jingjing Tang(Queen Mary University of London);Xin Wang(National Institute of Informatics);Zhe Zhang(Queen Mary University of London);Junichi Yamagishi(National Institute of Informatics);Geraint Wiggins(Queen Mary University of London);György Fazekas(Queen Mary University of London)",
        
        "210": "Angelos Nikolaos Kanatas(National Technical University of Athens);Charilaos Papaioannou(National Technical University of Athens);Alexandros Potamianos(National Technical University of Athens)",
        
        "211": "António Sá Pinto(University of Porto)",
        
        # Papers 61-80
        "212": "Hilda Romero-Velo(University of A Coruña);Gilberto Bernardes(University of Porto);Susana Ladra(University of A Coruña);José R. Paramá(University of A Coruña);Fernando Silva-Coira(University of A Coruña)",
        
        "213": "Charilaos Papaioannou(National Technical University of Athens);Emmanouil Benetos(Queen Mary University of London);Alexandros Potamianos(National Technical University of Athens)",
        
        "216": "Yuexuan Kong(Deezer Research);Gabriel Meseguer-Brocal(Deezer Research);Vincent Lostanlen(CNRS);Mathieu Lagrange(CNRS);Romain Hennequin(Deezer Research)",
        
        "219": "Markus Frohmann(Johannes Kepler University Linz);Elena V. Epure(Deezer Research);Gabriel Meseguer-Brocal(Deezer Research);Markus Schedl(Johannes Kepler University Linz);Romain Hennequin(Deezer Research)",
        
        "220": "Roman B. Gebhardt(Max Planck Institute for Empirical Aesthetics);Arne Kuhle(Max Planck Institute for Empirical Aesthetics);Eylül Bektur(Max Planck Institute for Empirical Aesthetics)",
        
        "221": "Saurjya Sarkar(Queen Mary University of London);Victoria Moomjian(Queen Mary University of London);Basil Woods(Queen Mary University of London);Emmanouil Benetos(Queen Mary University of London);Mark Sandler(Queen Mary University of London)",
        
        "227": "Xiaoxuan Wang(École Polytechnique Fédérale de Lausanne);Martin Rohrmeier(École Polytechnique Fédérale de Lausanne)",
        
        "229": "Darius Afchar(Deezer Research);Gabriel Meseguer-Brocal(Deezer Research);Kamil Akesbi(Deezer Research);Romain Hennequin(Deezer Research)",
        
        "233": "Kun Fang(McGill University);Hanwen Zhang(McGill University);Ziyu Wang(New York University Shanghai);Ichiro Fujinaga(McGill University)",
        
        "238": "Manuel Müllerschön(Yousician Oy);Anssi Klapuri(Yousician Oy);Marcelo Rodríguez(Yousician Oy);Christian Cardin(Yousician Oy)",
        
        "244": "Mathias Rose Bjare(Linz Institute of Technology);Stefan Lattner(Sony CSL);Gerhard Widmer(Linz Institute of Technology)",
        
        "245": "Jackson Loth(Queen Mary University of London);Pedro Sarmento(Queen Mary University of London);Saurjya Sarkar(Queen Mary University of London);Zixun Guo(Queen Mary University of London);Mathieu Barthet(Queen Mary University of London);Mark Sandler(Queen Mary University of London)",
        
        "246": "Yinghao Ma(Queen Mary University of London);Siyou Li(Queen Mary University of London);Juntao Yu(Queen Mary University of London);Emmanouil Benetos(Queen Mary University of London);Akira Maezawa(Universitat Pompeu Fabra)",
        
        "247": "Jaehun Kim(Spotify);Matthew C. McCallum(Spotify);Andreas F. Ehmann(Spotify)",
        
        "248": "Davide Marincione(Sapienza University of Rome);Giorgio Strano(Sapienza University of Rome);Donato Crisostomi(Sapienza University of Rome);Roberto Ribuoli(Sapienza University of Rome);Emanuele Rodolà(Sapienza University of Rome)",
        
        "256": "Parampreet Singh(Indian Institute of Technology Ropar);Adwik Gupta(Indian Institute of Technology Ropar);Aakarsh Mishra(Indian Institute of Technology Ropar);Vipul Arora(Indian Institute of Technology Ropar)",
        
        "259": "Omar Eldeeb(University of California Santa Barbara);Martin E. Malandro(University of California Santa Barbara)",
        
        "261": "Frank Cwitkowitz(University of Rochester);Zhiyao Duan(University of Rochester)",
        
        "264": "Martin Rohrmeier(École Polytechnique Fédérale de Lausanne);Markus Neuwirth(University of Cologne)",
        
        "266": "Marcel A. Vélez Vásquez(University of Washington);Mariëlle Baelemans(University of Amsterdam);Jonathan Driedger(University of Amsterdam);John Ashley Burgoyne(University of Amsterdam)",
        
        # Papers 81-98
        "268": "Andrea Poltronieri(Universitat Pompeu Fabra);Xavier Serra(Universitat Pompeu Fabra);Martín Rocamora(Universitat Pompeu Fabra)",
        
        "269": "Giorgio Strano(Sapienza University of Rome);Chiara Ballanti(Sapienza University of Rome);Donato Crisostomi(Sapienza University of Rome);Michele Mancusi(Sony Europe B.V.);Luca Cosmo(Sapienza University of Rome);Emanuele Rodolà(Sapienza University of Rome)",
        
        "274": "Sarah Nabi(Sorbonne University);Nils Demerlé(Sorbonne University);Geoffroy Peeters(Télécom-Paris);Frédéric Bevilacqua(IRCAM);Philippe Esling(Sorbonne University)",
        
        "278": "Peter Van Kranenburg(Meertens Institute);Gerben Bisschop(Meertens Institute)",
        
        "280": "Fathinah Izzati(New York University Shanghai);Xinyue Li(New York University Shanghai);Gus Xia(New York University Shanghai)",
        
        "281": "Tao Tao He(University of California Santa Barbara);Martin E. Malandro(University of California Santa Barbara);Douglas Shadle(Vanderbilt University)",
        
        "283": "Haokun Tian(Queen Mary University of London);Stefan Lattner(Sony CSL);Charalampos Saitis(Queen Mary University of London)",
        
        "284": "Vojtěch Lanz(Charles University);Jan Hajič Jr.(Charles University)",
        
        "286": "Harin Lee(Max Planck Institute for Empirical Aesthetics);Elif Çelen(Max Planck Institute for Empirical Aesthetics);Peter Harrison(Queen Mary University of London);Manuel Anglada-Tort(Max Planck Institute for Empirical Aesthetics);Pol Van Rijn(Max Planck Institute for Empirical Aesthetics);Minsu Park(Max Planck Institute for Empirical Aesthetics);Marc Schönwiesner(Max Planck Institute for Empirical Aesthetics);Nori Jacoby(Max Planck Institute for Empirical Aesthetics)",
        
        "293": "Šimon Libřický(Charles University);Jan Hajič Jr.(Charles University)",
        
        "298": "David Marttila(Queen Mary University of London);Joshua D. Reiss(Queen Mary University of London)",
        
        "300": "Richa Namballa(New York University);Agnieszka Roginska(New York University);Magdalena Fuentes(New York University)",
        
        "308": "Yongyi Zang(UC San Diego);Sean O'Brien(UC San Diego);Taylor Berg-Kirkpatrick(UC San Diego);Julian McAuley(UC San Diego);Zachary Novack(UC San Diego)",
        
        "312": "Aditya Bhattacharjee(Queen Mary University of London);Ivan Meresman Higgs(Queen Mary University of London);Mark Sandler(Queen Mary University of London);Emmanouil Benetos(Queen Mary University of London)",
        
        "314": "Yichen Huang(University of Washington);Zachary Novack(UC San Diego);Koichi Saito(Sony AI);Jiatong Shi(Carnegie Mellon University);Shinji Watanabe(Carnegie Mellon University);Yuki Mitsufuji(Sony AI);John Thickstun(University of Washington);Chris Donahue(Carnegie Mellon University)",
        
        "316": "Patrick O'Reilly(Northwestern University);Julia Barnett(Northwestern University);Hugo Flores Garcia(Descript);Annie Chu(Northwestern University);Nathan Pruyne(Northwestern University);Prem Seetharaman(Descript);Bryan Pardo(Northwestern University)",
        
        "321": "Lancelot Blanchard(MIT);Perry Naseck(MIT);Stephen Brade(MIT);Kimaya Lecamwasam(MIT);Jordan Rudess(Wizard Music);Cheng-Zhi Anna Huang(Google DeepMind);Joseph Paradiso(MIT)",
        
        "339": "Patricia Hu(Linz Institute of Technology);Silvan David Peter(Universitat Pompeu Fabra);Jan Schlüter(Linz Institute of Technology);Gerhard Widmer(Linz Institute of Technology)"
    }
    
    return perfect_mapping.get(paper_id, None)

def process_papers_perfect_clean():
    """Function to perfectly process papers 1-98 with clean affiliations"""
    
    # Read JSON file
    with open('public/AcceptedPapers.json', 'r', encoding='utf-8') as f:
        json_data = json.load(f)
    
    # Target paper IDs for 1-98
    target_ids = ["4", "7", "10", "14", "25", "26", "32", "33", "38", "46", "47", "48", "50", "53", "59", "64", "66", "67", "70", "74",  # 1-20
                  "75", "77", "79", "87", "88", "89", "92", "101", "103", "105", "111", "112", "113", "116", "122", "125", "127", "128", "129", "130",  # 21-40
                  "133", "135", "137", "138", "140", "141", "147", "148", "150", "159", "163", "167", "177", "186", "188", "191", "199", "208", "210", "211",  # 41-60
                  "212", "213", "216", "219", "220", "221", "227", "229", "233", "238", "244", "245", "246", "247", "248", "256", "259", "261", "264", "266",  # 61-80
                  "268", "269", "274", "278", "280", "281", "283", "284", "286", "293", "298", "300", "308", "312", "314", "316", "321", "339"]  # 81-98
    
    # Result list
    result_papers = []
    
    # Process papers with target IDs
    processed_count = 0
    for paper in json_data:
        paper_id = paper['﻿Paper ID']
        paper_title = paper['Paper Title']
        json_authors = paper['Authors']
        
        if paper_id in target_ids:
            processed_count += 1
            print(f"\n=== Paper {processed_count}: ID {paper_id} ===")
            print(f"Title: {paper_title}")
            print(f"JSON Authors: {json_authors}")
            
            # Get perfect author information
            perfect_authors = get_perfect_authors(paper_id)
            
            if perfect_authors:
                print(f"Perfect Authors: {perfect_authors}")
                result_papers.append({
                    "Paper ID": paper_id,
                    "Paper Title": paper_title,
                    "Authors": perfect_authors
                })
            else:
                print(f"No perfect mapping found, using original: {json_authors}")
                result_papers.append({
                    "Paper ID": paper_id,
                    "Paper Title": paper_title,
                    "Authors": json_authors
                })
    
    # Save results to new JSON file (in public folder)
    with open('public/AcceptedPapersV2.json', 'w', encoding='utf-8') as f:
        json.dump(result_papers, f, ensure_ascii=False, indent=4)
    
    print(f"\n\nCompleted! public/AcceptedPapersV2.json file created. ({len(result_papers)} papers processed)")

if __name__ == "__main__":
    process_papers_perfect_clean() 