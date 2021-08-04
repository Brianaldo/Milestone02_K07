import requests

'''
Data ini akan diupdate oleh SIRANAP setiap harinya
'''

def UpdateData(NamaProvinsi, NamaKabKota):
    Jenis = "1"

    KodeProvinsi = {
        "Aceh" : "11prop",
        "Sumatera Utara" : "12prop",
        "Sumatera Barat" : "13prop",
        "Riau" : "14prop",
        "Jambi" : "15prop",
        "Sumatera Selatan" : "16prop",
        "Bengkulu" : "17prop",
        "Lampung" : "18prop",
        "Kepulauan Bangka Belitung" : "19prop",
        "Kepulauan Riau" : "20prop",
        "DKI Jakarta" : "31prop",
        "Jawa Barat" : "32prop",
        "Jawa Tengah" : "33prop",
        "DI Yogyakarta" : "34prop",
        "Jawa Timur" : "35prop",
        "Banten" : "36prop",
        "Bali" : "51prop",
        "Nusa Tenggara Barat" : "52prop",
        "Nusa Tenggara Timur" : "53prop",
        "Kalimantan Barat" : "61prop",
        "Kalimantan Tengah" : "62prop",
        "Kalimantan Selatan" : "63prop",
        "Kalimantan Timur" : "64prop",
        "Kalimantan Utara" : "65prop",
        "Sulawesi Utara" : "71prop",
        "Sulawesi Tengah" : "72prop",
        "Sulawesi Selatan" : "73prop",
        "Sulawesi Tenggara" : "74prop",
        "Gorontalo" : "75prop",
        "Sulawesi Barat" : "76prop",
        "Maluku" : "81prop",
        "Maluku Utara" : "82prop",
        "Papua Barat" : "91prop",
        "Papua" : "92prop"
    }

    URLKabKota = "https://yankes.kemkes.go.id/app/siranap/Kabkota?kode_propinsi=" + KodeProvinsi[NamaProvinsi]
    DataKabKota = requests.get(URLKabKota)
    JSONKabKota = DataKabKota.json()

    KodeKabKota = {}

    for i in range(len(JSONKabKota['data'])):
        KodeKabKota[JSONKabKota['data'][i]['nama_kabkota']] = JSONKabKota['data'][i]['kode_kabkota']

    URL = "https://yankes.kemkes.go.id/app/siranap/" + "rumah_sakit" + "?" + "jenis=" + str(Jenis) + "&" + "propinsi=" + KodeProvinsi[NamaProvinsi] + "&" + "kabkota=" + KodeKabKota[NamaKabKota]

    # Baru jadi link generator, nanti aku tambahin webscrapingnya besok

if __name__ == "__main__":
    UpdateData("Jawa Barat", "Bandung")