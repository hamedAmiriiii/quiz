
export default function price(x) {
    
        if (x > 0) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else return x;
      
}
