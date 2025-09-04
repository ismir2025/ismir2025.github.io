# -*- coding: utf-8 -*-
import json
import csv
import re

def get_hardcoded_affiliation_mapping():
    """소속이 누락된 저자들을 위한 하드코딩된 매핑"""
    return {
        # Paper ID 10
        "Amit H. Bermano": "Tel Aviv University",
        
        # Paper ID 14
        "Julian Mcauley": "University of California San Diego",
        "Hao Wen Dong": "University of Michigan",
        
        # Paper ID 32
        "Julian McAuley": "University of California, San Diego", 
        "Taylor Berg Kirkpatrick": "University of California, San Diego",
        "Hao-Wen Dong": "University of Michigan, Ann Arbor",
        
        # Paper ID 33
        "Roser Batlle Roca": "Universitat Pompeu Fabra",
        "Laura Ibáñez Martínez": "Universitat Pompeu Fabra",
        
        # Paper ID 38
        "Victor Shea Jay Huang": "DynamiX",
        
        # Paper ID 66
        "Jun You Wang": "Academia Sinica",
        
        # Paper ID 67
        "Christof Weiß": "University of Würzburg",
        
        # Paper ID 70
        "Juan C. Martinez Sevilla": "University of Alicante", 
        "Joan Cerveto Serrano": "University of Alicante",
        "Jorge Calvo Zaragoza": "University of Alicante",
        
        # Paper ID 74
        "Guillem Cortès Sebastià": "Universitat Pompeu Fabra, BMAT Licensing S.L.",
        
        # Paper ID 92
        "Carlos Cancino Chacón": "JKU",
        
        # Paper ID 101
        "Jon Mccormack": "Monash University",
        
        # Paper ID 113
        "Patricia Garcia Iasci": "University of Alicante",
        
        # Paper ID 116  
        "Zakaria Hassein Bey": "Université de Lille",
        "Alexandre D'hooge": "Université de Lille",
        "Aurélien Jeanneau": "Université de Lille",
        
        # Paper ID 125
        "Rainer Kleinertz": "Institut für Musikwissenschaft, Universität des Saarlandes",
        
        # Paper ID 133
        "Alessandro Ilic Mezza": "Politecnico di Milano",
        
        # Paper ID 135
        "Ching Yu Chiu": "International Audio Laboratories Erlangen, Germany",
        
        # Paper ID 138
        "Sean O'leary": "TU Dublin",
        "James Mcdermott": "University of Galway",
        
        # Paper ID 141
        "György Fazekas": "Queen Mary University of London",
        
        # Paper ID 148
        "Yen Tung Yeh": "National Taiwan University",
        "Marco A. Martínez Ramírez": "Sony AI",
        "Wei Hsiang Liao": "Sony AI", 
        "Yi Hsuan Yang": "National Taiwan University",
        
        # Paper ID 150
        "Roger B. Dannenberg": "Carnegie Mellon University",
        
        # Paper ID 167
        "Qingyang (Tom) Xi": "NYU",
        "Brian Mcfee": "New York University",
        
        # Paper ID 177
        "Juan P. Martinez Esteso": "Universidad de Alicante",
        "Alejandro Galan Cuenca": "Universidad de Alicante", 
        "Carlos Pérez Sancho": "Universidad de Alicante",
        
        # Paper ID 186
        "R. Oguz Araz": "Universitat Pompeu Fabra",
        "Guillem Cortès Sebastià": "BMAT Licensing S.L.",
        "Joan Serrà": "Sony AI",
        "Yuki Mitsufuji": "Sony AI",
        
        # Paper ID 191
        "Genís Plaja Roglans": "Music Technology Group",
        
        # Paper ID 199
        "Hans Ulrich Berendes": "International Audio Laboratories Erlangen",
        
        # Paper ID 208
        "György Fazekas": "Queen Mary University of London",
        
        # Paper ID 210
        "Angelos Nikolaos Kanatas": "School of ECE, National Technical University of Athens",
        
        # Paper ID 212
        "Hilda Romero Velo": "Universidade da Coruña",
        "Fernando Silva Coira": "Universidade da Coruña",
        
        # Paper ID 216
        "Yuexuan Kong": "Deezer",
        "Gabriel Meseguer Brocal": "Deezer",
        
        # Paper ID 219
        "Elena V. Epure": "Deezer",
        
        # Paper ID 220
        "Roman B. Gebhardt": "Cyanite / Audio Communication Group, TU Berlin",
        
        # Paper ID 221
        "Victoria Moomjian": "Queen Mary University of London",
        
        # Paper ID 233
        "Kun Fang": "McGill University",
        "Hanwen Zhang": "McGill University",
        
        # Paper ID 238
        "Marcelo Rodríguez": "Yousician",
        
        # Paper ID 246
        "Yinghao Ma": "Queen Mary University of London",
        
        # Paper ID 247
        "Matthew C. Mccallum": "Pandora / SiriusXM",
        
        # Paper ID 259
        "Martin E. Malandro": "Sam Houston State University",
        
        # Paper ID 264
        "Martin Rohrmeier": "École Polytechnique Fédérale de Lausanne",
        
        # Paper ID 278
        "Peter Van Kranenburg": "Utrecht University; Meertens Institute",
        
        # Paper ID 281
        "Tao Tao He": "Vanderbilt University",
        "Martin E. Malandro": "Sam Houston State University",
        
        # Paper ID 284
        "Jan Hajič Jr.": "Charles University",
        
        # Paper ID 286
        "Elif Çelen": "Max Planck Institute for Empirical Aesthetics",
        "Manuel Anglada Tort": "Goldsmiths, University of London",
        "Pol Van Rijn": "Max Planck Institute for Empirical Aesthetics",
        
        # Paper ID 293
        "Šimon Libˇrický": "Charles University", 
        "Jan Hajiˇc Jr.": "Charles University",
        
        # Paper ID 308
        "Sean O'brien": "University of California, San Diego",
        "Taylor Berg Kirkpatrick": "University of California, San Diego", 
        "Julian Mcauley": "University of California, San Diego",
        
        # Paper ID 316
        "Patrick O'reilly": "Northwestern University",
        "Julia Barnett": "NorthwesternUniversity",
        
        # Paper ID 321
        "Cheng Zhi Anna Huang": "Massachusetts Institute of Technology",
        
        # Paper ID 339
        "Silvan David Peter": "Johannes Kepler University",
        
        # Additional missing authors
        "António Sá Pinto": "INESC TEC; University of Porto - Faculty of Engineering",
    }

