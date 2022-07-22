const newArray = [{id :1, name :"Canon Kit Lens 15-55mm", price :500.00},
 {id :2, name : "Nikon 3100", price : 200.00},
{id :3, name : "Samsung NX300", price : 750.00},
{id :4, name : "Canon EOS 80D", price : 2000.00},
{id :5, name : "Sony Alpha A7s", price : 1600.00},
{id :6, name : "Sony NX 300M", price : 300.00},
{id :7, name : "Panasonic Lumix GH4", price : 800.00},
{id :8, name : "Panasonic Lumix DC-GH5", price : 5000.00},
{id :9, name : "Xiaomi Y1-M1", price : 500.00},
{id :10, name : "Fujifilm X-A10", price : 600.00},
{id :11, name : "Canon DSLR Rebel T7", price : 1200.00},
{id :12, name : "Canon DSLR EOS 2000D", price : 1200.00},
{id :13, name : "Sony A7ii", price : 2000.00},
{id :14, name : "Sony A6500 Mirrorless", price : 2000.00},
{id :15, name : "Sony Alpha A7r III", price : 5000.00},
{id :16, name : "Sony NEX-3N", price : 750.00},
{id :17, name : "Nikon V1", price : 200.00},
{id :18, name : "Sony NEX-F3", price : 800.00},
{id :19, name : "Sony NEX-5", price : 900.00},
{id :20, name : "Olympus PEN E-PL6", price : 750.00}
]
const arrayt = (newone)=>{ for (let i of newone) {if (i.name.length %2 ===0) { i.price = 2*(i.price) }else if (i.name.length %2 !==0){ i.price = 1/2*(i.price)} console.log(i.price) }}
arrayt(newArray)


