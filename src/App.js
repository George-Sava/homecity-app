import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Gif1 from "./img/fcs3.GIF";
import Poza2 from "./img/the-beautiful-theater-fcs.jpg";
import Poza3 from "./img/fcs5.jpg";
import Poza1 from "./img/fcs4.jpg";
import PozaCnu from "./img/cnu1.jpg";
import MyGallery from "./gallery";

const focsaniData = [
  {
    id: 1,
    name: "Așezare geografică",
    data:
      "Este încadrat geografic la 45°42′N 26°13′E, străjuit de partea nord-estică a Carpaților de Curbură, la contactul dintre Câmpia Siretului inferior și dealurile subcarpatice ce culminează cu Măgura Odobeștilor (1.001 m). Municipiul Focșani are o suprafață de 54,8 km², ceea ce reprezintă 1% din suprafața județului Vrancea, fiind o localitate de dimensiune medie.",
  },
  {
    id: 2,
    name: "Relief",
    data:
      " Fiind situat pe magistrala feroviară București-Ploiești-Bacău-Suceava și pe drumul european E85 (DN2) București-Buzău-Suceava, flancat de râurile Putna, spre est, la o distanță de 7 km, și Milcov, spre sud, la o distanță de 2 km, orașul Focșani se situează în câmpia joasă a Siretului Inferior la o altitudine de 50–55 metri deasupra nivelului mării, câmpie ce se întinde de la linia Mărășești, Vânători, Tătăranu, Ciorăști până la albia Siretului.",
  },
  {
    id: 3,
    name: "Climă",
    data:
      " Pe teritoriul municipiului Focșani, clima este temperat-continentală, influențată de adăpostul Carpaților de curbură, cu variații mari de temperatură.Temperatura medie este de cca. 9 °C, maxima absolută înregistrată fiind de +42,3 °C (iulie 1990), iar minima absolută de -33,7 °C (februarie 1987).Volumul precipitațiilor depășește 400 mm, lunile cele mai ploioase fiind mai-iunie, iar cele mai secetoase decembrie-februarie.Numărul zilelor cu ninsoare este de cca. 20 pe an.Vânturile dominante în toate anotimpurile bat dinspre nord-est, iar vânturile calde, mai rare, dinspre sud, sud-est",
  },
  {
    id: 4,
    name: "Riscuri seismice",
    data:
      "Teritoriul județului Vrancea corespunde celei mai active zone seismice din România. Răspândirea focarelor de cutremure pune în evidență existența a doua zone: trunchiul Vrâncioaia-Tulnici-Soveja, unde se produc cutremure la adâncimi între 80–160 km, legat de curbura arcului carpatic; în regiunea de câmpie între Râmnicu Sărat, Mărășești și Tecuci cu cutremure mai puțin adânci.Seismele cu epicentrul în Vrancea au origine tectonică, fiind provocate de deplasările blocurilor scoarței sau alte părți superioare ale învelișului, în lungul unor falii formate anterior sau în lungul unora foarte adânci. Cutremure devastatoare, cu magnitudinea cuprinsă între 7 și 8 grade pe scara Richter, s-au înregistrat în 8 octombrie 1620, 9 august 1679, 12 iunie 1701, 13 mai 1738, 6 aprilie 1790, 26 octombrie 1802, 1829, 28 ianuarie 1838. În secolul XX, cele mai semnificative evenimente au avut loc la 25 mai 1925, 10 noiembrie 1940 care, a distrus aproape în întregime orașul Panciu având magnitudinea de 7,4 grade, 4 martie 1977 cu magnitudinea de 7,2 grade, 30 august 1986 cu magnitudinea de 7 grade, 30 si 31 mai 1990 cu magnitudinea de 6,9 respectiv 6,4 grade.",
  },
  {
    id: 5,
    name: "Descoperiri arheologice preistorice și antice",
    data:
      "Săpăturile arheologice efectuate în anul 1977 în sudul Focșaniului atestă că vatra actuală a orașului a fost locuită încă din neolitic, obiectele descoperite aparținând culturii Criș (circa 5000 î.Hr.). Au mai fost descoperite un tezaur dacic din secolul III–II î.Hr., un tezaur de monede imperiale romane, alte mărturii ale culturii materiale care au aparținut carpilor și sarmaților din sec. II-III e.n. Teritoriul pe care se află orașul astăzi a fost puternic afectat de invazia goților, hunilor, slavilor, tătarilor.",
  },
  {
    id: 6,
    name: "Focșanii Valahiei și Focșanii Moldovei",
    data:
      "Pentru că Focșanii se găseau chiar pe granița ce despărțea Moldova de Țara Românească, cu timpul au apărut două orașe cu același nume: Focșanii Valahiei (Focșanii Munteni) și Focșanii Moldovei. Pe la anul 1641, un călător străin anonim descria Focșanii ca fiind un oraș mare, „aflat chiar pe granița Moldovei cu Muntenia, pe care le desparte un pârâu, mai bine zis o baltă, peste care este clădit un pod de piatră”. Pârâul era de fapt o gârlă creată prin derivarea unei părți din apa Milcovului, care la început a avut suficientă apă pentru a pune în mișcare o moară, dar care după anul 1831 era aproape complet colmatată. La 1 ianuarie 1848 a fost suprimată linia vamală între Moldova și Țara Românească, Focșaniul pierzând astfel funcția de vamă. După alegerea ca domn a lui Alexandru Ioan Cuza în Principatele Unite, acesta a dat un decret, la 10 iulie 1862, care legifera că „ambele părți ale orașului Focșani de dincoace și dincolo de Milcov, vor forma în viitor un singur oraș, care va fi residența județului Putna”.[7] La Focșani a funcționat între anii 1859 și 1862 Comisia Centrală, însărcinată cu elaborarea legilor comune în Principatele Unite, Curtea de Casație pentru două Prefecturi (Putna și Râmnicul Sărat), două tribunale, două poliții, două secții ale municipalității.Perioada dintre Unire și câștigarea independenței cunoaște o mare înflorire. În 1866 se construiește Gimnaziul, astăzi Colegiul Național „Unirea”, în anul 1867 Spitalul județean și comunal, în anul 1873 Grădina Publică. Sfârșitul secolului al XIX-lea și începutul secolului XX cunoaște aceeași dezvoltare înfloritoare în așa fel încât se înființează Societatea Filarmonică denumita simbolic „Doina Vrancei” (1907), Biblioteca Publică (1912), Teatrul „Maior Gheorghe Pastia”, inaugurat în 1913, Palatul de Justiție. Pe 30 decembrie 1881 a avut loc la Focșani Primul Congres Mondial Sionist.",
  },
];

