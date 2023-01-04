import Lenovo from "./Lenovo";
import MacBook from "./MacBook";

let lenovo = new Lenovo("IdeaPad", true, true);
lenovo.b();
console.log(lenovo);

let macbook = new MacBook(2016, false, false);
macbook.a();
console.log(macbook);
