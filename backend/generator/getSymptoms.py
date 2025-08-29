from medicines import medicines

s = set()

for med in medicines:
    for sym in med['symptoms']:
        s.add(sym)

for i in s:
    print('{name: "' + i + '"},')

print(len(s))