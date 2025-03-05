async function calculateHalfShekel() {
  const apiKey = "f13c5cc94ca1c56542e5364507f280e7"; // הכנס את המפתח שלך מ-MetalPriceAPI

  try {
    // שליחת בקשה ל-API של MetalPriceAPI לקבלת מחירים של כסף (XAG)
    const response = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=ILS&currencies=XAG`);

    // אם התגובה לא תקינה, הדפס את סטטוס התשובה
    if (!response.ok) {
      console.error("שגיאה בתגובה:", response.status, response.statusText);
      return;
    }

    const data = await response.json();

    // קבלת המחיר של USDXAG מתוך ה-API
    const priceInILS = data.rates.ILSXAG; // מחיר כסף לפי ILS ל-XAG

    if (!priceInILS) {
      console.error("לא נמצא מחיר עבור ILSXAG");
      document.getElementById("result").innerText = "לא נמצא מחיר עבור ILSXAG";
      return;
    }
    const pricePerGram = priceInILS / 31.1035

    // הצגת המחיר ב-ILSXAG
    document.getElementById('result').innerHTML = `
        <p>להלכה מחצית השקל בדיני תורה הוא 9.6 גר' כסף (פדיון הבן): ${(pricePerGram * 9.6).toFixed(3)} ₪</p>
        <p>פלוס מע"מ: ${((pricePerGram * 9.6).toFixed(3)) * 1.17} ₪</p>

        <p>ואילו בדברים שהם זכר או דרבנן אפשר להסתפק שמחצית השקל היא 8.5 גרם כסף כפי משקל השקל שנפסק בשו"ע: ${(pricePerGram * 8.5).toFixed(3)} ₪</p>
        <p>פלוס מע"מ: ${((pricePerGram * 8.5).toFixed(3)) * 1.17} ₪</p>

    `;
  } catch (error) {
    // במקרה של שגיאה בהבאת הנתונים
    document.getElementById("result").innerText = "הייתה שגיאה בקבלת הנתונים";
    console.error("שגיאה:", error); // הדפס את השגיאה בקונסול
  }
}
  



