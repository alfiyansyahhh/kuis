let produk = [
    {nama : "mangga", harga : 20000},
    {nama : "jeruk", harga : 20000},
    {nama : "pisang", harga : 20000},
]

const discount = (total,harga) =>{
    
    if ((total*harga) > 60000) {
        totalHarga ="total harga = " + total * harga 
        potongan = "potongan = " + totalHarga * (35/100)
        subtotal = "subtotal = " + totalHarga - potongan
        result = totalHarga+potongan+subtotal
        return result
    } else {
        totalHarga ="total harga = " + total * harga
        potongan = "potongan = 0"
        subtotal = "subtotal = "+totalHarga - potongan
        result = totalHarga+potongan+subtotal
        return result
    }
}

console.log(discount(10,10000))