export default function App() {
  return (
    <div className="App ">
      <RoutesComponent />
    </div>
  );
}

function Main() {
  return (
    <div className="p-3 pb-5 h-100vh">
      <h1 className="title-1 mt-4">Welcome to Foc&#351;ani!</h1>
      <div className="container d-flex justify mt-5 pb-4">
        <div className="d-inline mt-3 w-50 t-left">
          <p>
            {" "}
            Focșani este municipiul de reședință al județului Vrancea, la limita
            între regiunile istorice Moldova și Muntenia, România, format din
            localitățile componente Focșani (reședința), Mândrești-Moldova și
            Mândrești-Munteni. Are o populație de 79.315 locuitori.
          </p>
          <p>
            Focșani se află în Moldova, la limita între regiunile istorice
            Moldova și Muntenia din România.
          </p>
          <br />
          <p>
            Este încadrat geografic la 45°42′N 26°13′E, străjuit de partea
            nord-estică a Carpaților de Curbură, la contactul dintre Câmpia
            Siretului inferior și dealurile subcarpatice ce culminează cu Măgura
            Odobeștilor (1.001 m). Municipiul Focșani are o suprafață de 54,8
            km², ceea ce reprezintă 1% din suprafața județului Vrancea, fiind o
            localitate de dimensiune medie.
          </p>
          <br />
          <p className="pb-2">
            Rețeaua de comunicații este dispusă radial, accesul în oraș
            făcându-se prin șase porți de intrare:
          </p>
          <ul>
            <li>
              dinspre sud pe DN2 din direcția București–Buzău prin Bariera
              București;
            </li>
            <li>
              dinspre est, pe DN23 din direcția Brăila–Galați prin Bariera
              Brăilei și Galați;
            </li>
            <li>
              dinspre est, pe DJ 204D din direcția Suraia prin Bariera
              Galați–Suraia;
            </li>
            <li>
              dinspre nord, pe același DN2 din direcția Suceava–Bacău sau
              Iași-Vaslui-Tecuci prin Bariera Mărășești și pe DJ 204E și DJ 209
              din direcția Petrești și Vânători;
            </li>
            <li>
              dinspre vest, pe DN2D prin Bariera Drumul Vrancei–Odobești din
              direcția Târgu Secuiesc–Vidra–Bolotești–Drumul Vrancei sau pe DJ
              205C din direcția Vidra-Bolotești–Odobești–Focșani;
            </li>
            <li>dinspre est, pe DN2M din directia Andreiașu de jos;</li>
            <li>
              dinspre sud, pe DC 141 prin Bariera Cotești din direcția comunei
              Câmpineanca.
            </li>
          </ul>
        </div>

        <ImgMap />
      </div>
    </div>
  );
}

