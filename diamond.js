
function diamond(num) {
    let rows = num + (num -1)
    let mid = num -1
    let left = num - 1
    let right = num - 1

    for (let baris = 0; baris < rows; baris++){
        let output = ""
        for (let kolom = 0; kolom < rows; kolom++){
            if(output.length === 0){
                if((baris === 0 && kolom === mid)|| (baris === mid && kolom === 0)){
                    output+="$"
                } 
                else {
                    output+=" "
                }
            } else if(baris === rows - 1 && kolom === mid){
                output+="$"
            } 
            else {
              if(baris<=mid){
                if(kolom === left || kolom === right){
                    output+="$"
                }else{
                    output+=" "
                }
              }else if(baris >mid){
                if(kolom === left + 2 || kolom === right-2){
                    output+="$"
                }else{
                    output+=" "
                }
              }
            }          
        }
        if(baris <= mid){
        left--
        right++
        }else if(baris >mid) {
        left++
        right--
        }
        console.log(output)
    }
}
// diamond(3)
// diamond(4)
// diamond(6)
diamond(10)