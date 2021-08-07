import pandas as pd

'''
Data ini akan terus diupdate oleh Wikipedia setiap harinya
'''

Data = ""

def UpdateData():
    global Data

    Table = pd.read_html("https://en.wikipedia.org/wiki/Statistics_of_the_COVID-19_pandemic_in_Indonesia", match="COVID-19 cases in Indonesia")

    df = Table[0]["COVID-19 cases in Indonesia[a][b]"]

    df = df.drop(df.index[35])
    df = df.drop(["Recoveryrate", "Fatalityrate", "Official website"], axis=1)
    df = df.rename(columns={"Active[c]" : "Active", "Cases per100,000 population[d]" : "Cases_per_100000_population"})

    df.to_csv("paice/src/DataCollecting/data_covid.csv", index=False) # Untuk Backend
    Data = df.reset_index().to_json("paice/src/DataCollecting/data_covid.json", orient='records') # Untuk Frontend

if __name__ == "__main__":
    UpdateData()