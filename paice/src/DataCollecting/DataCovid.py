import pandas as pd

'''
Data ini akan terus diupdate oleh Wikipedia setiap harinya
'''

Table = pd.read_html("https://en.wikipedia.org/wiki/Statistics_of_the_COVID-19_pandemic_in_Indonesia", match="COVID-19 cases in Indonesia")

df = Table[0]["COVID-19 cases in Indonesia[a][b]"]

df = df.drop(df.index[35])
df = df.drop(["Recoveryrate", "Fatalityrate", "Official website"], axis=1)
df = df.rename(columns={"Active[c]" : "Active", "Cases per100,000 population[d]" : "Cases_per_100000_population"})

df.to_csv("paice/src/DataCollecting/data_covid.csv", index=False)