const discount = (total,harga) =>{
    const totalHarga = total * harga
    if (totalHarga > 60000) {
        potongan = totalHarga * (35/100)
        subtotal = totalHarga - potongan
        result = "total harga = " + totalHarga + "\n" + 
                 "potongan = " + potongan + "\n" + 
                 "subtotal = " + subtotal
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