function AboutCity() {
  return (
    <div className="container pt-5 pb-5 h-100vh ">
      <h1 className="mt-3 mb-4 title-2">About Focșani</h1>
      <div className="t-left">
        <p>
          Focșani este municipiul de reședință al județului Vrancea, la limita
          între regiunile istorice Moldova și Muntenia, România, format din
          localitățile componente Focșani (reședința), Mândrești-Moldova și
          Mândrești-Munteni. Are o populație de 79.315 locuitori.
        </p>
        <br />
        <p>
          O așezare a existat în acest loc încă din secolul al XIII-lea, aici
          fiind localizată Civitas Milcoviae, reședința Episcopiei de Milcov,
          catolică. În secolul al XV-lea a fost ridicată pe un deal învecinat
          Cetatea Crăciuna, pe care Ștefan cel Mare a fortificat-o în anul 1482
          drept avanpost în calea expansiunii otomane.[4]
        </p>
        <br />
        <p>
          La începutul secolului al XVII-lea era consemnat ca sat, iar după anii
          1615-1620 este menționat ca târg la intersecția drumurilor comerciale
          care uneau Țara Românească cu Moldova. În secolele XVII-XVIII
          importanța așezării, cu cele două părți ale sale - moldovenească și
          muntenească - a crescut din nou, fapt atestat de numărul mare de
          biserici și mănăstiri construite aici.
        </p>
      </div>
      <ImgCity2 />
    </div>
  );
}

