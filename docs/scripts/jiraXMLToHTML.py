INPUT = '../in/jira.xml' # TODO Use argparse instead

# XML Parser
import xml.etree.ElementTree as ET

# Parse
tree = ET.parse(INPUT)
root = tree.getroot()

# Discard headers
items = []
for child in root[0]:
  if (child.tag == "item"):
    items.append(child)

# A little jank but it works
for item in items:
  labels = item[14]
  try:
    first_label = labels[0].text
  except:
    first_label = "SIN_ETIQUETA!"

  diccionarioItem = {
    "title": item[0].text,
    "link": item[1].text,
    "project": item[2].text,
    "description": item[3].text,
    "envirnonment": item[4].text,
    "key": item[5].text,
    "summary": item[6].text,
    "type": item[7].text,
    "priority": item[8].text,
    "status": item[9].text,
    "statusCategory": item[10].text,
    "resolution": item[11].text,
    "assignee": item[12].text,
    "reporter": item[13].text,
    "label": first_label,
    "created": item[15].text,
    "updated": item[16].text,
    "due": item[17].text,
    "votes": item[18].text,
    "watches": item[19].text,
    "attachments": item[20].text,
    "subtasks": item[21].text,
    "customfields": item[22].text,
  }

  # Output
  print("---CABECERA---<br>")
  print(f"Identificador: <a href='{diccionarioItem['link']}'>{diccionarioItem['key']}</a>")
  print("Tipo de incidencia:", diccionarioItem['type'])
  print("Nombre:", diccionarioItem['summary'])
  print("Prioridad:", diccionarioItem['priority'])
  print("Estado:", diccionarioItem['status'])
  print("Creada por:", diccionarioItem['reporter'])
  print("Asignada a:", diccionarioItem['assignee'])
  print(f"Etiqueta: {diccionarioItem['label']}")
  print("<br>---FIN CABECERA---")
  print(diccionarioItem["description"])