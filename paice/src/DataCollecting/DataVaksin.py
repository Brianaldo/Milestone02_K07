from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from bs4 import BeautifulSoup
import pandas as pd
import json
import os
import requests

'''
Data ini akan diupdate oleh WargaBantuWarga setiap harinya
'''

def ScrapeWebsite(link, PathDriver):
    desired_capabilities = DesiredCapabilities.CHROME
    desired_capabilities["goog:loggingPrefs"] = {"performance" : "ALL"}

    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument("--ignore-certificate-errors")

    driver = webdriver.Chrome(
        executable_path=PathDriver, # BARU BISA WINDOWS DAN MACOS DENGAN VERSI CHROME 92
        options=options,
        desired_capabilities=desired_capabilities
    )

    driver.get(link)

    logs = driver.get_log("performance")

    jsonList = []
    links = []

    for log in logs:
        network_log = json.loads(log["message"])["message"]

        if "Network.response" in network_log["method"] or "Network.request" in network_log["method"] or "Network.webSocket" in network_log["method"]:
            jsonList.append(network_log)

            try:
                url = network_log["params"]["request"]["url"]

                if url[len(url) - 5 :] == ".json":
                    links.append(url)
            except:
                pass

    driver.quit()

    return links

def TampilkanProvinsi():
    
    ListProvinsi = [
        "Aceh",
        "Sumatera Utara",
        "Sumatera Barat",
        "Riau",
        "Jambi",
        "Sumatera Selatan",
        "Bengkulu",
        "Lampung",
        "Kepulauan Bangka Belitung",
        "Kepulauan Riau",
        "DKI Jakarta",
        "Jawa Barat",
        "Jawa Tengah",
        "DI Yogyakarta",
        "Jawa Timur",
        "Banten",
        "Bali",
        "Nusa Tenggara Barat",
        "Nusa Tenggara Timur",
        "Kalimantan Barat",
        "Kalimantan Tengah",
        "Kalimantan Selatan",
        "Kalimantan Timur",
        "Kalimantan Utara",
        "Sulawesi Utara",
        "Sulawesi Tengah",
        "Sulawesi Selatan",
        "Sulawesi Tenggara",
        "Gorontalo",
        "Sulawesi Barat",
        "Maluku",
        "Maluku Utara",
        "Papua Barat",
        "Papua"
    ]

    return ListProvinsi

def TampilkanKabKota(NamaProvinsi, PathDriver):

    KodeProvinsi = {
        "Aceh" : "aceh",
        "Sumatera Utara" : "sumatera-utara",
        "Sumatera Barat" : "sumatera-barat",
        "Riau" : "riau",
        "Jambi" : "jambi",
        "Sumatera Selatan" : "sumatera-selatan",
        "Bengkulu" : "bengkulu",
        "Lampung" : "lampung",
        "Kepulauan Bangka Belitung" : "bangka-belitung",
        "Kepulauan Riau" : "kepulauan-riau",
        "DKI Jakarta" : "dki-jakarta",
        "Jawa Barat" : "jawa-barat",
        "Jawa Tengah" : "jawa-tengah",
        "DI Yogyakarta" : "d-i-yogyakarta",
        "Jawa Timur" : "jawa-timur",
        "Banten" : "banten",
        "Bali" : "bali",
        "Nusa Tenggara Barat" : "nusa-tenggara-barat",
        "Nusa Tenggara Timur" : "nusa-tenggara-timur",
        "Kalimantan Barat" : "kalimantan-barat",
        "Kalimantan Tengah" : "kalimantan-tengah",
        "Kalimantan Selatan" : "kalimantan-selatan",
        "Kalimantan Timur" : "kalimantan-timur",
        "Kalimantan Utara" : "kalimantan-utara",
        "Sulawesi Utara" : "sulawesi-utara",
        "Sulawesi Tengah" : "sulawesi-tengah",
        "Sulawesi Selatan" : "sulawesi-selatan",
        "Sulawesi Tenggara" : "sulawesi-tenggara",
        "Gorontalo" : "gorontalo",
        "Sulawesi Barat" : "sulawesi-barat",
        "Maluku" : "maluku",
        "Maluku Utara" : "maluku-utara",
        "Papua Barat" : "papua-barat",
        "Papua" : "papua"
    }

    kebutuhan = "Tempat%20vaksin"

    url = "https://www.wargabantuwarga.com/" + "provinces/" + KodeProvinsi[NamaProvinsi] + "?" + "kebutuhan=" + kebutuhan

    links = ScrapeWebsite(url, PathDriver)

    ListKabKota = []

    for link in links:
        if KodeProvinsi[NamaProvinsi] + ".json" in link:
            DataKabKota = requests.get(link)
            JSONKabKota = DataKabKota.json()

            for i in range(len(JSONKabKota['pageProps']['contactList'])):
                if JSONKabKota['pageProps']['contactList'][i]['lokasi'] not in ListKabKota:
                    ListKabKota.append(JSONKabKota['pageProps']['contactList'][i]['lokasi'])

            break

    return ListKabKota

