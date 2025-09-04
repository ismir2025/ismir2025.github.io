import csv
import json
import os

def format_title_case(title):
    """
    논문 제목을 적절한 Title Case로 변환합니다.
    단, 이미 적절한 케이스로 작성된 제목은 그대로 유지합니다.
    """
    if not title:
        return ""
    
    # 제목이 이미 적절한 케이스인지 확인
    words = title.split()
    
    # 모든 단어가 대문자인지 확인 (전체 대문자 제목)
    all_upper = all(word.isupper() for word in words if word.isalpha())
    
    # 모든 단어가 소문자인지 확인 (전체 소문자 제목)
    all_lower = all(word.islower() for word in words if word.isalpha())
    
    # 이미 적절한 케이스로 작성되어 있다면 그대로 반환
    if not (all_upper or all_lower):
        return title
    
    # 전체 대문자이거나 소문자인 경우에만 변환
    small_words = {'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'is', 'it', 'of', 'on', 'or', 'the', 'to', 'up', 'via', 'with'}
    
    formatted_words = []
    
    for i, word in enumerate(words):
        # 첫 번째와 마지막 단어는 항상 대문자로 시작
        # 또는 작은 단어가 아닌 경우 대문자로 시작
        if i == 0 or i == len(words) - 1 or word.lower() not in small_words:
            formatted_words.append(word.capitalize())
        else:
            formatted_words.append(word.lower())
    
    return ' '.join(formatted_words)

def format_author_name(name):
    """
    저자 이름을 적절한 형식으로 변환합니다.
    단, 이미 적절한 케이스로 작성된 이름은 그대로 유지합니다.
    """
    if not name:
        return ""
    
    # 이름이 이미 적절한 케이스인지 확인
    parts = name.split()
    
    # 모든 부분이 대문자인지 확인
    all_upper = all(part.isupper() for part in parts if part.replace('-', '').replace('.', '').isalpha())
    
    # 모든 부분이 소문자인지 확인  
    all_lower = all(part.islower() for part in parts if part.replace('-', '').replace('.', '').isalpha())
    
    # 이미 적절한 케이스로 작성되어 있다면 그대로 반환
    if not (all_upper or all_lower):
        return name
    
    # 전체 대문자이거나 소문자인 경우에만 변환
    formatted_parts = []
    
    for part in parts:
        # 하이픈이 있는 경우 (예: "Mary-Jane")
        if '-' in part:
            hyphen_parts = part.split('-')
            formatted_hyphen_parts = [p.capitalize() for p in hyphen_parts]
            formatted_parts.append('-'.join(formatted_hyphen_parts))
        else:
            formatted_parts.append(part.capitalize())
    
    return ' '.join(formatted_parts)

def clean_author_names(author_string):
    """
    저자 이름 문자열을 정리합니다.
    - 세미콜론이나 쉼표로 구분된 저자들을 처리
    - * 표시 제거 (주 저자 표시 기호)
    - 불필요한 공백 제거
    - 저자명을 적절한 케이스로 변환
    """
    if not author_string:
        return ""
    
    # 세미콜론과 쉼표 모두 처리 (세미콜론이 우선)
    if ';' in author_string:
        authors = author_string.split(';')
    else:
        authors = author_string.split(',')
    
    # 각 저자 이름 정리
    cleaned_authors = []
    for author in authors:
        author = author.strip()
        # * 기호 제거
        author = author.replace('*', '')
        author = author.strip()  # * 제거 후 다시 공백 제거
        if author:  # 빈 문자열이 아닌 경우만 추가
            # 저자명을 적절한 케이스로 변환
            formatted_author = format_author_name(author)
            cleaned_authors.append(formatted_author)
    
    return '; '.join(cleaned_authors)

def csv_to_json():
    """
    AcceptedPapers.csv를 ISMIR_2025_accepted_papers.json 구조로 변환합니다.
    """
    csv_path = 'AcceptedPapers.csv'
    json_path = 'public/AcceptedPapers.json'
    
    if not os.path.exists(csv_path):
        print(f"오류: {csv_path} 파일을 찾을 수 없습니다.")
        return
    
    papers = []
    
    try:
        with open(csv_path, 'r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            
            for row in reader:
                paper_id = row['Paper ID'].strip()
                paper_title = format_title_case(row['Paper Title'].strip())
                author_names = clean_author_names(row['Author Names'])
                
                # JSON 구조에 맞게 변환 (BOM 문자 추가)
                paper_data = {
                    "\ufeffPaper ID": paper_id,
                    "Paper Title": paper_title,
                    "Authors": author_names
                }
                
                papers.append(paper_data)
        
        # JSON 파일로 저장
        with open(json_path, 'w', encoding='utf-8') as jsonfile:
            json.dump(papers, jsonfile, ensure_ascii=False, indent=4)
        
        print(f"✅ 변환 완료!")
        print(f"📊 총 {len(papers)}개의 논문이 변환되었습니다.")
        print(f"💾 결과 파일: {json_path}")
        
        # 처음 몇 개 항목 미리보기
        print("\n📋 처음 3개 항목 미리보기:")
        for i, paper in enumerate(papers[:3]):
            print(f"{i+1}. Paper ID: {paper['\ufeffPaper ID']}")
            print(f"   Title: {paper['Paper Title']}")
            print(f"   Authors: {paper['Authors']}")
            print()
            
    except Exception as e:
        print(f"오류 발생: {e}")

if __name__ == "__main__":
    csv_to_json()
