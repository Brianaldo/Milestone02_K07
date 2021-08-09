import requests
import os
import xml.etree.ElementTree as ET

'''
Data ini akan diupdate oleh covid19.go.id setiap harinya
'''

def TampilkanFeed():

    ListFeed = [
        "Berita",
        "Masyarakat Umum",
        "Protokol",
        "Panduan",
        "Melakukan Perjalanan",
        "Tenaga Kesehatan",
        "Pengusaha & Bisnis",
        "Hoax Buster",
        "Protokol",
        "Regulasi",
        "Tanya Jawab"
    ]

    return ListFeed

def UpdateData(Feed):
    
    KodeFeed = {
        "Berita" : "berita",
        "Masyarakat Umum" : "masyarakat-umum",
        "Protokol" : "protokol",
        "Panduan" : "panduan",
        "Melakukan Perjalanan" : "melakukan-perjalanan",
        "Tenaga Kesehatan" : "tenaga-kesehatan",
        "Pengusaha & Bisnis" : "pengusaha-dan-bisnis",
        "Hoax Buster" : "hoax-buster",
        "Protokol" : "protokol",
        "Regulasi" : "regulasi",
        "Tanya Jawab" : "tanya-jawab"
    }

    URL = "http://covid19.go.id/feed/" + KodeFeed[Feed]
    DataBerita = requests.get(URL)
    
    with open(os.path.join(os.getcwd(), "paice", "src", "DataCollecting", "data_berita.xml"), 'wb') as f:
        f.write(DataBerita.content)

if __name__ == "__main__":
    UpdateData("Berita")