def parse_cmt_authors(cmt_author_str):
    """CMT_Author 문자열에서 저자명과 소속을 파싱"""
    authors_data = []
    
    if not cmt_author_str or cmt_author_str.strip() == '' or cmt_author_str == '#N/A':
        return authors_data
    
    # 세미콜론으로 분리
    author_parts = cmt_author_str.split(';')
    
    for part in author_parts:
        part = part.strip()
        if not part:
            continue
            
        # 정규식으로 "이름 (소속)*" 또는 "이름 (소속)" 패턴 매칭
        match = re.match(r'^([^(]+)\s*\(([^)]+)\)\*?', part)
        if match:
            name = match.group(1).strip()
            affiliation = match.group(2).strip()
            authors_data.append({'name': name, 'affiliation': affiliation})
        else:
            # 패턴이 매칭되지 않는 경우 이름만 저장
            authors_data.append({'name': part, 'affiliation': ''})
    
    return authors_data

def clean_author_name(name):
    """저자명에서 불필요한 문자 제거"""
    # 앞뒤 공백 제거
    name = name.strip()
    # 특수문자나 숫자 제거 (필요시)
    return name

def match_authors(json_authors, cmt_authors_data):
    """JSON의 저자 순서에 맞춰 CMT 저자 데이터와 매칭"""
    json_author_list = [author.strip() for author in json_authors.split(';')]
    matched_authors = []
    hardcoded_mapping = get_hardcoded_affiliation_mapping()
    
    for json_author in json_author_list:
        json_author_clean = clean_author_name(json_author)
        matched = False
        
        # 먼저 하드코딩된 매핑에서 확인
        if json_author_clean in hardcoded_mapping:
            matched_authors.append(f"{json_author_clean}({hardcoded_mapping[json_author_clean]})")
            matched = True
        else:
            # CMT 데이터에서 매칭되는 저자 찾기
            for cmt_author in cmt_authors_data:
                cmt_name_clean = clean_author_name(cmt_author['name'])
                
                # 이름이 정확히 매칭되거나 포함관계인 경우
                if json_author_clean == cmt_name_clean or json_author_clean in cmt_name_clean or cmt_name_clean in json_author_clean:
                    matched_authors.append(f"{json_author_clean}({cmt_author['affiliation']})")
                    matched = True
                    break
        
        if not matched:
            # 매칭되지 않은 경우 원본 이름만 사용
            matched_authors.append(json_author_clean)
    
    return ';'.join(matched_authors)

