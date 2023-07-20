import os

# Build diagrams
os.system(f"python3 ./compileDiagrams.py")

# Extract User Stories from in/jira.xml
INPUT = '../in/jira.xml'
OUTPUT = '../out/userStories.html'
os.system(f"python3 ./jiraXMLToHTML.py {INPUT} > {OUTPUT}")
INPUT = '../out/userStories.html'
OUTPUT = '../out/userStories.tex'
os.system(f"python3 ./userStoriesToLaTeX.py {INPUT} > {OUTPUT}")
