import requests
import os
import re
import xml.etree.ElementTree as ET

'''
Data ini akan diupdate oleh covid19.go.id setiap harinya
'''

def CleanHTML(RawHTML):
    return re.sub(re.compile('<.*?>'), '', RawHTML)

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

    tree = ET.parse(os.path.join(os.getcwd(), "paice", "src", "DataCollecting", "data_berita.xml"))

    root = tree.getroot()

    NewsItem = []

    for item in root.findall('./channel/item'):

        News = {}

        for child in item:

            if child.text == None or child.tag == 'guid' or child.tag == 'description':
                continue
            else:
                News[child.tag] = " ".join(CleanHTML(child.text).replace('\n', '').replace('=', '').strip().split())
        
        NewsItem.append(News)

    return NewsItem

if __name__ == "__main__":
    print(UpdateData("Berita"))