function Attractions() {
  let pozaLiceu = PozaCnu;
  let pozaTeatru = Poza2;
  let pozaCentru = Poza3;
  return (
    <div className="h-100vh">
      <h1 className="title-2 mt-4">Atracții turistice</h1>
      <div className="container mt-2 border">
        <div className="p-3 border d-flex">
          <p className="d-inline p-2 t-left">
            Colegiul Național „Unirea” (1866) - pe 7 ianuarie 1866 orașul avea
            primul gimnaziu și purta numele domnitorului Alexandru I. Cuza.
            Ulterior, din motive politice, gimnaziul este nevoit să adopte
            numele de „Unirea", devenind în 1885 Liceul „Unirea".Arhitectul a
            fost Constantin Băicoianu, lucrarea fiind finalizată în 1899. De pe
            băncile Liceul „Unirea" au ieșit multe personalitățile, printre
            care: arhitectul Anghel Saligny, arhitectul Ion Mincu, scriitorul și
            diplomatul Duiliu Zamfirescu, Constantin C. Giurescu, Dumitru F.
            Caian, geograful Simion Mehedinți, chimistul Gheorghe Gh.
            Longinescu, istoricul Ion Nestor etc
          </p>
          <img src={pozaLiceu} alt="Cnu" className="h-small " />
        </div>
        <div className="p-3 d-flex border">
          <p className="d-inline p-2 t-left">
            Teatrul Municipal „Maior Gheorghe Pastia” - Construcția clădirii
            teatrale, realizate în stilul baroc, a fost încheiată în 1913.
            Edificiul cultural în sine fiind o replică în miniatură a teatrului
            național din Iași și a celui din Odessa. Pe data de 21 noiembrie au
            avut loc primele spectacole „Fântâna Bladuziei” de Vasile Alecsandri
            și „Pe malul gârlei” de focșăneanul Ollănescu-Ascanio.
          </p>
          <img src={pozaTeatru} alt="Cnu" className="h-small w-25" />
        </div>
        <div className="p-3 d-flex border">
          <p className="d-inline p-2 t-left">
            Monumentul Unirii - a fost inaugurat la 24 ianuarie 1976. Monumentul
            este amplasat în centrul orașului, pe hotarul de despărțire a celor
            două regiuni ale vechiului așezământ, Focșanii Munteniei și Focșanii
            Moldovei, înainte de unirea lor în 1862 pe data de 10 iulie.
            Bazorelief de bronz este opera sculptorului Ion Jalea.
          </p>
          <img src={pozaCentru} alt="Cnu" className="h-small w-25" />
        </div>
      </div>
    </div>
  );
}

function ImgMap() {
  let gif1 = Gif1;
  return (
    <div className="d-inline">
      <img className=" mr-5" src={gif1} alt="poza" />
    </div>
  );
}

function ImgCity2() {
  let poza = Poza1;
  return (
    <div>
      <img className=" mt-5 w-50" src={poza} alt="poza" />
    </div>
  );
}

function NotFound() {
  return <div className="title-3">Page Not Found!</div>;
}

function Gallery() {
  return (
    <div className="container ">
      <div className="h-75">
        <MyGallery />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/about" className="links">
        About
      </Link>
      <Link to="/attractions" className="links">
        Attractions
      </Link>
      <Link to="/gallery" className="links">
        Gallery
      </Link>
      <Link to="/detalii" className="links">
        Alte Detalii
      </Link>
    </div>
  );
}

function RoutesComponent() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutCity} />
            <Route exact path="/attractions" component={Attractions} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/other" component={OtherDetails} />
            <Route path="/detalii" component={Detalii}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function OtherDetails() {
  return (
    <ul className="h-100vh mt-5">
      {focsaniData.map((item) => {
        return (
          <li className="" key={item.id}>
            <Link className="links" to={`/detalii/${item.id}`}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

function Detalii() {
  return (
    <Switch>
      <Route exact path="/detalii" component={OtherDetails} />
      <Route path="/detalii/:id" component={Detaliu} />
    </Switch>
  );
}

function Detaliu(props){
  let detaliuId;
  let detaliu;


  detaliuId = parseInt(props.match.params.id, 10);

  for (let i = 0; i < focsaniData.length; i++) {
    if (focsaniData[i].id === detaliuId) {
    detaliu = focsaniData[i];
    break;
    }
  }

  if (detaliu !== undefined)
  {
    return(
      <div className="bg-dark mt-3 h-100vh">
        <h1 className="title-3 p-3">{detaliu.name}</h1>
        <div className="container p-3">
          <p className="fs-2">{detaliu.data}</p>
        </div>
      </div>
    )
  }
  else
  {
    return <h2>Page Not Found!</h2>
  }
}