def process_author_affiliation_mapping():
    """저자명과 소속을 매핑하여 정리된 JSON 파일 생성"""
    
    # CSV 파일에서 Paper_Id와 CMT_Author 정보 읽기
    cmt_data = {}
    try:
        with open('AcceptedPaper.csv', 'r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                paper_id = row['Paper_Id']
                cmt_author = row['CMT_Author']
                cmt_data[paper_id] = cmt_author
    except Exception as e:
        print(f"CSV 파일 읽기 오류: {e}")
        return
    
    # JSON 파일 읽기
    try:
        with open('public/AcceptedPapers.json', 'r', encoding='utf-8') as f:
            json_data = json.load(f)
    except Exception as e:
        print(f"JSON 파일 읽기 오류: {e}")
        return
    
    # 결과 저장용 리스트
    result_papers = []
    processed_count = 0
    
    for paper in json_data:
        paper_id = paper['﻿Paper ID']
        paper_title = paper['Paper Title']
        json_authors = paper['Authors']
        
        processed_count += 1
        print(f"\n=== Paper {processed_count}: ID {paper_id} ===")
        print(f"Title: {paper_title}")
        print(f"JSON Authors: {json_authors}")
        
        # CSV에서 해당 paper_id의 CMT_Author 정보 가져오기
        cmt_author_str = cmt_data.get(paper_id, '')
        print(f"CMT Authors: {cmt_author_str}")
        
        if cmt_author_str and cmt_author_str != '#N/A':
            # CMT_Author 파싱
            cmt_authors_data = parse_cmt_authors(cmt_author_str)
            print(f"Parsed CMT Authors: {cmt_authors_data}")
            
            # 저자 매칭 및 형식 변환
            formatted_authors = match_authors(json_authors, cmt_authors_data)
            print(f"Formatted Authors: {formatted_authors}")
            
            result_papers.append({
                "Paper ID": paper_id,
                "Paper Title": paper_title,
                "Authors": formatted_authors
            })
        else:
            # CMT 데이터가 없는 경우 원본 사용
            print(f"No CMT data found, using original: {json_authors}")
            result_papers.append({
                "Paper ID": paper_id,
                "Paper Title": paper_title,
                "Authors": json_authors
            })
    
    # 결과를 새로운 JSON 파일로 저장
    output_file = 'public/AcceptedPapersWithAffiliationsFixed.json'
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(result_papers, f, ensure_ascii=False, indent=4)
        
        print(f"\n\n완료! {output_file} 파일이 생성되었습니다. ({len(result_papers)}개 논문 처리됨)")
        
        # 결과 미리보기
        print("\n=== 결과 미리보기 (처음 3개) ===")
        for i, paper in enumerate(result_papers[:3]):
            print(f"{i+1}. Paper ID: {paper['Paper ID']}")
            print(f"   Title: {paper['Paper Title']}")
            print(f"   Authors: {paper['Authors']}")
            print()
            
    except Exception as e:
        print(f"결과 파일 저장 오류: {e}")

if __name__ == "__main__":
    process_author_affiliation_mapping() 