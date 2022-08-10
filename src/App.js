import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="Parentbox">
  <FotoProduk />
  <ProdukInfo isDiscount="yes" name="Sneakers" category="LEBARAN" />
  
    
    </div>
  );
}

function FotoProduk(){
  return (
     <div className="Foto">
      <img src="sepatu.png"  />
     </div>
    
  );
}

function CheckDiscount(props){
  const {isDiscount} = props;
  if(isDiscount == "yes"){
    return(
      <p>Diskon 50% off</p>
      );
    
  } else if(isDiscount == "coming") {
    return(
      <p>Akan ada diskon</p>
      );
    
  } else {
    return(
      <p>Belum ada diskon</p>
      );
    
  }
 
}

function ProdukInfo(props){
  const {category, name, isDiscount} = props;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"];
  const listBenefits = benefits.map((itemBenefit) =>
  <li>{itemBenefit}</li>
);
  return (
    <div>
     <div className="Deskripsi">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR 73.309.399</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="Info">
      Sneakers are shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday casual wear.
      </p>
      <ul>
      {listBenefits}
      </ul>
      <a onClick={(e)=>TambahCard(name, e)} href="#">Add to Cart</a>
     </div>
    </div>
  );
}

function TambahCard(e){
  return console.log("Membeli " + e);
}

export default App;
