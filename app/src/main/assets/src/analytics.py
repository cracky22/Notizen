from collections import Counter
from datetime import datetime

data = ""

for entry in data:
    entry["datetime"] = datetime.strptime(entry["datetime"], "%d.%m.%Y, %H:%M:%S")

data.sort(key=lambda x: x["datetime"])
user_agents = [entry["userAgent"] for entry in data]
user_agent_counts = Counter(user_agents)

print("Anzahl der Aufrufe für jede userAgent-String:")
for ua, count in user_agent_counts.items():
    print(f"{ua}: {count} Aufrufe")
