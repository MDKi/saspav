import os

# Compile diagrams to PDF
os.system(f"java -jar ../../tools/plantuml.jar ../diagramas/*.puml -tpdf -o ../out")

# Compile diagrams to SVG
os.system(f"java -jar ../../tools/plantuml.jar ../diagramas/*.puml -tsvg -o ../out")