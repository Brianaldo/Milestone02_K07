import pandas as pd 
import os

data_oksigen = pd.read_csv(os.getcwd() +"\\data_oksigen.csv")

data_baru = data_oksigen[(~data_oksigen["No_Telepon"].duplicated())|(data_oksigen["No_Telepon"].isnull())]

data_baru= data_baru.drop_duplicates(subset=["Nama"])

data_baru.to_csv("data_oksigen_cleansing.csv", index=False)