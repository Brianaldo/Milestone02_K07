from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import json
import os

'''
Data ini akan diupdate oleh WargaBantuWarga setiap harinya
'''

def ScrapeWebsite(link):
    desired_capabilities = DesiredCapabilities.CHROME
    desired_capabilities["goog:loggingPrefs"] = {"performance" : "ALL"}

    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument("--ignore-certificate-errors")

    print(os.path.join(os.getcwd(), "chromedriver_win32", "chromedriver.exe")) # BARU BISA WINDOWS DENGAN VERSI CHROME 92

    driver = webdriver.Chrome(
        executable_path=os.path.join(os.getcwd(), "paice", "src", "DataCollecting", "chromedriver_win32", "chromedriver.exe"),
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

def TampilkanKota(NamaProvinsi):

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

if __name__ == "__main__":
    ScrapeWebsite("https://www.wargabantuwarga.com/provinces?kebutuhan=Oksigen")