def UpdateData(NamaProvinsi, NamaKabKota, PathDriver):

    KodeProvinsi = {
        "Aceh" : "aceh",
        "Sumatera Utara" : "sumatera-utara",
        "Sumatera Barat" : "sumatera-barat",
        "Riau" : "riau",
        "Jambi" : "jambi",
        "Sumatera Selatan" : "sumatera-selatan",
        "Bengkulu" : "bengkulu",
        "Lampung" : "lampung",
        "Kepulauan Bangka Belitung" : "bangka-belitung",
        "Kepulauan Riau" : "kepulauan-riau",
        "DKI Jakarta" : "dki-jakarta",
        "Jawa Barat" : "jawa-barat",
        "Jawa Tengah" : "jawa-tengah",
        "DI Yogyakarta" : "d-i-yogyakarta",
        "Jawa Timur" : "jawa-timur",
        "Banten" : "banten",
        "Bali" : "bali",
        "Nusa Tenggara Barat" : "nusa-tenggara-barat",
        "Nusa Tenggara Timur" : "nusa-tenggara-timur",
        "Kalimantan Barat" : "kalimantan-barat",
        "Kalimantan Tengah" : "kalimantan-tengah",
        "Kalimantan Selatan" : "kalimantan-selatan",
        "Kalimantan Timur" : "kalimantan-timur",
        "Kalimantan Utara" : "kalimantan-utara",
        "Sulawesi Utara" : "sulawesi-utara",
        "Sulawesi Tengah" : "sulawesi-tengah",
        "Sulawesi Selatan" : "sulawesi-selatan",
        "Sulawesi Tenggara" : "sulawesi-tenggara",
        "Gorontalo" : "gorontalo",
        "Sulawesi Barat" : "sulawesi-barat",
        "Maluku" : "maluku",
        "Maluku Utara" : "maluku-utara",
        "Papua Barat" : "papua-barat",
        "Papua" : "papua"
    }

    kebutuhan = "Tempat%20vaksin"

    url = "https://www.wargabantuwarga.com/" + "provinces/" + KodeProvinsi[NamaProvinsi] + "?" + "kebutuhan=" + kebutuhan

    links = ScrapeWebsite(url, PathDriver)

    ListVaksin = []

    for link in links:
        if KodeProvinsi[NamaProvinsi] + ".json" in link:
            DataVaksin = requests.get(link)
            JSONVaksin = DataVaksin.json()

            for i in range(len(JSONVaksin['pageProps']['contactList'])):

                if JSONVaksin['pageProps']['contactList'][i]['lokasi'] == NamaKabKota and JSONVaksin['pageProps']['contactList'][i]['kebutuhan'] == "Tempat vaksin":

                    Vaksin = {}

                    Vaksin['Nama'] = BeautifulSoup(JSONVaksin['pageProps']['contactList'][i]['penyedia'], 'lxml').text

                    Vaksin['Alamat'] = BeautifulSoup(JSONVaksin['pageProps']['contactList'][i]['alamat'], 'lxml').text

                    Vaksin['No_Telepon'] = BeautifulSoup(JSONVaksin['pageProps']['contactList'][i]['kontak'], 'lxml').text

                    Vaksin['URL'] = BeautifulSoup(JSONVaksin['pageProps']['contactList'][i]['link'], 'lxml').text

                    Vaksin['Waktu_Update'] = BeautifulSoup(JSONVaksin['pageProps']['contactList'][i]['terakhir_update'], 'lxml').text

                    ListVaksin.append(Vaksin)

            break
    
    df = pd.DataFrame(ListVaksin)

    # Untuk Backend
    # df.to_csv(os.path.join(os.getcwd(), "paice", "src", "DataCollecting", "data_vaksin.csv"), index=False)

    Data = df.reset_index().to_dict(orient='records') # Untuk Frontend

    for Object in Data:
        Object['key'] = Object.pop('index')

    return Data

if __name__ == "__main__":
    Provinsi = "Jawa Barat"

    KabKota = "Bandung"

    PathDriver = os.path.join(os.getcwd(), "paice", "src", "DataCollecting", "chromedriver_win32", "chromedriver.exe")

    print(UpdateData(Provinsi, KabKota, PathDriver))

    '''Provinsi = "DKI Jakarta"

    PathDriver = os.path.join(os.getcwd(), "paice", "src", "DataCollecting", "chromedriver_win32", "chromedriver.exe")

    print(TampilkanKabKota(Provinsi, PathDriver))'''