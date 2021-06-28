const discount = (total,harga) =>{
    const totalHarga = total * harga
    if (totalHarga > 60000) {
        potongan = totalHarga * (35/100)
        subtotal = totalHarga - potongan
        result = "total harga = " + totalHarga + "\n" + 
                 "potongan = " + potongan + "\n" + 
                 "subtotal = " + subtotal
        return result 
    } else if (totalHarga < 60000){
        subtotal = totalHarga
        result = "total harga = " + totalHarga + "\n" + 
                 "potongan = 0" + "\n" + 
                 "subtotal = " + subtotal
        return result 
    } 
}

console.log(discount(1,10000))
