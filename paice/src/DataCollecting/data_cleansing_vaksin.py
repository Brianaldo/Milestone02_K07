import pandas as pd 
import os

data_vaksin = pd.read_csv(os.getcwd() +"\\data_vaksin.csv")

data_baru = data_vaksin[(~data_vaksin["No_Telepon"].duplicated())|(data_vaksin["No_Telepon"].isnull())]

data_baru= data_baru.drop_duplicates(subset=["Nama"])

data_baru.to_csv("data_vaksin_cleansing.csv", index=False)