// // פונקציה שמחשבת את ערך מחצית השקל לפי גרם כסף
// async function calculateHalfShekel() {
//     try {
//         // שליחת בקשה ל-API כדי לקבל את המחיר של כסף
//         const response = await fetch('https://api.metals-api.com/v1/latest?access_key=API_KEY&base=USD&symbols=XAG');
//         const data = await response.json();

//         // קבלת המחיר של גרם כסף
//         const pricePerOunce = data.rates.XAG; // מחיר לאונקיה (1 אוני = 31.1035 גרם)
//         const pricePerGram = pricePerOunce / 31.1035; // חישוב המחיר לגרם כסף

//         // חישוב עבור 9.6 גרם כסף (הלכתי)
//         const valueHalachic = 9.6 * pricePerGram;

//         // חישוב עבור 8.5 גרם כסף (דרבנן)
//         const valueZachorDrabanan = 8.5 * pricePerGram;

//         // הצגת התוצאות בדף
//         document.getElementById('result').innerHTML = `
//             <p>הערך של מחצית השקל לפי 9.6 גרם כסף (הלכתי): ₪${valueHalachic.toFixed(2)}</p>
//             <p>הערך של מחצית השקל לפי 8.5 גרם כסף (דרבנן): ₪${valueZachorDrabanan.toFixed(2)}</p>
//         `;
//     } catch (error) {
//         // במקרה של שגיאה בהבאת הנתונים
//         document.getElementById('result').innerText = 'הייתה שגיאה בקבלת הנתונים';
//     }
// }

// f13c5cc94ca1c56542e5364507f280e7

async function calculateHalfShekel() {
    const apiKey = "f13c5cc94ca1c56542e5364507f280e7"; // הכנס את המפתח שלך מ-MetalPriceAPI
  
    try {
      // שליחת בקשה ל-API של MetalPriceAPI לקבלת מחירים של כסף (XAG)
      const response = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=XAG`);
  
      // אם התגובה לא תקינה, הדפס את סטטוס התשובה
      if (!response.ok) {
        console.error("שגיאה בתגובה:", response.status, response.statusText);
        return;
      }
  
      const data = await response.json();
  
      // קבלת המחיר של USDXAG מתוך ה-API
      const priceInUSD = data.rates.USDXAG; // מחיר כסף לפי USD ל-XAG
  
      if (!priceInUSD) {
        console.error("לא נמצא מחיר עבור USDXAG");
        document.getElementById("result").innerText = "לא נמצא מחיר עבור USDXAG";
        return;
      }
  
      // הצגת המחיר ב-USDXAG
      document.getElementById('result').innerHTML = `
          <p>הערך של 1 USD ב-XAG הוא: ${priceInUSD}</p>
      `;
    } catch (error) {
      // במקרה של שגיאה בהבאת הנתונים
      document.getElementById("result").innerText = "הייתה שגיאה בקבלת הנתונים";
      console.error("שגיאה:", error); // הדפס את השגיאה בקונסול
    }
  }
  



